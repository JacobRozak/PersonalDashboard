import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {storage} from '../firebase';

//import poster from '../../server/routes/uploads/poster.jpg'

import plus from '../assets/Plus_button.png'

class Pictures extends Component {
    constructor() {
        super()
        this.state = {
            path : null,
            selectedFile: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        //event.preventDefault()
        let img = e.target.value.substr(11)
        console.log(img)
        this.setState({
          selectedFile:e.target.files[0],
          path:e.target.value
        })

    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.path)
        
        let file =this.state.selectedFile

        var fd = new FormData()
        fd.append('image',file)

      /*
		axios.post('/image/db', {
			path : this.state.path
		})
			.then(response => {
                console.log(response)
                return axios.post('/image/',fd,{
                    path : this.state.path
                })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(function(error){
                        console.log(error)
                    })
				if (!response.data.errmsg) {
					console.log('image uploaded')
				} else {
					console.log('something went wrong')
				}
			}).catch(error => {
				console.log('upload err: ')
				console.log(error)

            })
*/
    }

    render(){
        
        return(
           <div>
               <h1>Photos</h1>
               <div class="grid-container">
                 <div className="grid-item1"><img src={plus}>
                 </img>
                 <form styles='display:none'><input id='image'  type="file" name="myimage" onChange={this.handleChange}></input>
                 <input onClick={this.handleSubmit} type="submit" name="submit" value="submit"></input>
               </form></div>
                 <div className="grid-item1"><img></img></div>
                 <div className="grid-item1"></div>
                 <div className="grid-item1"></div>
                 <div className="grid-item1"></div>
                 <div className="grid-item1"></div>
               </div>
               <form>
               <input id='image'  type="file" name="myimage" onChange={this.handleChange}></input>
               <input onClick={this.handleSubmit} type="submit" name="submit" value="submit"></input>
               </form>
           </div>
        )
    }
}
export default Pictures