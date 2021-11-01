import Box from './Box'
import { NavLink, Switch, Route } from 'react-router-dom'

const Home = () => {
  return(
    <div>
      <h1>This is the HOME page</h1>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>This is the ABOUT page</h1>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h1>This is the CONTACT page</h1>
    </div>
  )
}

const Main = () => {
    return (
    <main>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about"  component={About}/>
        <Route path="/contact"  component={Contact}/>
      </Switch>

      <div class="container">
        <Box name="Maria" title="CEO" age="29"/>
        <Box name="Kati" title="Developer" age="25"/>
        <Box name="Karin" title="Designer" age="45"/>
        <Box name="Martin" title="Wannabe" age="tooOld"/>
        </div>
    </main>
    )
  }

  export default Main;