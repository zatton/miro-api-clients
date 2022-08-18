#!/usr/bin/env node
import isEqual from 'lodash/isEqual.js'

import fetch from 'node-fetch'

const apis = [
  'https://api.miro.com/api-docs/platform',
  'https://api.miro.com/api-docs/platform-containers',
  'https://api.miro.com/api-docs/platform-experimental',
  'https://api.miro.com/api-docs/platform-tags',
  'https://api.miro.com/api-docs/enterprise',
]

async function getSpec(url) {
  const response = await fetch(url)
  if (response.status > 299) {
    throw new Error(`Failed to fetch ${url}: ${await response.text()}`)
  }
  const spec = await response.json()

  // some specs are double encoded so we need to JSON.parse again
  if (typeof spec === 'string') {
    return JSON.parse(spec)
  }
  return spec
}

const specs = await Promise.all(apis.map(getSpec))

function mergeWithoutConflict (first, second) {
  for (const key of Object.keys(first)) {
    if (second[key] && !isEqual(first[key], second[key])) throw new Error('Conflict: ' + key)
  }
  return {
    ...first,
    ...second
  }
}

const mergedSpec = specs.reduce((acc, spec) => {
  const specTitle = spec.info?.title?.replaceAll(' ', '')
  const specSchemasDef = spec.components?.schemas || {}

  let specPathsDef = spec.paths

  for (const key of Object.keys(specSchemasDef)) {
    const existingDefinition = acc.components.schemas[key]
    delete acc.components.schemas[key]
    let newSchema = specSchemasDef[key]
    let newKey = key
    if (existingDefinition && isEqual(existingDefinition, newSchema)) {
      newKey = `${key}${specTitle}`
      specPathsDef = JSON.parse(JSON.stringify(specPathsDef).replaceAll(`"#/components/schemas/${key}"`, `"#/components/schemas/${newKey}"`))
    }
    acc.components.schemas[newKey] = newSchema
  }

  for (const key of Object.keys(spec.paths)) {
    if (acc.paths[key]) {
      const newKey = key.replace('boards/{board_id', 'boards/{board_id_' + specTitle)
      const pathConfig = JSON.parse(JSON.stringify(spec.paths[key]).replaceAll('board_id', 'board_id_' + specTitle))
      delete spec.paths[key]
      spec.paths[newKey] = pathConfig
    }
  }

  return {
    ...acc,
    paths: mergeWithoutConflict(acc.paths, spec.paths),
    components: {
      ...acc.components,
      schemas: mergeWithoutConflict(acc.components.schemas, specSchemasDef)
    },
  }
}, {
    openapi: '3.0.1',
    info: {
      description: 'Miro API',
      title: 'Miro API',
      version: '0.1'
    },
    servers: [ { url: 'https://api.miro.com/' } ],
    paths: {},
    components: {
      schemas: {},
      securitySchemes: {
        oAuth2AuthCode: {
          type: "oauth2",
          description: "For more information, see https://developers.miro.com/reference/authorization-flow-for-expiring-tokens",
          flows: {
            authorizationCode: {
              authorizationUrl: "https://miro.com/oauth/authorize",
              tokenUrl: "https://api.miro.com/v1/oauth/token",
              scopes: {
                "boards:read": "Retrieve information about boards, board members, or items",
                "boards:write": "Create, update, or delete boards, board members, or items",
                "microphone:listen": "Access a user's microphone to record audio in an iFrame",
                "screen:record": "Access a user's screen to record it in an iFrame",
                "webcam:record": "Allows an iFrame to access a user's camera to record video",
                "organizations:read": "Read information about the organization, such as name, plan, number of licenses, organization settings, or organization members.",
                "organizations:teams:read": "Read team information, such as the list of teams, team settings, team members, for an organization.",
                "organizations:teams:write": "Create or delete teams, update team information, team settings, team members, for an organization."
              }
            }
          }
        },
      }
    }
  })

console.log(JSON.stringify(mergedSpec, null, 2))
