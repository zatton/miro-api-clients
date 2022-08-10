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
exports.TagWithLinks = void 0;
var TagWithLinks = /** @class */ (function () {
    function TagWithLinks() {
    }
    TagWithLinks.getAttributeTypeMap = function () {
        return TagWithLinks.attributeTypeMap;
    };
    TagWithLinks.discriminator = undefined;
    TagWithLinks.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "fillColor",
            "baseName": "fillColor",
            "type": "TagWithLinks.FillColorEnum"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "SelfLink"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return TagWithLinks;
}());
exports.TagWithLinks = TagWithLinks;
(function (TagWithLinks) {
    var FillColorEnum;
    (function (FillColorEnum) {
        FillColorEnum[FillColorEnum["Red"] = 'red'] = "Red";
        FillColorEnum[FillColorEnum["LightGreen"] = 'light_green'] = "LightGreen";
        FillColorEnum[FillColorEnum["Cyan"] = 'cyan'] = "Cyan";
        FillColorEnum[FillColorEnum["Yellow"] = 'yellow'] = "Yellow";
        FillColorEnum[FillColorEnum["Magenta"] = 'magenta'] = "Magenta";
        FillColorEnum[FillColorEnum["Green"] = 'green'] = "Green";
        FillColorEnum[FillColorEnum["Blue"] = 'blue'] = "Blue";
        FillColorEnum[FillColorEnum["Gray"] = 'gray'] = "Gray";
        FillColorEnum[FillColorEnum["Violet"] = 'violet'] = "Violet";
        FillColorEnum[FillColorEnum["DarkGreen"] = 'dark_green'] = "DarkGreen";
        FillColorEnum[FillColorEnum["DarkBlue"] = 'dark_blue'] = "DarkBlue";
        FillColorEnum[FillColorEnum["Black"] = 'black'] = "Black";
    })(FillColorEnum = TagWithLinks.FillColorEnum || (TagWithLinks.FillColorEnum = {}));
})(TagWithLinks = exports.TagWithLinks || (exports.TagWithLinks = {}));
exports.TagWithLinks = TagWithLinks;
