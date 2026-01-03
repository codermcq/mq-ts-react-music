import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import '@/assets/css/index.less'
import { ThemeProvider } from 'styled-components'

import App from '@/App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Provider store={store}>
        <PersistGate loading="loading..." persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </HashRouter>
  </ThemeProvider>
)
