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


/**
* Contains sticky note item data, such as the content or shape of the sticky note. For information about the JSON properties, see [Data](https://developers.miro.com/reference/data).
*/
export class StickyNoteDataPlatformTags {
    /**
    * The actual text (content) that appears in the sticky note item.
    */
    'content'?: string = 'Hello';
    /**
    * Defines the geometric shape of the sticky note and aspect ratio for its dimensions. Possible values: `square`, `rectangle`
    */
    'shape'?: StickyNoteDataPlatformTags.ShapeEnum = StickyNoteDataPlatformTags.ShapeEnum.Square;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "shape",
            "baseName": "shape",
            "type": "StickyNoteDataPlatformTags.ShapeEnum"
        }    ];

    static getAttributeTypeMap() {
        return StickyNoteDataPlatformTags.attributeTypeMap;
    }
}

export namespace StickyNoteDataPlatformTags {
    export enum ShapeEnum {
        Square = <any> 'square',
        Rectangle = <any> 'rectangle'
    }
}
