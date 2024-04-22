import {Text} from 'tamagui'
import {styled} from '@tamagui/core'

export type TitleSizes = 'regular' | 'small' | 'large'

export const Title = styled(Text, {
  name: 'Title',
  variants: {
    size: {
      regular: {
        fontSize: '$8',
        lineHeight: '$8',
      },
      small: {
        fontSize: '$6',
        lineHeight: '$6',
      },
      large: {
        fontSize: '$10',
        lineHeight: '$10',
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
