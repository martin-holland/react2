import React, { Component } from "react";
import Box from "./Box";

class MainC extends Component {
    state = {
        persons: [
            {id: 1, name: "Maria", age: 32, title: "CEO"},
            {id: 2, name: "Kati", age: 25, title: "Developer"},
            {id: 3, name: "Mari", age: 21, title: "Junior"}
        ]
    }

    changeNameHandler = () => {
        console.log("Wow within class")
    }

    render() {
        return (
        <>
        <main>
            {this.state.persons.map(item => <Box key={item.id} name={item.name} age={item.age} title={item.title}/>)}
        </main>

        <button onClick={this.changeNameHandler}>Click me</button>
        </>
        );
    }
}

export default MainC; 