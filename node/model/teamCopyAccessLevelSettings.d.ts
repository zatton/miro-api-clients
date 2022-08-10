/**
 * Platform Tags
 * SCIM V1 API implemented by Miro
 *
 * The version of the OpenAPI document: v2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
* Team copy access settings
*/
export declare class TeamCopyAccessLevelSettings {
    /**
    *  * \"anyone\":       Anyone with the board access can copy board content on newly created boards. * \"team_members\": Team members can copy board content on newly created boards. * \"team_editors\": Team members with editing rights can copy board content on newly created boards. * \"board_owner\":  Board owners only can copy board content on newly created boards.
    */
    'copyAccessLevel'?: TeamCopyAccessLevelSettings.CopyAccessLevelEnum;
    /**
    *  * \"anyone\":       Team members and users outside team can be given permission to copy board content. * \"team_members\": Only team members can be given permission to copy board content.
    */
    'copyAccessLevelLimitation'?: TeamCopyAccessLevelSettings.CopyAccessLevelLimitationEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace TeamCopyAccessLevelSettings {
    enum CopyAccessLevelEnum {
        Anyone,
        TeamMembers,
        TeamEditors,
        BoardOwner
    }
    enum CopyAccessLevelLimitationEnum {
        Anyone,
        TeamMembers
    }
}
