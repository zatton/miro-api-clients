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
* For information about the JSON properties, see [Data](https://developers.miro.com/reference/data).
*/
export declare class EmbedUrlData {
    /**
    * Defines how the content in the embed item is displayed on the board. `inline`: The embedded content is displayed directly on the board. `modal`: The embedded content is displayed inside a modal overlay on the board. Possible values: `inline`, `modal`
    */
    'mode'?: EmbedUrlData.ModeEnum;
    /**
    * URL of the image to be used as the preview image for the embedded item.
    */
    'previewUrl'?: string;
    /**
    * A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.
    */
    'url': string;
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
export declare namespace EmbedUrlData {
    enum ModeEnum {
        Inline,
        Modal
    }
}
