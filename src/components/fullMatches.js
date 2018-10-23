import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import matches from '../matches.json'

class FullMatches extends Component{
    state ={
      teams:null
    }

    filterTeams = (e) =>{
      e.preventDefault()
      let team = document.getElementById('teamName').value
      
      var final = matches.filter(match => match.AwayTeam === team && match.FTR === 'A' || match.HomeTeam === team && match.FTR === 'H')
      var teams = final.map(element => {
        if(element.AwayTeam === team){
        return element.HomeTeam
        }else if(element.HomeTeam === team){
          return element.AwayTeam
        }
      })
      
      
    this.setState({
      teams:teams
    })
    
  }
    
    render(){
      var arr = this.state.teams

      var display =arr?(arr.map(element => {
        return(
          <li class='weat'>
             {element}
          </li>
        )
      })
    ):(<h3 className='weat'>
      Look-up your team's victories!
    </h3>)
  
        return(
          <div>
            <h1 id='header1'>Champion's League Challenge</h1>
            <div class="input-field col s3">
            <form onSubmit={this.filterTeams}>
               <input placeholder="Select team" 
                  id="teamName" 
                  type="text" 
                  name="Select Team"
               ></input>
               </form>
            </div>
            <ul>
              {display}
            </ul>
            </div>
        )
      }
    }      
  export default FullMatches