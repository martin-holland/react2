import './App.css';
import Header from './components/Header';
// import Main from './components/Main'
import Footer from './components/Footer';
import MainC from './components/MainC';
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/Main'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
