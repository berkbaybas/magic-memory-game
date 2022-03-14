import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import GlabalStyle from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlabalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
