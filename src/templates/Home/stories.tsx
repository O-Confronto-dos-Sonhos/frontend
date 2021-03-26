import { Meta, Story } from '@storybook/react/types-6-0'

import { Home, HomeTemplateProps } from '.'

import mock from './mock'

export default {
  title: 'Home',
  component: Home,
  args: mock,
} as Meta

export const Basic: Story<HomeTemplateProps> = (args) => <Home {...args} />
