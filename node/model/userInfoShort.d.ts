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
* Contains information about the user who last modified the board.
*/
export declare class UserInfoShort {
    /**
    * Unique identifier (ID) of the user.
    */
    'id'?: number;
    /**
    * Name of the user.
    */
    'name'?: string;
    /**
    * Indicates the type of object returned. In this case, `type` returns `user`.
    */
    'type'?: string;
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
