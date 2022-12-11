import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    greet(childName,surName){
        alert(`Namaste ${childName ,surName}`)
    }
  render() {
    return (
      <div>
        <Child greet={this.greet}/>
      </div>
    )
  }
}
