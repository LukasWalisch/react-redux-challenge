import React from 'react'

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {name: "Lukas"};
  }

  render(){
      setTimeout(() => {
        this.setState({name: "Jenny"});
      }, 3000);
    return (
        <h1>hello world, I am {this.state.name}</h1>
    );
  }
}
