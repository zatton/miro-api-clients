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
exports.BoardsApi = void 0;
var request_1 = require("request");
var models_1 = require("../model/models");
var apis_1 = require("./apis");
var defaultBasePath = 'https://api.miro.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
function BoardsApi(accessToken) {
    return {
        /**
         * Creates a copy of an existing board. You can also update the name, description, sharing policy, and permissions policy for the new board in the request body.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 4</a><br/>
         * @summary Copy board
         * @param copyFrom [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) that you want to copy.
         * @param boardChanges
         */
        copyBoard: function (copyFrom, boardChanges) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarRequestOptions;
                return __generator(this, function (_a) {
                    localVarPath = defaultBasePath + '/v2/boards';
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
                    // verify required parameter 'copyFrom' is not null or undefined
                    if (copyFrom === null || copyFrom === undefined) {
                        throw new Error('Required parameter copyFrom was null or undefined when calling copyBoard.');
                    }
                    if (copyFrom !== undefined) {
                        localVarQueryParameters['copy_from'] = models_1.ObjectSerializer.serialize(copyFrom, "string");
                    }
                    localVarRequestOptions = {
                        method: 'PUT',
                        qs: localVarQueryParameters,
                        uri: localVarPath,
                        json: true,
                        headers: {
                            'Authorization': "Bearer ".concat(accessToken)
                        },
                        body: models_1.ObjectSerializer.serialize(boardChanges, "BoardChanges")
                    };
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            (0, request_1["default"])(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                    return;
                                }
                                if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    body = models_1.ObjectSerializer.deserialize(body, "BoardWithLinks");
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
         * Creates a board with the specified name and sharing policies.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 3</a><br/>
         * @summary Create board
         * @param boardChanges
         */
        createBoard: function (boardChanges) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarRequestOptions;
                return __generator(this, function (_a) {
                    localVarPath = defaultBasePath + '/v2/boards';
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
                    localVarRequestOptions = {
                        method: 'POST',
                        qs: localVarQueryParameters,
                        uri: localVarPath,
                        json: true,
                        headers: {
                            'Authorization': "Bearer ".concat(accessToken)
                        },
                        body: models_1.ObjectSerializer.serialize(boardChanges, "BoardChanges")
                    };
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            (0, request_1["default"])(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                    return;
                                }
                                if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    body = models_1.ObjectSerializer.deserialize(body, "BoardWithLinks");
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
         *
         * @summary Delete board
         * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) that you want to delete.
         */
        deleteBoard: function (boardId) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarRequestOptions;
                return __generator(this, function (_a) {
                    localVarPath = defaultBasePath + '/v2/boards/{board_id}'
                        .replace('board_id', encodeURIComponent(String(boardId)));
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
                    // verify required parameter 'boardId' is not null or undefined
                    if (boardId === null || boardId === undefined) {
                        throw new Error('Required parameter boardId was null or undefined when calling deleteBoard.');
                    }
                    localVarRequestOptions = {
                        method: 'DELETE',
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
                                    body = models_1.ObjectSerializer.deserialize(body, "object");
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
         * Retrieves a list of boards that match the search criteria provided in the request. If you are an Enterprise customer and a Company Admin, you can retrieve all boards, including all private boards (boards that haven\'t been specifically shared with you) by enabling Content Admin permissions. To enable Content Admin permissions, see https://help.miro.com/hc/en-us/articles/360012777280-Content-Admin-permissions-for-Company-Admins. Note that you only get results instantaneously when you filter by `team_id`. If you use any other filter,  you need to give a few seconds for the indexing of newly created boards before retrieving boards.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a><br/>
         * @summary Get boards
         * @param teamId
         * @param query
         * @param owner
         * @param limit
         * @param offset
         * @param sort
         */
        getBoards: function (teamId, query, owner, limit, offset, sort) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarRequestOptions;
                return __generator(this, function (_a) {
                    localVarPath = defaultBasePath + '/v2/boards';
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
                    if (teamId !== undefined) {
                        localVarQueryParameters['team_id'] = models_1.ObjectSerializer.serialize(teamId, "string");
                    }
                    if (query !== undefined) {
                        localVarQueryParameters['query'] = models_1.ObjectSerializer.serialize(query, "string");
                    }
                    if (owner !== undefined) {
                        localVarQueryParameters['owner'] = models_1.ObjectSerializer.serialize(owner, "string");
                    }
                    if (limit !== undefined) {
                        localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "string");
                    }
                    if (offset !== undefined) {
                        localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "string");
                    }
                    if (sort !== undefined) {
                        localVarQueryParameters['sort'] = models_1.ObjectSerializer.serialize(sort, "'default' | 'last_modified' | 'last_opened' | 'last_created' | 'alphabetically'");
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
                                    body = models_1.ObjectSerializer.deserialize(body, "BoardsPagedResponse");
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
         * Retrieves information about a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a><br/>
         * @summary Get specific board
         * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) that you want to retrieve.
         */
        getSpecificBoard: function (boardId) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarRequestOptions;
                return __generator(this, function (_a) {
                    localVarPath = defaultBasePath + '/v2/boards/{board_id}'
                        .replace('board_id', encodeURIComponent(String(boardId)));
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
                    // verify required parameter 'boardId' is not null or undefined
                    if (boardId === null || boardId === undefined) {
                        throw new Error('Required parameter boardId was null or undefined when calling getSpecificBoard.');
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
                                    body = models_1.ObjectSerializer.deserialize(body, "BoardWithLinks");
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
         *
         * @summary Update board
         * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) that you want to update.
         * @param boardChanges
         */
        updateBoard: function (boardId, boardChanges) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarRequestOptions;
                return __generator(this, function (_a) {
                    localVarPath = defaultBasePath + '/v2/boards/{board_id}'
                        .replace('board_id', encodeURIComponent(String(boardId)));
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
                    // verify required parameter 'boardId' is not null or undefined
                    if (boardId === null || boardId === undefined) {
                        throw new Error('Required parameter boardId was null or undefined when calling updateBoard.');
                    }
                    // verify required parameter 'boardChanges' is not null or undefined
                    if (boardChanges === null || boardChanges === undefined) {
                        throw new Error('Required parameter boardChanges was null or undefined when calling updateBoard.');
                    }
                    localVarRequestOptions = {
                        method: 'PATCH',
                        qs: localVarQueryParameters,
                        uri: localVarPath,
                        json: true,
                        headers: {
                            'Authorization': "Bearer ".concat(accessToken)
                        },
                        body: models_1.ObjectSerializer.serialize(boardChanges, "BoardChanges")
                    };
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            (0, request_1["default"])(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                    return;
                                }
                                if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    body = models_1.ObjectSerializer.deserialize(body, "BoardWithLinks");
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
exports.BoardsApi = BoardsApi;
