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
* Team collaboration settings
*/
export class TeamCollaborationSettings {
    /**
    *  * \"enabled\": Enable Co-owner role on boards and projects * \"disabled\": Disabled Co-owner role on boards and projects 
    */
    'coOwnerRole'?: TeamCollaborationSettings.CoOwnerRoleEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "coOwnerRole",
            "baseName": "coOwnerRole",
            "type": "TeamCollaborationSettings.CoOwnerRoleEnum"
        }    ];

    static getAttributeTypeMap() {
        return TeamCollaborationSettings.attributeTypeMap;
    }
}

export namespace TeamCollaborationSettings {
    export enum CoOwnerRoleEnum {
        Enabled = <any> 'enabled',
        Disabled = <any> 'disabled'
    }
}
