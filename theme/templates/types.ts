export type Palette = string[]

type GenericTheme<T> = {
  color0?: T
  color1?: T
  color2?: T
  color3?: T
  color4?: T
  color5?: T
  color6?: T
  color7?: T
  color8?: T
  color9?: T
  color10?: T
  color11?: T
  color12?: T
  color13?: T
  color14?: T
  color15?: T
  color16?: T
  color17?: T
  color18?: T
  color19?: T
  color20?: T
  color21?: T
  color22?: T
  color23?: T
  background?: T
  backgroundFocus?: T
  backgroundHover?: T
  backgroundPress?: T
  backgroundStrong?: T
  backgroundTransparent?: T
  borderColor?: T
  borderColorFocus?: T
  borderColorHover?: T
  borderColorPress?: T
  color?: T
  colorFocus?: T
  colorHover?: T
  colorPress?: T
  colorTransparent?: T
  placeholderColor?: T
  shadowColor?: T
  shadowColorFocus?: T
  shadowColorHover?: T
  shadowColorPress?: T
}
export type ThemeTemplate = GenericTheme<number>
export type Theme = GenericTheme<string>
export type Mask = (template: ThemeTemplate) => ThemeTemplate
export type ThemeName = 'light' | 'dark'
