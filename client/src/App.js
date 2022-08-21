import React from 'react'
import LanguageSelect from './components/LanguageSelect/LanguageSelect'
import Index from './routes'
import './styles/GlobalVariables.css'

const App = () => {
  return (
    <>
      <LanguageSelect />
      <Index />
    </>
  )
}

export default App
