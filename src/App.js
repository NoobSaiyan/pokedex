import { Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.jsx'
import Information from './pages/information/information.jsx'

import './App.css'

function App() {
  return (
    <div>
      <Link to='/' className='heading'>
        Pokemon
      </Link>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/:id' component={Information} />
      </Switch>
    </div>
  )
}

export default App
