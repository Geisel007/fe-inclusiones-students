import React from 'react'
import  { createRoot }  from 'react-dom/client'
import App from './src/App'

import './src/index.css'
import './src/constants/CustomColors.css'
import './src/constants/CustomFonts.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)
