import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Container style={{ backgroundColor: '#f0f0f0' }}>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
