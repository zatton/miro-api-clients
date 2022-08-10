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
exports.ImageUrlData = void 0;
/**
* For information about the JSON properties, see [Data](https://developers.miro.com/reference/data).
*/
var ImageUrlData = /** @class */ (function () {
    function ImageUrlData() {
        /**
        * URL of the image.
        */
        this['url'] = 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png';
    }
    ImageUrlData.getAttributeTypeMap = function () {
        return ImageUrlData.attributeTypeMap;
    };
    ImageUrlData.discriminator = undefined;
    ImageUrlData.attributeTypeMap = [
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
    return ImageUrlData;
}());
exports.ImageUrlData = ImageUrlData;
