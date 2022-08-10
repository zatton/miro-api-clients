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
exports.InvitationError = void 0;
/**
* Contains information about the invites that failed.
*/
var InvitationError = /** @class */ (function () {
    function InvitationError() {
    }
    InvitationError.getAttributeTypeMap = function () {
        return InvitationError.attributeTypeMap;
    };
    InvitationError.discriminator = undefined;
    InvitationError.attributeTypeMap = [
        {
            "name": "memberEmail",
            "baseName": "memberEmail",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        }
    ];
    return InvitationError;
}());
exports.InvitationError = InvitationError;
