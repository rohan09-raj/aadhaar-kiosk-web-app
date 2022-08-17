import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'
import App from './App'
import './i18nextInit'
import { Context } from './context/User'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Context>
          <App />
        </Context>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
