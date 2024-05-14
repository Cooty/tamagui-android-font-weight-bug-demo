/**
 * Config for Tamagui UI library
 *
 * @see https://tamagui.dev/docs/core/configuration
 * @see https://tamagui.dev/docs/core/theme#sub-themes
 */
import { config } from "@tamagui/config/v2";
import { createTamagui } from "tamagui";
import { createExtendedThemeTokens, createThemes, systemFont } from "./theme";

const appTheme = createTamagui({
  ...config,
  defaultFont: "systemFont",
  fonts: {
    systemFont,
  },
  tokens: createExtendedThemeTokens(config.tokens),
  themes: createThemes(),
});

export type AppTheme = typeof appTheme;

declare module "tamagui" {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom typesr
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppTheme {}
}

export default appTheme;
