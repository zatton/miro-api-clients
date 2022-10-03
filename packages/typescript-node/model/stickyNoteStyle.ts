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
 * Contains information about the style of a sticky note item, such as the fill color or text alignment. For information about the JSON properties, see [Style](https://developers.miro.com/reference/style).
 */
export class StickyNoteStyle {
  /**
   * Fill color for the sticky note. Default: `light_yellow`. Possible values: `gray`, `light_yellow`, `yellow`, `orange`, `light_green`, `green`, `dark_green`, `cyan`, `light_pink`, `pink`, `violet`, `red`, `light_blue`, `blue`, `dark_blue`, `black`
   */
  'fillColor'?: string | typeof StickyNoteStyle.FillColorEnum[keyof typeof StickyNoteStyle.FillColorEnum]
  /**
   * Defines how the sticky note text is horizontally aligned. Default: `center`. Possible values: `left`, `right`, `center`
   */
  'textAlign'?: string | typeof StickyNoteStyle.TextAlignEnum[keyof typeof StickyNoteStyle.TextAlignEnum]
  /**
   * Defines how the sticky note text is vertically aligned. Default: `top`. Possible values: `top`, `middle`, `bottom`
   */
  'textAlignVertical'?:
    | string
    | typeof StickyNoteStyle.TextAlignVerticalEnum[keyof typeof StickyNoteStyle.TextAlignVerticalEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'fillColor',
      baseName: 'fillColor',
      type: 'StickyNoteStyle.FillColorEnum',
    },
    {
      name: 'textAlign',
      baseName: 'textAlign',
      type: 'StickyNoteStyle.TextAlignEnum',
    },
    {
      name: 'textAlignVertical',
      baseName: 'textAlignVertical',
      type: 'StickyNoteStyle.TextAlignVerticalEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return StickyNoteStyle.attributeTypeMap
  }
}

export namespace StickyNoteStyle {
  export const FillColorEnum = {
    Gray: 'gray',
    LightYellow: 'light_yellow',
    Yellow: 'yellow',
    Orange: 'orange',
    LightGreen: 'light_green',
    Green: 'green',
    DarkGreen: 'dark_green',
    Cyan: 'cyan',
    LightPink: 'light_pink',
    Pink: 'pink',
    Violet: 'violet',
    Red: 'red',
    LightBlue: 'light_blue',
    Blue: 'blue',
    DarkBlue: 'dark_blue',
    Black: 'black',
  } as const
  export const TextAlignEnum = {
    Left: 'left',
    Right: 'right',
    Center: 'center',
  } as const
  export const TextAlignVerticalEnum = {
    Top: 'top',
    Middle: 'middle',
    Bottom: 'bottom',
  } as const
}
