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
export declare class UserSchemaRolesInner {
    'display'?: UserSchemaRolesInner.DisplayEnum;
    'primary'?: boolean;
    'type'?: string;
    'value'?: UserSchemaRolesInner.ValueEnum;
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
export declare namespace UserSchemaRolesInner {
    enum DisplayEnum {
        Member,
        TeamAdmin
    }
    enum ValueEnum {
        User,
        Admin
    }
}
