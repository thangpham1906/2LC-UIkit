2LC UIkit is a set of React components and hooks used to build pages on 2LC's apps. It also contains a theme file for dark and light mode.

## Install

yarn add 2lc-uikit

You can see UI design with this command

### Setup
Before using 2LC UIkit, you need to provide the theme file to styled-component.

import { ThemeProvider } from 'styled-components'
import { light, dark } from '2lc-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>

yarn build

### Reset

A reset CSS is available as a global styled component.

import { ResetCSS } from '@pancakeswap-libs/uikit'
...
<ResetCSS />

#### Types
This project is built with Typescript and export all the relevant types.


##### How to use the UIkit
If you want to use components from the UIkit, check the Storybook documentation

