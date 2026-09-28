import React from 'react'
import ReactDOM from 'react-dom/client'
import Website from './Storefront.jsx'

const rootElement = document.createElement('div')
rootElement.id = 'root'
document.body.replaceChildren(rootElement)
document.getElementById('legacy-site-styles')?.remove()

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>
)
