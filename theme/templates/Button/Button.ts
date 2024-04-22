import {Palette, ThemeTemplate} from 'theme/templates/types'
import {createThemeFromTemplate} from 'theme/templates/base-template'

export function buttonTemplate(): ThemeTemplate {
  return {
    background: 20,
    borderColor: 8,
    color: 0,
  }
}

export function buttonPrimaryMask(template: ThemeTemplate): ThemeTemplate {
  return {
    ...template,
    background: 20,
    borderColor: 20,
    color: 12,
  }
}

export function buttonInverseMask(template: ThemeTemplate): ThemeTemplate {
  return {
    ...template,
    background: 11,
    borderColor: 11,
  }
}

export function buttonSecondaryMask(template: ThemeTemplate): ThemeTemplate {
  return {
    ...template,
    borderColor: 7,
    background: 0,
    color: 11,
  }
}

export function createButtonThemes(themeName: string, palette: Palette) {
  const button = buttonTemplate()
  return {
    [`${themeName}_Button`]: createThemeFromTemplate(palette, buttonTemplate()),
    [`${themeName}_primary_Button`]: createThemeFromTemplate(
      palette,
      button,
      buttonPrimaryMask,
    ),
    [`${themeName}_secondary_Button`]: createThemeFromTemplate(
      palette,
      button,
      buttonSecondaryMask,
    ),
    [`${themeName}_inverse_Button`]: createThemeFromTemplate(
      palette,
      button,
      buttonInverseMask,
    ),
  }
}
