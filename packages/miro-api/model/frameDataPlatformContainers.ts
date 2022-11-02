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
 * @internal
 * Contains frame item data, such as the title, frame type, or frame format. For information about the JSON properties, see [Data](https://developers.miro.com/reference/data).
 */
export class FrameDataPlatformContainers {
  /**
   * Only custom frames are supported at the moment.
   */
  'format'?:
    | string
    | typeof FrameDataPlatformContainers.FormatEnum[keyof typeof FrameDataPlatformContainers.FormatEnum] =
    FrameDataPlatformContainers.FormatEnum.Custom
  /**
   * Title of the frame. This title appears at the top of the frame.
   */
  'title'?: string
  /**
   * Only free form frames are supported at the moment.
   */
  'type'?: string | typeof FrameDataPlatformContainers.TypeEnum[keyof typeof FrameDataPlatformContainers.TypeEnum] =
    FrameDataPlatformContainers.TypeEnum.Freeform

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'format',
      baseName: 'format',
      type: 'FrameDataPlatformContainers.FormatEnum',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'FrameDataPlatformContainers.TypeEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return FrameDataPlatformContainers.attributeTypeMap
  }
}

export namespace FrameDataPlatformContainers {
  export const FormatEnum = {
    Custom: 'custom',
    Desktop: 'desktop',
    Phone: 'phone',
    Tablet: 'tablet',
    A4: 'a4',
    Letter: 'letter',
    Ratio1x1: 'ratio_1x1',
    Ratio4x3: 'ratio_4x3',
    Ratio16x9: 'ratio_16x9',
  } as const
  export const TypeEnum = {
    Freeform: 'freeform',
    Heap: 'heap',
    Grid: 'grid',
    Rows: 'rows',
    Columns: 'columns',
  } as const
}
