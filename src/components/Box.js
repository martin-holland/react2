const Box = (props) => {

  const addEventHandler = () => {
    console.log("Wow from Box");
  }
    return (
        <div className = "box">
          <h2>{props.name}</h2>
          <p className="title">Title: {props.title}</p>
          <p className="age">Age: {props.age}</p>
          <button className="boxButton" onClick={addEventHandler}>Click me</button>
        </div>
    )
  }

  export default Box;