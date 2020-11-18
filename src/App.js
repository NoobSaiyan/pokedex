import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
      setTotal(response.data.count)
    }
    fetchData()
  }, [])

  return <div className='App'>{total}</div>
}

export default App
