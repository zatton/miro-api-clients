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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.OrganizationMembersSearchByEmailsResponse = void 0;
/**
* Response for search organization members by user emails
*/
var OrganizationMembersSearchByEmailsResponse = /** @class */ (function (_super) {
    __extends(OrganizationMembersSearchByEmailsResponse, _super);
    function OrganizationMembersSearchByEmailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrganizationMembersSearchByEmailsResponse.discriminator = undefined;
    return OrganizationMembersSearchByEmailsResponse;
}(Array));
exports.OrganizationMembersSearchByEmailsResponse = OrganizationMembersSearchByEmailsResponse;
