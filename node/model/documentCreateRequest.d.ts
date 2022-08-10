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
import { DocumentUrlData } from './documentUrlData';
import { FixedRatioGeometry } from './fixedRatioGeometry';
import { Parent } from './parent';
import { PositionChange } from './positionChange';
export declare class DocumentCreateRequest {
    'data': DocumentUrlData;
    'position'?: PositionChange;
    'geometry'?: FixedRatioGeometry;
    'parent'?: Parent;
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
