import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import ImageUpload from './pictures'

import plus from '../assets/Plus_button.png'


class FullPictures extends Component {
    state={
        transform1:true
    }
    render(){
        return(
            <div>
                <ImageUpload transform1={this.state.transform1}/>
            </div>
        )
    }
}

export default FullPictures