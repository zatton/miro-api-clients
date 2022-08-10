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
exports.TextData = void 0;
/**
* Contains text item data, such as the title, content, or description. For more information on the JSON properties, see [Data](https://developers.miro.com/reference/data).
*/
var TextData = /** @class */ (function () {
    function TextData() {
        /**
        * The actual text (content) that appears in the text item.
        */
        this['content'] = 'Hello';
    }
    TextData.getAttributeTypeMap = function () {
        return TextData.attributeTypeMap;
    };
    TextData.discriminator = undefined;
    TextData.attributeTypeMap = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        }
    ];
    return TextData;
}());
exports.TextData = TextData;
