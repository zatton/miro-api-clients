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
exports.GroupSchemaMeta = void 0;
var GroupSchemaMeta = /** @class */ (function () {
    function GroupSchemaMeta() {
    }
    GroupSchemaMeta.getAttributeTypeMap = function () {
        return GroupSchemaMeta.attributeTypeMap;
    };
    GroupSchemaMeta.discriminator = undefined;
    GroupSchemaMeta.attributeTypeMap = [
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "resourceType",
            "baseName": "resourceType",
            "type": "string"
        }
    ];
    return GroupSchemaMeta;
}());
exports.GroupSchemaMeta = GroupSchemaMeta;
