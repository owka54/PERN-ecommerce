import { useState } from 'react'
import './reset.css'
import './App.css'
import Header from './components/header'
import Products from './components/products'
import SearchBar from './components/searchBar'

function App() {

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Products />
    </div>
  )
}

export default App
