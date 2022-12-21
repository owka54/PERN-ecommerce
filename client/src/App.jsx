import { useState } from 'react'
import './reset.css'
import './App.css'
import Header from './components/header'
import Products from './components/products'

function App() {

  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  )
}

export default App
