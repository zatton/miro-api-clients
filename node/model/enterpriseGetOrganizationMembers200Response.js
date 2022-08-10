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
exports.EnterpriseGetOrganizationMembers200Response = void 0;
var EnterpriseGetOrganizationMembers200Response = /** @class */ (function () {
    function EnterpriseGetOrganizationMembers200Response() {
    }
    EnterpriseGetOrganizationMembers200Response.getAttributeTypeMap = function () {
        return EnterpriseGetOrganizationMembers200Response.attributeTypeMap;
    };
    EnterpriseGetOrganizationMembers200Response.discriminator = undefined;
    EnterpriseGetOrganizationMembers200Response.attributeTypeMap = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<OrganizationMember>"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        }
    ];
    return EnterpriseGetOrganizationMembers200Response;
}());
exports.EnterpriseGetOrganizationMembers200Response = EnterpriseGetOrganizationMembers200Response;
