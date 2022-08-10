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
exports.BoardMemberWithLinks = void 0;
var BoardMemberWithLinks = /** @class */ (function () {
    function BoardMemberWithLinks() {
    }
    BoardMemberWithLinks.getAttributeTypeMap = function () {
        return BoardMemberWithLinks.attributeTypeMap;
    };
    BoardMemberWithLinks.discriminator = undefined;
    BoardMemberWithLinks.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "BoardMemberWithLinks.RoleEnum"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "SelfLink"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return BoardMemberWithLinks;
}());
exports.BoardMemberWithLinks = BoardMemberWithLinks;
(function (BoardMemberWithLinks) {
    var RoleEnum;
    (function (RoleEnum) {
        RoleEnum[RoleEnum["Viewer"] = 'viewer'] = "Viewer";
        RoleEnum[RoleEnum["Commenter"] = 'commenter'] = "Commenter";
        RoleEnum[RoleEnum["Editor"] = 'editor'] = "Editor";
        RoleEnum[RoleEnum["Coowner"] = 'coowner'] = "Coowner";
        RoleEnum[RoleEnum["Owner"] = 'owner'] = "Owner";
        RoleEnum[RoleEnum["Guest"] = 'guest'] = "Guest";
    })(RoleEnum = BoardMemberWithLinks.RoleEnum || (BoardMemberWithLinks.RoleEnum = {}));
})(BoardMemberWithLinks = exports.BoardMemberWithLinks || (exports.BoardMemberWithLinks = {}));
exports.BoardMemberWithLinks = BoardMemberWithLinks;
