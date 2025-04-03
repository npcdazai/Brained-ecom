import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "./components/ui/provider.jsx"
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './app/store.js'


createRoot(document.getElementById('root')).render(
  <Provider>
    <ReduxProvider store={store} >
      <StrictMode>
        <App />
      </StrictMode>
    </ReduxProvider>

  </Provider>
)
