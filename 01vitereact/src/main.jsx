import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click here vite'
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // reactElement
    <App />
    
)
