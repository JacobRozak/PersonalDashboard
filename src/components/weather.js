import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import sun from '../assets/Sun_icon.png'
import rain from '../assets/Rain_icon.png'
import cloud from '../assets/Clouds_icon.png'


class Weather extends Component{
    state = {
        post:[],
        icon:null
    }
   componentDidMount(){
     // let id = this.props.match.params.post_id
      
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=d0a10211ea3d36b0a6423a104782130e')
      .then(res =>{
         //const currentWeather = res.data
        const icon = parseInt(res.data.weather[0].icon)
         this.setState({
            post:res.data,
            icon:icon
         })
         //console.log(this.state)
         //console.log(res.data.weather[0].icon)
        
      })
   }
   render(){

     const selected = this.state.post
     const temp = function(e){
         return Math.round(e - 273.15)
     }
     let icon = this.state.icon
   
     console.log(icon)

    let pickedIcon = null;

    if(icon === 1){
        pickedIcon = sun
     }else if(icon > 1 && icon < 9){
        pickedIcon = cloud
     }else{
         pickedIcon = rain
     }
     
    
     const item = selected.length != 0 ?
     (
      <div>
        <div>
          <img src={pickedIcon}></img>
          <p>
              {temp(selected.main.temp)} degrees
          </p>
        </div>
          <h2>
               {selected.name}
          </h2>
      </div>
        
     ):
     (
         <div>
             <h1>nuthing's here</h1>
        </div>
     )
       return(
           <div>
              {item}
           </div>
       )
   }
}

export default Weather