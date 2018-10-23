import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Weather from './weather'
import News from './news'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'

import Matches from './matches'
import ImageUpload from './pictures'

import Todo from './todo'

import {geolocated} from 'react-geolocated';

import Pie from './chart'




class Home extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
        this.newsClick = this.newsClick.bind(this)
        this.matchClick = this.matchClick.bind(this)
        this.pictureClick = this.pictureClick.bind(this)
        //this.getLocation = this.getLocation.bind(this)
        //this.showPosition = this.showPosition.bind(this)
        this.state={
            latitude:null,
            longitude:null,
            redirectTo: null,
            news:'burp',
            location: 'London',
            transform1:true
        }
    }
    
    componentDidMount(){
       // console.log(this.props.coords)
    }
    
    logout(event) {
        event.preventDefault()
        console.log('logging out')
        this.setState({
            redirectTo: "/"
        })
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null,
              path:'right here' 
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

      newsClick(e) {
        e.preventDefault()
        console.log('click')
        this.setState({
            redirectTo:"/fullNews"
        })
    }
    matchClick(e) {
        e.preventDefault()
        console.log('click')
        this.setState({
            redirectTo:"/fullMatches"
        })
    }
    pictureClick(e) {
        e.preventDefault()
        console.log('click')
        this.setState({
            redirectTo:"/fullPictures"
        })
    }
    todoClick(e) {
        e.preventDefault()
        console.log('click')
        this.setState({
            redirectTo:"/fullTodo"
        })
    }

    render() {
        console.log(this.props.coords)
        if (this.state.redirectTo ==='/fullNews') {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else if(this.state.redirectTo ==='/') {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }else if(this.state.redirectTo ==='/fullMatches'){
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }else if(this.state.redirectTo ==='/fullPictures'){
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }else if(this.state.redirectTo ==='fullTodo'){
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }else{ 
        return (
        <div>
            <h1 className='great'>Good Day, {this.props.username}!</h1>
            <Link to='#' onClick={this.logout} id='logout'>LOGOUT</Link>
            <div class="grid-container">
                <div className="grid-item"><span className="weat">Weather</span><div className="card"><Weather location={this.state.location} /></div></div>
                <div className="grid-item" onClick={this.newsClick}><span className="weat">News</span><div class="card"><News /></div></div>
                <div className="grid-item" onClick={this.matchClick}><span className="weat">Sport</span><div class="card"><Matches /></div></div>  
                <div className="grid-item" onClick={this.pictureClick}><span className="weat">Photos</span><div className="card"><ImageUpload /></div></div>
                <div className="grid-item"><span className="weat">Tasks</span><div className="card"><Todo /></div></div>
                <div className="grid-item"><span className="weat">Clothes</span><div className="card"><Pie /></div></div>  
            </div>
        </div>

        )

    }
    }
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  }) (Home)
