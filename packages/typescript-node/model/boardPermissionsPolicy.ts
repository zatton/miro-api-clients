/**
 * Miro API
 * Miro API
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @internal
 * Defines the permissions policies for the board. For more information, see [Permissions policy](https://developers.miro.com/reference/rest-api-policy-data-model#permissions-policy).
 */
export class BoardPermissionsPolicy {
  /**
   * Defines who can start or stop timer, voting, video chat, screen sharing, attention management. Others will only be able to join. To change the value for the `collaborationToolsStartAccess` parameter, contact Miro Customer Support. Possible values: `all_editors`, `board_owners_and_coowners`
   */
  'collaborationToolsStartAccess'?:
    | string
    | typeof BoardPermissionsPolicy.CollaborationToolsStartAccessEnum[keyof typeof BoardPermissionsPolicy.CollaborationToolsStartAccessEnum] =
    BoardPermissionsPolicy.CollaborationToolsStartAccessEnum.AllEditors
  /**
   * Defines who can copy the board, copy objects, download images, and save the board as a template or PDF. Possible values: `anyone`, `team_members`, `team_editors`, `board_owner`
   */
  'copyAccess'?:
    | string
    | typeof BoardPermissionsPolicy.CopyAccessEnum[keyof typeof BoardPermissionsPolicy.CopyAccessEnum] =
    BoardPermissionsPolicy.CopyAccessEnum.Anyone
  /**
   * Defines who can change access and invite users to this board. To change the value for the `sharingAccess` parameter, contact Miro Customer Support. Possible values: `team_members_with_editing_rights`, `owner_and_coowners`
   */
  'sharingAccess'?:
    | string
    | typeof BoardPermissionsPolicy.SharingAccessEnum[keyof typeof BoardPermissionsPolicy.SharingAccessEnum] =
    BoardPermissionsPolicy.SharingAccessEnum.TeamMembersWithEditingRights

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'collaborationToolsStartAccess',
      baseName: 'collaborationToolsStartAccess',
      type: 'BoardPermissionsPolicy.CollaborationToolsStartAccessEnum',
    },
    {
      name: 'copyAccess',
      baseName: 'copyAccess',
      type: 'BoardPermissionsPolicy.CopyAccessEnum',
    },
    {
      name: 'sharingAccess',
      baseName: 'sharingAccess',
      type: 'BoardPermissionsPolicy.SharingAccessEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return BoardPermissionsPolicy.attributeTypeMap
  }
}

export namespace BoardPermissionsPolicy {
  export const CollaborationToolsStartAccessEnum = {
    AllEditors: 'all_editors',
    BoardOwnersAndCoowners: 'board_owners_and_coowners',
  } as const
  export const CopyAccessEnum = {
    Anyone: 'anyone',
    TeamMembers: 'team_members',
    TeamEditors: 'team_editors',
    BoardOwner: 'board_owner',
  } as const
  export const SharingAccessEnum = {
    TeamMembersWithEditingRights: 'team_members_with_editing_rights',
    OwnerAndCoowners: 'owner_and_coowners',
  } as const
}
