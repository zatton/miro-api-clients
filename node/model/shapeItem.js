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
exports.ShapeItem = void 0;
var ShapeItem = /** @class */ (function () {
    function ShapeItem() {
    }
    ShapeItem.getAttributeTypeMap = function () {
        return ShapeItem.attributeTypeMap;
    };
    ShapeItem.discriminator = undefined;
    ShapeItem.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "ShapeData"
        },
        {
            "name": "style",
            "baseName": "style",
            "type": "ShapeStyle"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "Position"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "Geometry"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "CreatedBy"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "Date"
        },
        {
            "name": "modifiedBy",
            "baseName": "modifiedBy",
            "type": "ModifiedBy"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "ParentLinksEnvelope"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "WidgetLinks"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return ShapeItem;
}());
exports.ShapeItem = ShapeItem;
