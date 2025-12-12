import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo.ts'

import { CartProvider } from './context/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <CartProvider>
                <HelmetProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </HelmetProvider>
            </CartProvider>
        </ApolloProvider>
    </React.StrictMode>,
)
