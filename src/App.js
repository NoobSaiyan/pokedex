import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.jsx'
import Information from './pages/information/information.jsx'

import './App.css'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/1' component={Information} />
      </Switch>
    </div>
  )
}

export default App
