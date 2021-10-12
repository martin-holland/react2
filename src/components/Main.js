import Box from './Box'
const Main = () => {
    return (
    <main>
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