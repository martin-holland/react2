import React, { Component } from "react";
import Box from "./Box";

class MainC extends Component {
    state = {
        persons: [
            {name: "Maria", age: 32, title: "CEO"},
            {name: "Kati", age: 25, title: "Developer"},
            {name: "Mari", age: 21, title: "Junior"}
        ]
    }

    changeNameHandler = () => {
        console.log("Wow within class")
    }

    render() {
        return (
        <>
        <main>
            <Box name = {this.state.persons[0].name} age={this.state.persons[0].age} title = {this.state.persons[0].title}/>
            <Box name = {this.state.persons[1].name} age={this.state.persons[1].age} title = {this.state.persons[1].title}/>
            <Box name = {this.state.persons[2].name} age={this.state.persons[2].age} title = {this.state.persons[2].title}/>
        </main>

        <button onClick={this.changeNameHandler}>Click me</button>
        </>
        );
    }
}

export default MainC; 