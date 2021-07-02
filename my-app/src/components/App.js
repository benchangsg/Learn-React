import React, { useState, useEffect } from 'react'
//import CountButton from "./CountButton/CountButton.js"
import SearchBar from './SearchBar/SearchBar.js'
import CountButton from './CountButton/CountButton.js'

const products = [
  'marmite',
  'meiji milk',
  'brioche bread',
]

const App = () => {


    return (
      <div>
        <SearchBar products={products} />
      </div>
    )
}



export default App