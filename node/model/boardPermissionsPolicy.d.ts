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
* Defines the permissions policies for the board. For more information, see [Permissions policy](https://developers.miro.com/reference/rest-api-policy-data-model#permissions-policy).
*/
export declare class BoardPermissionsPolicy {
    /**
    * Defines who can start or stop timer, voting, video chat, screen sharing, attention management. Others will only be able to join. To change the value for the `collaborationToolsStartAccess` parameter, contact Miro Customer Support. Possible values: `all_editors`, `board_owners_and_coowners`
    */
    'collaborationToolsStartAccess'?: BoardPermissionsPolicy.CollaborationToolsStartAccessEnum;
    /**
    * Defines who can copy the board, copy objects, download images, and save the board as a template or PDF. Possible values: `anyone`, `team_members`, `team_editors`, `board_owner`
    */
    'copyAccess'?: BoardPermissionsPolicy.CopyAccessEnum;
    /**
    * Defines who can change access and invite users to this board. To change the value for the `sharingAccess` parameter, contact Miro Customer Support. Possible values: `team_members_with_editing_rights`, `owner_and_coowners`
    */
    'sharingAccess'?: BoardPermissionsPolicy.SharingAccessEnum;
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
export declare namespace BoardPermissionsPolicy {
    enum CollaborationToolsStartAccessEnum {
        AllEditors,
        BoardOwnersAndCoowners
    }
    enum CopyAccessEnum {
        Anyone,
        TeamMembers,
        TeamEditors,
        BoardOwner
    }
    enum SharingAccessEnum {
        TeamMembersWithEditingRights,
        OwnerAndCoowners
    }
}
