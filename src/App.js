import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyle } from './global.styles'
import { ContactPage } from './Pages/Contact/Contact'
import Resume from './Pages/Resume'
import { Home } from './Pages/Home/Home'
import './App.css'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={ContactPage} />
      <Route exact path='/resume' component={Resume} />
    </Router>
  )
}

export default App
