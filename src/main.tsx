import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Forms from './Forms.tsx'
import ReactForm from './ReactForm.tsx'
import HookForm from './HookForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HookForm />
  </StrictMode>,
)
