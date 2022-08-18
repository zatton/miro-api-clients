/**
 * Miro API
 * Miro API
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Caption } from './caption';
import { ConnectorStyle } from './connectorStyle';
import { CreatedBy } from './createdBy';
import { ItemConnectionWithLinks } from './itemConnectionWithLinks';
import { ModifiedBy } from './modifiedBy';
import { SelfLink } from './selfLink';

export class ConnectorWithLinks {
    /**
    * Blocks of text you want to display on the connector.
    */
    'captions'?: Array<Caption>;
    /**
    * Date and time when the connector was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
    */
    'createdAt'?: Date;
    'createdBy'?: CreatedBy;
    'endItem'?: ItemConnectionWithLinks;
    /**
    * Unique identifier (ID) of a connector.
    */
    'id'?: string;
    /**
    * Indicates whether the connector is supported at the moment. If this parameter returns `false`, we do not support the connector at the moment. We do not allow updates for unsupported connectors and we might not return all data about the connector, such as intermediate points and connection points to the canvas.
    */
    'isSupported'?: boolean;
    'links'?: SelfLink;
    /**
    * Date and time when the connector was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
    */
    'modifiedAt'?: Date;
    'modifiedBy'?: ModifiedBy;
    /**
    * The path type of the connector line, defines curvature. Default: curved. Possible values: `straight`, `elbowed`, `curved`
    */
    'shape'?: ConnectorWithLinks.ShapeEnum = ConnectorWithLinks.ShapeEnum.Curved;
    'startItem'?: ItemConnectionWithLinks;
    'style'?: ConnectorStyle;
    /**
    * Type of board object that is returned.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "captions",
            "baseName": "captions",
            "type": "Array<Caption>"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "CreatedBy"
        },
        {
            "name": "endItem",
            "baseName": "endItem",
            "type": "ItemConnectionWithLinks"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isSupported",
            "baseName": "isSupported",
            "type": "boolean"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "SelfLink"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "Date"
        },
        {
            "name": "modifiedBy",
            "baseName": "modifiedBy",
            "type": "ModifiedBy"
        },
        {
            "name": "shape",
            "baseName": "shape",
            "type": "ConnectorWithLinks.ShapeEnum"
        },
        {
            "name": "startItem",
            "baseName": "startItem",
            "type": "ItemConnectionWithLinks"
        },
        {
            "name": "style",
            "baseName": "style",
            "type": "ConnectorStyle"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConnectorWithLinks.attributeTypeMap;
    }
}

export namespace ConnectorWithLinks {
    export enum ShapeEnum {
        Straight = <any> 'straight',
        Elbowed = <any> 'elbowed',
        Curved = <any> 'curved'
    }
}
