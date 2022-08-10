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
import { ConnectorChangesData } from '../model/connectorChangesData';
import { ConnectorCreationData } from '../model/connectorCreationData';
import { ConnectorWithLinks } from '../model/connectorWithLinks';
import { ConnectorsCursorPaged } from '../model/connectorsCursorPaged';
export declare function ConnectorsApi(accessToken: string): {
    /**
     * Adds a connector to a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
     * @summary Create connector
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) for which you want to create the connector.
     * @param connectorCreationData
     */
    createConnector: (boardId: string, connectorCreationData: ConnectorCreationData) => Promise<{
        response: http.IncomingMessage;
        body: ConnectorWithLinks;
    }>;
    /**
     * Deletes the specified connector from the board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 3</a><br/>
     * @summary Delete connector
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to delete the connector.
     * @param connectorId [Unique identifier (ID) of the connector](https://developers.miro.com/reference/rest-api-connector-model) that you want to delete.
     */
    deleteConnector: (boardId: string, connectorId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    /**
     * Retrieves information for a specific connector on a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a><br/>
     * @summary Get specific connector
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to retrieve a specific connector.
     * @param connectorId [Unique identifier (ID) of the connector](https://developers.miro.com/reference/rest-api-connector-model) that you want to retrieve.
     */
    getConnector: (boardId: string, connectorId: string) => Promise<{
        response: http.IncomingMessage;
        body: ConnectorWithLinks;
    }>;
    /**
     * Retrieves a list of connectors for a specific board.  This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let\'s say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
     * @summary Get connectors
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to retrieve a list of connectors.
     * @param limit
     * @param cursor
     */
    getConnectors: (boardId: string, limit?: string, cursor?: string) => Promise<{
        response: http.IncomingMessage;
        body: ConnectorsCursorPaged;
    }>;
    /**
     * Updates a connector on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
     * @summary Update connector
     * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) for which you want to update the connector.
     * @param connectorId [Unique identifier (ID) of the connector](https://developers.miro.com/reference/rest-api-connector-model) that you want to update.
     * @param connectorChangesData
     */
    updateConnector: (boardId: string, connectorId: string, connectorChangesData: ConnectorChangesData) => Promise<{
        response: http.IncomingMessage;
        body: ConnectorWithLinks;
    }>;
};
