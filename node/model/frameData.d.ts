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
/**
* Contains frame item data, such as the title, frame type, or frame format. For information about the JSON properties, see [Data](https://developers.miro.com/reference/data).
*/
export declare class FrameData {
    /**
    * Only custom frames are supported at the moment. Possible values: `custom`, `desktop`, `phone`, `tablet`, `a4`, `letter`, `ratio_1x1`, `ratio_4x3`, `ratio_16x9`
    */
    'format'?: FrameData.FormatEnum;
    /**
    * Title of the frame. This title appears at the top of the frame.
    */
    'title'?: string;
    /**
    * Only free form frames are supported at the moment. Possible values: `freeform`, `heap`, `grid`, `rows`, `columns`
    */
    'type'?: FrameData.TypeEnum;
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
export declare namespace FrameData {
    enum FormatEnum {
        Custom,
        Desktop,
        Phone,
        Tablet,
        A4,
        Letter,
        Ratio1x1,
        Ratio4x3,
        Ratio16x9
    }
    enum TypeEnum {
        Freeform,
        Heap,
        Grid,
        Rows,
        Columns
    }
}
