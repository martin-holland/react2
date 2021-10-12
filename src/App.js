import './App.css';

const Box = (props) => {
  return (
      <div className = "box">
        <h2>{props.name}</h2>
        <p class="title">Title: {props.title}</p>
        <p class="age">Age: {props.age}</p>
      </div>
  )
}

function App() {
  return (
    <div className="App">
        <header>
        <div class="header-wrapper">
        <h1>Logo</h1>
        </div>
        </header>
      <main>
        <div class="container">
        <Box name="Maria" title="CEO" age="29"/>
        <Box name="Kati" title="Developer" age="25"/>
        <Box name="Karin" title="Designer" age="45"/>
        <Box name="Martin" title="Wannabe" age="tooOld"/>
            </div>
        <footer>
            <p>Copyrights</p>
        </footer>
    </main> 
    </div>
  );
}

export default App;
