import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components';

/* Components */
import App from './App'

/* Styles */
import GlobalStyle from './components/GlobalStyle.styled'
import theme from './themes/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById('root')
  
)
