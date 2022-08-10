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
exports.TeamAccountDiscoverySettings = void 0;
/**
* Team account discovery settings
*/
var TeamAccountDiscoverySettings = /** @class */ (function () {
    function TeamAccountDiscoverySettings() {
    }
    TeamAccountDiscoverySettings.getAttributeTypeMap = function () {
        return TeamAccountDiscoverySettings.attributeTypeMap;
    };
    TeamAccountDiscoverySettings.discriminator = undefined;
    TeamAccountDiscoverySettings.attributeTypeMap = [
        {
            "name": "accountDiscovery",
            "baseName": "accountDiscovery",
            "type": "TeamAccountDiscoverySettings.AccountDiscoveryEnum"
        }
    ];
    return TeamAccountDiscoverySettings;
}());
exports.TeamAccountDiscoverySettings = TeamAccountDiscoverySettings;
(function (TeamAccountDiscoverySettings) {
    var AccountDiscoveryEnum;
    (function (AccountDiscoveryEnum) {
        AccountDiscoveryEnum[AccountDiscoveryEnum["Hidden"] = 'hidden'] = "Hidden";
        AccountDiscoveryEnum[AccountDiscoveryEnum["Request"] = 'request'] = "Request";
        AccountDiscoveryEnum[AccountDiscoveryEnum["Join"] = 'join'] = "Join";
    })(AccountDiscoveryEnum = TeamAccountDiscoverySettings.AccountDiscoveryEnum || (TeamAccountDiscoverySettings.AccountDiscoveryEnum = {}));
})(TeamAccountDiscoverySettings = exports.TeamAccountDiscoverySettings || (exports.TeamAccountDiscoverySettings = {}));
exports.TeamAccountDiscoverySettings = TeamAccountDiscoverySettings;
