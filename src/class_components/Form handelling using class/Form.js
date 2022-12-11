import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            usernameError:false,
            course:'react',
            courseError:false,
            comment:'',
            commentError:false
        }
        // this.usernameChange=this.usernameChange.bind(this);
    }
    // usernameChange(e){
    //     this.setState({
    //         username:e.target.value,
    //      })
    // } 
    usernameChange=(event)=>{
        this.setState({
            username:event.target.value,
        })
    }
    courseChnage=(event)=>{
        this.setState({
            course:event.target.value
        })
    }
    commentChange=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    validate=()=>{
        let error=true;
        if(this.state.username===''){
            error=false;
            this.setState({
                usernameError:"user name is empty"
            })
        }else if(this.state.username.length<3){
            error=false;
            this.setState({
                usernameError:"user name is not valid"
            })
        }else{
            this.setState({
                usernameError:''
            })
        }

        
        if(this.state.comment===''){
            error=false;
            this.setState({
                commentError:"Comment is empty"
            })
        }else{
            this.setState({
                commentError:''
            })
        }
        return error
    }
    handleSubmit=(event)=>{
        if(this.validate()){
            alert(`${this.state.username} ${this.state.course} ${this.state.comment}`)
        }
        
        event.preventDefault(event);
    }
       
  render() {
    return (
      <div>
        <h1>Form Handling Using class </h1>
        <h4>This is also know as controll Handling</h4>
        <br/>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.usernameChange} />
                {this.state.usernameError && <div className='error'>{this.state.usernameError}</div> }
            </div>
            <div>
                <label>Course</label>
                <select value={this.state.change} onChange={this.courseChnage}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                    <option value="javascript">JavaScript</option>

                </select>
            </div>
            <div>
                <label>Comment</label>
                <textarea value={this.state.comment} onChange={this.commentChange}></textarea>
                {this.state.commentError && <div className='error'>{this.state.commentError}</div> }

            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
