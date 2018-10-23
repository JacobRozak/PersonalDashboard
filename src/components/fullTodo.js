import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Todo from './todo'

import plus from '../assets/Plus_button.png'


class FullTodo extends Component {
    state={
        transform1:true
    }
    render(){
        return(
            <div>
                <Todo transform1={this.state.transform1}/>
            </div>
        )
    }
}

export default FullTodo