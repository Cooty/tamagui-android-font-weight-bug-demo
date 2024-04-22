import {createTokens, CreateTokens} from '@tamagui/core'
import {COLOR, PALETTE} from 'theme/palettes'

export function createExtendedThemeTokens(tokens: CreateTokens) {
  const THEME_TOKENS: CreateTokens = {
    // ...tokens,
    // color, backgroundColor, borderColor, borderBottomColor, borderTopColor, borderLeftColor, borderRightColor
    color: {
      // ...tokens.color,
      cream: COLOR.brand.cream,
      pink: COLOR.brand.pink,
      blue: COLOR.brand.blue,
      background: PALETTE.gray[0],
      color: PALETTE.gray[11],
    },
    // borderRadius, borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius
    radius: {
      ...tokens.radius,
      true: 12,
      small: 4,
      regular: 8,
      large: 12,
      xLarge: 16,
    },
    // width, height, minWidth, minHeight, maxWidth, maxHeight
    size: {
      ...tokens.size,
      regular: 16,
      regularN: -16,
    },
    space: {
      ...tokens.space,
      regular: 16,
      regularN: -16,
    },
    zIndex: {
      ...tokens.zIndex,
      small: 4,
      regular: 8,
      large: 12,
    },
  }
  return createTokens(THEME_TOKENS)
}
