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

import { Board } from './board';
import { PageLinks } from './pageLinks';

export class BoardsPagedResponse {
    /**
    * Contains the result data.
    */
    'data'?: Array<Board>;
    /**
    * Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).
    */
    'total'?: number;
    /**
    * Number of results returned in the response. The `size` is the number of results returned considering the `offset` and the `limit` values sent in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`.<br>If there are `10` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `10`.<br>If there are `30` results, and the request has the offset set to `28` and the `limit` set to `20`, the `size` of the results will be `2` as the `offset` is the zero-based offset of the first item in the collection.
    */
    'size'?: number;
    /**
    * Zero-based index of the first item in the collection. For example, If there are `30` results, and the request has the offset set to `28`, the response will return `2` results.
    */
    'offset'?: number;
    /**
    * Maximum number of results returned based on the `limit` specified in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the offset parameter. In this example, you will set the offset parameter to 20 as the offset is zero-based. 
    */
    'limit'?: number;
    'links'?: PageLinks;
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Board>"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "PageLinks"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BoardsPagedResponse.attributeTypeMap;
    }
}

