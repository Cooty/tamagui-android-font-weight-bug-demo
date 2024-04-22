import {Mask, Palette, Theme, ThemeTemplate} from 'theme/templates/types'

export const BaseTemplate: ThemeTemplate = {
  color0: 0,
  color1: 1,
  color2: 2,
  color3: 3,
  color4: 4,
  color5: 5,
  color6: 6,
  color7: 7,
  color8: 8,
  color9: 9,
  color10: 10,
  color11: 11,
  color12: 12,
  color13: 13,
  color14: 14,
  color15: 15,
  color16: 16,
  color17: 17,
  color18: 18,
  color19: 19,
  color20: 20,
  color21: 21,
  color22: 22,
  color23: 23,
  background: 0,
  backgroundFocus: 2,
  backgroundHover: 2,
  backgroundPress: 5,
  backgroundStrong: -1,
  backgroundTransparent: -1,
  borderColor: 7,
  borderColorFocus: -1,
  borderColorHover: -1,
  borderColorPress: -1,
  color: 11,
  colorFocus: 11,
  colorHover: 11,
  colorPress: 11,
  colorTransparent: -1,
  placeholderColor: 8,
  shadowColor: 11,
  shadowColorFocus: 11,
  shadowColorHover: 11,
  shadowColorPress: 11,
}

export function createThemeFromTemplate(
  palette: Palette,
  template: ThemeTemplate,
  mask?: Mask,
) {
  const themeMask = mask ? mask(template) : template
  const theme: Theme = {} as Theme

  Object.entries(themeMask).forEach(([property, paletteIndex]) => {
    theme[property as keyof Theme] =
      paletteIndex === -1 ? 'transparent' : palette[paletteIndex]
  })
  return theme
}
