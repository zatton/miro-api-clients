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
exports.FixedRatioNoRotationGeometry = void 0;
/**
* Contains geometrical information about the item. You can set either the width or height. You cannot set both the at the same time. For information about the JSON properties, see [Geometry](https://developers.miro.com/reference/geometry).
*/
var FixedRatioNoRotationGeometry = /** @class */ (function () {
    function FixedRatioNoRotationGeometry() {
    }
    FixedRatioNoRotationGeometry.getAttributeTypeMap = function () {
        return FixedRatioNoRotationGeometry.attributeTypeMap;
    };
    FixedRatioNoRotationGeometry.discriminator = undefined;
    FixedRatioNoRotationGeometry.attributeTypeMap = [
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        }
    ];
    return FixedRatioNoRotationGeometry;
}());
exports.FixedRatioNoRotationGeometry = FixedRatioNoRotationGeometry;
