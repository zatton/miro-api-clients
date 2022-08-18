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


export class BoardMemberChanges {
    /**
    * Role of the board member. Possible values: `viewer`, `commenter`, `editor`, `coowner`, `owner`, `guest`
    */
    'role'?: BoardMemberChanges.RoleEnum = BoardMemberChanges.RoleEnum.Commenter;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "role",
            "baseName": "role",
            "type": "BoardMemberChanges.RoleEnum"
        }    ];

    static getAttributeTypeMap() {
        return BoardMemberChanges.attributeTypeMap;
    }
}

export namespace BoardMemberChanges {
    export enum RoleEnum {
        Viewer = <any> 'viewer',
        Commenter = <any> 'commenter',
        Editor = <any> 'editor',
        Coowner = <any> 'coowner',
        Owner = <any> 'owner',
        Guest = <any> 'guest'
    }
}
