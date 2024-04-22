import {Text} from 'tamagui'
import {styled} from '@tamagui/core'

export type LabelSizes = 'regular' | 'small' | 'large'

export const Label = styled(Text, {
  name: 'Label',
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
        fontSize: '$5',
        lineHeight: '$5',
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
