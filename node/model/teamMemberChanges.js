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
exports.TeamMemberChanges = void 0;
var TeamMemberChanges = /** @class */ (function () {
    function TeamMemberChanges() {
    }
    TeamMemberChanges.getAttributeTypeMap = function () {
        return TeamMemberChanges.attributeTypeMap;
    };
    TeamMemberChanges.discriminator = undefined;
    TeamMemberChanges.attributeTypeMap = [
        {
            "name": "role",
            "baseName": "role",
            "type": "string"
        }
    ];
    return TeamMemberChanges;
}());
exports.TeamMemberChanges = TeamMemberChanges;
