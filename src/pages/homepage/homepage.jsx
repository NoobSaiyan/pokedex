import { useState, useEffect } from 'react'
import SmallCard from '../../components/smallCard.component'
import axios from 'axios'
import './homepage.css'

const HomePage = () => {
  const [results, setResults] = useState([])
  useEffect(() => {
    async function fetchResults() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
      setResults(response.data.results)
    }
    fetchResults()
  }, [])

  return (
    <div className='container'>
      <div className='cards'>
        {results.map(({ name, url }) => {
          let arr = url.split('/')
          let img = arr[arr.length - 2]

          return <SmallCard className='card' key={img} name={name} img={img} />
        })}
      </div>
    </div>
  )
}

export default HomePage
