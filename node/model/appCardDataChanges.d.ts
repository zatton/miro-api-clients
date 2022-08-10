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
import { CustomField } from './customField';
/**
* For information about the JSON properties, see [Data](https://developers.miro.com/reference/data).
*/
export declare class AppCardDataChanges {
    /**
    * A short text description to add context about the app card.
    */
    'description'?: string;
    /**
    * Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.
    */
    'fields'?: Array<CustomField>;
    /**
    * Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`. Possible values: `disconnected`, `connected`, `disabled`
    */
    'status'?: AppCardDataChanges.StatusEnum;
    /**
    * A short text header to identify the app card.
    */
    'title'?: string;
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
export declare namespace AppCardDataChanges {
    enum StatusEnum {
        Disconnected,
        Connected,
        Disabled
    }
}
