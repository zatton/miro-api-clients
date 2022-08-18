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
* Contains the current user\'s board membership details. The current user could be different from the board owner.
*/
export class BoardMember {
    /**
    * Unique identifier (ID) of the user.
    */
    'id'?: number;
    /**
    * Name of the user.
    */
    'name'?: string;
    /**
    * Role of the board member. Possible values: `viewer`, `commenter`, `editor`, `coowner`, `owner`, `guest`
    */
    'role'?: BoardMember.RoleEnum;
    /**
    * Type of the object that is returned. In this case, `type` returns `board_member`.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "BoardMember.RoleEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BoardMember.attributeTypeMap;
    }
}

export namespace BoardMember {
    export enum RoleEnum {
        Viewer = <any> 'viewer',
        Commenter = <any> 'commenter',
        Editor = <any> 'editor',
        Coowner = <any> 'coowner',
        Owner = <any> 'owner',
        Guest = <any> 'guest'
    }
}
