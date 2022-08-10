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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.TeamSettingsApiApi = void 0;
var request_1 = require("request");
var models_1 = require("../model/models");
var apis_1 = require("./apis");
var defaultBasePath = 'https://api.miro.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
function TeamSettingsApiApi(accessToken) {
    return {
        /**
         * Retrieves default team settings of an existing organization.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Get default team settings
         * @param orgId The id of an Organization.
         */
        enterpriseGetDefaultTeamSettings: function (orgId) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarRequestOptions;
                return __generator(this, function (_a) {
                    localVarPath = defaultBasePath + '/v2/orgs/{org_id}/default_teams_settings'
                        .replace('org_id', encodeURIComponent(String(orgId)));
                    localVarQueryParameters = {};
                    localVarHeaderParams = {};
                    produces = ['application/json'];
                    // give precedence to 'application/json'
                    if (produces.indexOf('application/json') >= 0) {
                        localVarHeaderParams.Accept = 'application/json';
                    }
                    else {
                        localVarHeaderParams.Accept = produces.join(',');
                    }
                    // verify required parameter 'orgId' is not null or undefined
                    if (orgId === null || orgId === undefined) {
                        throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetDefaultTeamSettings.');
                    }
                    localVarRequestOptions = {
                        method: 'GET',
                        qs: localVarQueryParameters,
                        uri: localVarPath,
                        json: true,
                        headers: {
                            'Authorization': "Bearer ".concat(accessToken)
                        }
                    };
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            (0, request_1["default"])(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                    return;
                                }
                                if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    body = models_1.ObjectSerializer.deserialize(body, "TeamSettings");
                                    resolve({ response: response, body: body });
                                    return;
                                }
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            });
                        })];
                });
            });
        },
        /**
         * Retrieves team settings of an existing team.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Get team settings
         * @param teamId The id of a Team.
         */
        enterpriseGetTeamSettings: function (teamId) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarRequestOptions;
                return __generator(this, function (_a) {
                    localVarPath = defaultBasePath + '/v2/teams_settings/{team_id}'
                        .replace('team_id', encodeURIComponent(String(teamId)));
                    localVarQueryParameters = {};
                    localVarHeaderParams = {};
                    produces = ['application/json'];
                    // give precedence to 'application/json'
                    if (produces.indexOf('application/json') >= 0) {
                        localVarHeaderParams.Accept = 'application/json';
                    }
                    else {
                        localVarHeaderParams.Accept = produces.join(',');
                    }
                    // verify required parameter 'teamId' is not null or undefined
                    if (teamId === null || teamId === undefined) {
                        throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetTeamSettings.');
                    }
                    localVarRequestOptions = {
                        method: 'GET',
                        qs: localVarQueryParameters,
                        uri: localVarPath,
                        json: true,
                        headers: {
                            'Authorization': "Bearer ".concat(accessToken)
                        }
                    };
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            (0, request_1["default"])(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                    return;
                                }
                                if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    body = models_1.ObjectSerializer.deserialize(body, "TeamSettings");
                                    resolve({ response: response, body: body });
                                    return;
                                }
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            });
                        })];
                });
            });
        },
        /**
         * Updates team settings of an existing team.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Update team settings
         * @param teamId The id of a Team.
         * @param teamSettingsChanges
         */
        enterpriseUpdateTeamSettings: function (teamId, teamSettingsChanges) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarRequestOptions;
                return __generator(this, function (_a) {
                    localVarPath = defaultBasePath + '/v2/teams_settings/{team_id}'
                        .replace('team_id', encodeURIComponent(String(teamId)));
                    localVarQueryParameters = {};
                    localVarHeaderParams = {};
                    produces = ['application/json'];
                    // give precedence to 'application/json'
                    if (produces.indexOf('application/json') >= 0) {
                        localVarHeaderParams.Accept = 'application/json';
                    }
                    else {
                        localVarHeaderParams.Accept = produces.join(',');
                    }
                    // verify required parameter 'teamId' is not null or undefined
                    if (teamId === null || teamId === undefined) {
                        throw new Error('Required parameter teamId was null or undefined when calling enterpriseUpdateTeamSettings.');
                    }
                    // verify required parameter 'teamSettingsChanges' is not null or undefined
                    if (teamSettingsChanges === null || teamSettingsChanges === undefined) {
                        throw new Error('Required parameter teamSettingsChanges was null or undefined when calling enterpriseUpdateTeamSettings.');
                    }
                    localVarRequestOptions = {
                        method: 'PATCH',
                        qs: localVarQueryParameters,
                        uri: localVarPath,
                        json: true,
                        headers: {
                            'Authorization': "Bearer ".concat(accessToken)
                        },
                        body: models_1.ObjectSerializer.serialize(teamSettingsChanges, "TeamSettingsChanges")
                    };
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            (0, request_1["default"])(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                    return;
                                }
                                if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    body = models_1.ObjectSerializer.deserialize(body, "TeamSettings");
                                    resolve({ response: response, body: body });
                                    return;
                                }
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            });
                        })];
                });
            });
        }
    };
}
exports.TeamSettingsApiApi = TeamSettingsApiApi;
