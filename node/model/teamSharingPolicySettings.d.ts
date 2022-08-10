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
* Team sharing policy settings
*/
export declare class TeamSharingPolicySettings {
    /**
    * Set who can create assets in a team
    */
    'createAssetAccessLevel'?: TeamSharingPolicySettings.CreateAssetAccessLevelEnum;
    /**
    *  Default board access * \"private\": Only board owners can access * \"view\":    Anyone in the team can view * \"comment\": Anyone in the team can comment * \"edit\":    Anyone in the team can edit
    */
    'defaultBoardAccess'?: TeamSharingPolicySettings.DefaultBoardAccessEnum;
    /**
    *  Default organization access * \"private\": Only board owners can access * \"view\":    Anyone in the team can view * \"comment\": Anyone in the team can comment * \"edit\":    Anyone in the team can edit
    */
    'defaultOrganizationAccess'?: TeamSharingPolicySettings.DefaultOrganizationAccessEnum;
    /**
    *  Default project access * \"private\": Only board owners can access * \"view\":    Anyone in the team can view
    */
    'defaultProjectAccess'?: TeamSharingPolicySettings.DefaultProjectAccessEnum;
    /**
    *  * \"allowed\": Allow move board to team * \"not_allowed\": Not allow move board to team
    */
    'moveBoardToAccount'?: TeamSharingPolicySettings.MoveBoardToAccountEnum;
    /**
    *  * \"allowed\": Allow sharing on team * \"not_allowed\": Not allow sharing on team
    */
    'sharingOnAccount'?: TeamSharingPolicySettings.SharingOnAccountEnum;
    /**
    *  * \"allowed\": Allow sharing on organization * \"allowed_with_editing\": Allow sharing with editing on organization * \"not_allowed\": Not allow sharing on organization
    */
    'sharingOnOrganization'?: TeamSharingPolicySettings.SharingOnOrganizationEnum;
    /**
    *  * \"allowed\": Allow sharing via public link * \"allowed_with_editing\": Allow sharing with editing via public link * \"not_allowed\": Not allow sharing via public link
    */
    'sharingViaPublicLink'?: TeamSharingPolicySettings.SharingViaPublicLinkEnum;
    /**
    *  * \"allowed\": Allow sharing with external users * \"not_allowed\": Not allow sharing with external users
    */
    'sharingWithExternalUsers'?: TeamSharingPolicySettings.SharingWithExternalUsersEnum;
    /**
    * Enable whitelist domains
    */
    'whiteListDomainsEnabled'?: boolean;
    /**
    * Whitelisted domains
    */
    'whiteListedDomains'?: Array<string>;
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
export declare namespace TeamSharingPolicySettings {
    enum CreateAssetAccessLevelEnum {
        CompanyAdmins,
        Admins,
        AllMembers
    }
    enum DefaultBoardAccessEnum {
        Private,
        View,
        Comment,
        Edit
    }
    enum DefaultOrganizationAccessEnum {
        Private,
        View,
        Comment,
        Edit
    }
    enum DefaultProjectAccessEnum {
        Private,
        View
    }
    enum MoveBoardToAccountEnum {
        Allowed,
        NotAllowed
    }
    enum SharingOnAccountEnum {
        Allowed,
        NotAllowed
    }
    enum SharingOnOrganizationEnum {
        Allowed,
        AllowedWithEditing,
        NotAllowed
    }
    enum SharingViaPublicLinkEnum {
        Allowed,
        AllowedWithEditing,
        NotAllowed
    }
    enum SharingWithExternalUsersEnum {
        Allowed,
        NotAllowed
    }
}
