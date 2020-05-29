import React from 'react'
import { ThemeProvider } from 'styled-components'

const grays = ['#000000', '#333333', '#666666', '#CCCCCC', '#EEEEEE', '#FFFFFF']

const theme = {
  color: {
    primary: {
      regular: '#190DA1',
      dark: '#0F0860',
      light: '#645DB8',
      contrast: '#FFF',
    },
    secondary: {
      regular: '#720DA1',
      dark: '#470A64',
      light: '#893BAD',
      contrast: '#FFF',
    },
    success: {
      regular: '#28A745',
      dark: '#1F7B34',
      light: '#43AB5B',
      contrast: '#FFF',
    },
    warning: {
      regular: '#FFC107',
      dark: '#EBB410',
      light: '#FFCD35',
      contrast: '#101010',
    },
    danger: {
      regular: '#DC3545',
      dark: '#AC2935',
      light: '#E95160',
      contrast: '#FFF',
    },
    // neutral: {
    //   regular: '#222',
    //   dark: 'transparent',
    //   light: '#fff',
    //   contrast: '#000',
    // },
    grays,
  },
  spacing: (...args) => {
    const len = args.length
    if (len < 0 || len > 4) throw new Error('invalid arguments for spacing')
    if (len === 0) return '6px'
    return args.map((n) => `${n * 6}px`).join(' ')
  },
}

const GlobalTheme = (props) => <ThemeProvider theme={theme} {...props} />

export default GlobalTheme
