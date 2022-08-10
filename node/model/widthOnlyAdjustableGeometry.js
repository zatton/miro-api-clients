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
exports.WidthOnlyAdjustableGeometry = void 0;
/**
* Contains geometrical information about the item, such as its width or rotation. You can only specify the width of the text item as the height is dynamically updated based on the content. For information about the JSON properties, see [Geometry](https://developers.miro.com/reference/geometry).
*/
var WidthOnlyAdjustableGeometry = /** @class */ (function () {
    function WidthOnlyAdjustableGeometry() {
    }
    WidthOnlyAdjustableGeometry.getAttributeTypeMap = function () {
        return WidthOnlyAdjustableGeometry.attributeTypeMap;
    };
    WidthOnlyAdjustableGeometry.discriminator = undefined;
    WidthOnlyAdjustableGeometry.attributeTypeMap = [
        {
            "name": "rotation",
            "baseName": "rotation",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        }
    ];
    return WidthOnlyAdjustableGeometry;
}());
exports.WidthOnlyAdjustableGeometry = WidthOnlyAdjustableGeometry;
