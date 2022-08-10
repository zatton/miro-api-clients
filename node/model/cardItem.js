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
exports.CardItem = void 0;
var CardItem = /** @class */ (function () {
    function CardItem() {
    }
    CardItem.getAttributeTypeMap = function () {
        return CardItem.attributeTypeMap;
    };
    CardItem.discriminator = undefined;
    CardItem.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "CardData"
        },
        {
            "name": "style",
            "baseName": "style",
            "type": "CardStyle"
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
    return CardItem;
}());
exports.CardItem = CardItem;
