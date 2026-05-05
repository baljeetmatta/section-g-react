import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Forms from './Forms.tsx'
import ReactForm from './ReactForm.tsx'
import HookForm from './HookForm.tsx'
import { Provider } from 'react-redux'
import store from './reduxStore.ts'
import ProductDetails from './ProductDetails.tsx'
import Products from './Products.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <Products />
    </Provider>
  </StrictMode>,
)
