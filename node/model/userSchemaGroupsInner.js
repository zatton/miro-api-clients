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
exports.UserSchemaGroupsInner = void 0;
var UserSchemaGroupsInner = /** @class */ (function () {
    function UserSchemaGroupsInner() {
    }
    UserSchemaGroupsInner.getAttributeTypeMap = function () {
        return UserSchemaGroupsInner.attributeTypeMap;
    };
    UserSchemaGroupsInner.discriminator = undefined;
    UserSchemaGroupsInner.attributeTypeMap = [
        {
            "name": "display",
            "baseName": "display",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return UserSchemaGroupsInner;
}());
exports.UserSchemaGroupsInner = UserSchemaGroupsInner;
