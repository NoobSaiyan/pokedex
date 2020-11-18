import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SmallCard from '../../components/smallCard.component'
import axios from 'axios'
import './homepage.css'

const HomePage = () => {
  const [results, setResults] = useState([])
  useEffect(() => {
    async function fetchResults() {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
      )
      setResults(response.data.results)
    }
    fetchResults()
  }, [])

  return (
    <div className='container'>
      <div className='cards'>
        {results.map(({ name, url }) => {
          let arr = url.split('/')
          let id = arr[arr.length - 2]

          return (
            <Link key={url} to={`/${id}`}>
              <SmallCard className='card' name={name} img={id} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
