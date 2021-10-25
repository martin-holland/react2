const Box = (props) => {

  const addEventHandler = () => {
    console.log("Wow from Box");
  }
    return (
        <div className = "box">
          <h2>{props.name}</h2>
          <p class="title">Title: {props.title}</p>
          <p class="age">Age: {props.age}</p>
          <button onClick={addEventHandler}>Click me</button>
        </div>
    )
  }

  export default Box;