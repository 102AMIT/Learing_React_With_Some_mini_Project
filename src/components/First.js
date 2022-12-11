import React, { Component } from 'react'

export default class First extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"super",
            age:19,
            age:parseInt(props.age)

        }
    }
    chnageState(){
        this.setState({age:this.state.age+1});
    }
  render() {
    return (
      <div>
        {this.props.name} {this.props.age};<br/>
        {this.state.name} {this.state.age} <br />
        <button onClick={()=>this.chnageState()}>change state</button>
        

      </div>
    )
  }
}
