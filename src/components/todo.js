import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'

class Todo extends Component{
    state ={
      task:null,
      tasks:[]
    }
    
    onChange = (e) => {
        e.preventDefault()
        this.setState({ task:e.target.value})
        console.log(this.state.task)
        //this.onSubmit()
//console.log(this.state.tasks)
        
    }

    onSubmit = e => {
        e.preventDefault()
        console.log(this.state.task)
        var joined = this.state.tasks.concat(this.state.task);
        this.setState({tasks:joined})
        //this.check()
        
    }
    check = e =>{
        e.preventDefault()
        console.log(this.state.tasks)
    }
   
    render(){
        
        return(
            <div>
                <div id='task'>
                <form onSubmit={this.onSubmit}>
                <input placeholder="task 1" 
                   type="text"
                   onChange={this.onChange} 
                ></input>
                </form>
                </div>
                <div className='input-field col s3'>
                <form onSubmit={this.onSubmit}>
                <input placeholder="task 2" 
                   type="text"

                   onChange={this.onChange} 
                ></input>
                </form>
                </div>
                <div className='input-field col s3'>
                <form onSubmit={this.onSubmit}>
                <input placeholder="task 3" 
                   type="text"

                   onChange={this.onChange} 
                ></input>
                </form>
                </div>
            </div>
        )
    }

}

export default Todo