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
import * as http from 'http';
import { DataClassificationTeamSettings } from '../model/dataClassificationTeamSettings';
import { UpdateBoardsDataClassificationLabel } from '../model/updateBoardsDataClassificationLabel';
import { UpdateBoardsDataClassificationLabelRequest } from '../model/updateBoardsDataClassificationLabelRequest';
import { UpdateTeamSettingsRequest } from '../model/updateTeamSettingsRequest';
export declare function BoardClassificationTeamLevelApi(accessToken: string): {
    /**
     * Updates board classification for not-classified only or all boards in an existing team.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
     * @summary Bulk update boards classification
     * @param orgId id of the organization
     * @param teamId id of the team
     * @param updateBoardsDataClassificationLabelRequest
     */
    enterpriseDataclassificationTeamBoardsBulk: (orgId: string, teamId: string, updateBoardsDataClassificationLabelRequest: UpdateBoardsDataClassificationLabelRequest) => Promise<{
        response: http.IncomingMessage;
        body: UpdateBoardsDataClassificationLabel;
    }>;
    /**
     * Retrieves board classification settings for an existing team.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
     * @summary Get team settings
     * @param orgId id of the organization
     * @param teamId id of the team
     */
    enterpriseDataclassificationTeamSettingsGet: (orgId: string, teamId: string) => Promise<{
        response: http.IncomingMessage;
        body: DataClassificationTeamSettings;
    }>;
    /**
     * Updates board classification settings for an existing team.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
     * @summary Update team settings
     * @param orgId id of the organization
     * @param teamId id of the team
     * @param updateTeamSettingsRequest
     */
    enterpriseDataclassificationTeamSettingsSet: (orgId: string, teamId: string, updateTeamSettingsRequest: UpdateTeamSettingsRequest) => Promise<{
        response: http.IncomingMessage;
        body: DataClassificationTeamSettings;
    }>;
};
