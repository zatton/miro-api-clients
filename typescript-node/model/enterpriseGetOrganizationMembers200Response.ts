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

import { OrganizationMember } from './organizationMember';
import { OrganizationMembersSearchResponse } from './organizationMembersSearchResponse';

export class EnterpriseGetOrganizationMembers200Response {
    'cursor'?: string;
    'data'?: Array<OrganizationMember>;
    'limit'?: number;
    'size'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<OrganizationMember>"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EnterpriseGetOrganizationMembers200Response.attributeTypeMap;
    }
}

