import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import { GlobalContextProvider } from './context/globalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <NextUIProvider>
  
  <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
      
  </NextUIProvider>
</React.StrictMode>,
)
