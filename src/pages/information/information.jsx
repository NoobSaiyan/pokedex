import { useParams } from 'react-router-dom'
import './information.css'

const Information = () => {
  let { id } = useParams()

  return <div>Information {id}</div>
}

export default Information
