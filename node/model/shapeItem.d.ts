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
import { CreatedBy } from './createdBy';
import { Geometry } from './geometry';
import { ModifiedBy } from './modifiedBy';
import { ParentLinksEnvelope } from './parentLinksEnvelope';
import { Position } from './position';
import { ShapeData } from './shapeData';
import { ShapeStyle } from './shapeStyle';
import { WidgetLinks } from './widgetLinks';
export declare class ShapeItem {
    /**
    * Unique identifier (ID) of an item.
    */
    'id'?: number;
    'data'?: ShapeData;
    'style'?: ShapeStyle;
    'position'?: Position;
    'geometry'?: Geometry;
    /**
    * Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
    */
    'createdAt'?: Date;
    'createdBy'?: CreatedBy;
    /**
    * Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
    */
    'modifiedAt'?: Date;
    'modifiedBy'?: ModifiedBy;
    'parent'?: ParentLinksEnvelope;
    'links'?: WidgetLinks;
    /**
    * Type of item that is returned.
    */
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
