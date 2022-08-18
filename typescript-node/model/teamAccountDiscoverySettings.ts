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
* Team account discovery settings
*/
export class TeamAccountDiscoverySettings {
    /**
    *  * \"hidden\":  Only invited users can see and access the team. * \"request\": Members of organization can find and request to join with admin approval. * \"join\":    Members of organization can find and join. 
    */
    'accountDiscovery'?: TeamAccountDiscoverySettings.AccountDiscoveryEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountDiscovery",
            "baseName": "accountDiscovery",
            "type": "TeamAccountDiscoverySettings.AccountDiscoveryEnum"
        }    ];

    static getAttributeTypeMap() {
        return TeamAccountDiscoverySettings.attributeTypeMap;
    }
}

export namespace TeamAccountDiscoverySettings {
    export enum AccountDiscoveryEnum {
        Hidden = <any> 'hidden',
        Request = <any> 'request',
        Join = <any> 'join'
    }
}
