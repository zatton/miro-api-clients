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
exports.EmbedData = void 0;
var EmbedData = /** @class */ (function () {
    function EmbedData() {
    }
    EmbedData.getAttributeTypeMap = function () {
        return EmbedData.attributeTypeMap;
    };
    EmbedData.discriminator = undefined;
    EmbedData.attributeTypeMap = [
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "EmbedData.ModeEnum"
        },
        {
            "name": "providerName",
            "baseName": "providerName",
            "type": "string"
        },
        {
            "name": "providerUrl",
            "baseName": "providerUrl",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }
    ];
    return EmbedData;
}());
exports.EmbedData = EmbedData;
(function (EmbedData) {
    var ModeEnum;
    (function (ModeEnum) {
        ModeEnum[ModeEnum["Inline"] = 'inline'] = "Inline";
        ModeEnum[ModeEnum["Modal"] = 'modal'] = "Modal";
    })(ModeEnum = EmbedData.ModeEnum || (EmbedData.ModeEnum = {}));
})(EmbedData = exports.EmbedData || (exports.EmbedData = {}));
exports.EmbedData = EmbedData;
