import { useState, useEffect } from 'react'
import axios from 'axios'
import './homepage.css'

const HomePage = () => {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
      setTotal(response.data.count)
    }
    fetchData()
  }, [])
  return (
    <>
      <div>HomePage</div>
      <div className='App'>{total}</div>
    </>
  )
}

export default HomePage
