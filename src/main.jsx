import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl="https://gist.githubusercontent.com/alexcraviotto/b5d974bc120c3b46a0d047ba79cb4874/raw/2b04202d388d9547173b56c6ef27734edba18b29/tonconnect-manifest.json"
    >
      <App />
    </TonConnectUIProvider>
  </StrictMode>,
)
