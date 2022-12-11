import React, { Component } from 'react'


export default class  extends Component {
    constructor(){
        super();
        this.state={
            isLoggedIn:true
        }
    }
  render() {
    // This is if else Conditional rendering **********************

    // if(this.state.isLoggedIn){
    //     return (
    //         <div>Welcome User</div>
    //       )
    // }else{
    //     return (
    //         <div>Welcome Guest</div>
    //       )
    // }


    // This is element variable Conditional rendering

    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome User</div>
    // }else{
    //     message=<div>Welcome Guest</div>
    // }
    // return message


    // Using ternary operator

    // return this.state.isLoggedIn ?<div>welcome User </div> : <div>Welcome Guest</div>

    // using short circuit operator

    return (this.state.isLoggedIn && <div>Welcome User</div>) || (!this.state.isLoggedIn && <div>Welcome Guest</div>)
    
  }
}
