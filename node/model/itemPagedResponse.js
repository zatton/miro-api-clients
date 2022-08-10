"use strict";
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
exports.__esModule = true;
exports.ItemPagedResponse = void 0;
var ItemPagedResponse = /** @class */ (function () {
    function ItemPagedResponse() {
    }
    ItemPagedResponse.getAttributeTypeMap = function () {
        return ItemPagedResponse.attributeTypeMap;
    };
    ItemPagedResponse.discriminator = undefined;
    ItemPagedResponse.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GenericItem>"
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
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return ItemPagedResponse;
}());
exports.ItemPagedResponse = ItemPagedResponse;
