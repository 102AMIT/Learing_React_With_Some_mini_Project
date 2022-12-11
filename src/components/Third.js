import React, { Component } from 'react'

export default class Third extends Component {
    constructor(){
        super();
        this.state={
            name:"Hello"
        }
    }
    changeState(){
        this.setState({name:"world"})
    }
  render() {
    return (
      <div>
      {this.state.name}
        <button onClick={()=>this.changeState()}>Click</button>
      </div>
    )
  }
}
