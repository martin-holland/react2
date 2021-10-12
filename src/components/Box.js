const Box = (props) => {
    return (
        <div className = "box">
          <h2>{props.name}</h2>
          <p class="title">Title: {props.title}</p>
          <p class="age">Age: {props.age}</p>
        </div>
    )
  }

  export default Box;