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
* Contains pagination links for the collection.
*/
export class PageLinksPlatformContainers {
    /**
    * Link to retrieve information in the first page of the collection.
    */
    'first'?: string;
    /**
    * Link to the retrieve information in the last page of the collection.
    */
    'last'?: string;
    /**
    * Link to retrieve information in the next page of the collection.
    */
    'next'?: string;
    /**
    * Link to retrieve information in the previous page of the collection.
    */
    'prev'?: string;
    /**
    * Link to retrieve information in the current page of the collection.
    */
    'self'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "first",
            "baseName": "first",
            "type": "string"
        },
        {
            "name": "last",
            "baseName": "last",
            "type": "string"
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "prev",
            "baseName": "prev",
            "type": "string"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PageLinksPlatformContainers.attributeTypeMap;
    }
}

