import { MAIN_PALETTE, PALETTE } from "./palettes";
import { Palette, Theme, ThemeName } from "./templates/types";
import {
  BaseTemplate,
  createThemeFromTemplate,
} from "./templates/base-template";
import { createButtonThemes } from "./templates/Button/Button";

function generateThemeComponents(name: ThemeName, palette: Palette) {
  return {
    ...createButtonThemes(name, palette),
  };
}

export function createThemes() {
  // The main theme is renamed to light in order to support storybook/web correct
  return {
    light: createThemeFromTemplate(MAIN_PALETTE, BaseTemplate),
    dark: createThemeFromTemplate(
      [...PALETTE.gray_inverse, ...PALETTE.blue],
      BaseTemplate
    ),
    ...generateThemeComponents("light", MAIN_PALETTE),
  } satisfies Record<ThemeName, Theme>;
}
