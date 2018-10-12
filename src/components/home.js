import React, { Component } from 'react'
import Weather from './weather'

import sun from '../assets/Sun_icon.png'


class Home extends Component {
    constructor() {
        super()
    }
   

    render() {
        const imageStyle = {
            width: 400
        }
        return (
        <div>
            <div class="grid-container">
                <div class="grid-item"><div class="card"><Weather /></div></div>
                <div class="grid-item"><div class="card"></div></div>
                <div class="grid-item"><div class="card"></div></div>  
                <div class="grid-item"><div class="card"></div></div>
                <div class="grid-item"><div class="card"></div></div>
                <div class="grid-item"><div class="card"></div></div>  
            </div>
        </div>

        )

    }
}

export default Home
