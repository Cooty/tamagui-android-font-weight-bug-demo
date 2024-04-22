import {Text} from 'tamagui'
import {styled} from '@tamagui/core'

export type BodySizes = 'regular' | 'small' | 'large' | 'mini'

export const Body = styled(Text, {
  name: 'Body',
  variants: {
    size: {
      regular: {
        fontSize: '$3',
        lineHeight: '$3',
      },
      small: {
        fontSize: '$2',
        lineHeight: '$2',
      },
      large: {
        fontSize: '$4',
        lineHeight: '$4',
      },
      mini: {
        fontSize: '$1',
        lineHeight: '$1',
      },
    },
    emphasis: {
      true: {
        fontWeight: '$3',
      },
      false: {
        fontWeight: '$1',
      },
    },
  } as const,

  defaultVariants: {
    size: 'regular',
    emphasis: false,
  },
})
