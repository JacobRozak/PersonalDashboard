import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import FullNews from './fullNews'
import {GoogleCharts} from 'google-charts'

import clothing from './clothing.json'


class Pie extends Component{
    constructor() {
        super()
        this.state = {
            jumper : 0,
            raincoat : 0,
            hoodie : 0,
            blazer : 0,
            sweater : 0,
            jacket : 0
        }
    }
    
    componentDidMount(){
       
       //console.log(clothing.payload)
       let count = clothing.payload.forEach(e => {
           if(e.clothe === 'jumper'){
            return this.state.jumper += 1
           }else if(e.clothe === 'raincoat'){
            return this.state.raincoat += 1 
           }else if(e.clothe === 'hoodie'){
            return this.state.hoodie += 1
           }else if(e.clothe === 'blazer'){
            return this.state.blazer += 1
         }else if(e.clothe === 'sweater'){
            return this.state.sweater += 1
         }else if(e.clothe === 'jacket'){
            return this.state.jacket += 1
         }
       }) 
    }

    render(){
        console.log(this.state)
        GoogleCharts.load(drawChart);
        let chart;
        let jumper = this.state.jumper
        let raincoat = this.state.raincoat
        let hoodie = this.state.hoodie
        let blazer = this.state.blazer
        let sweater = this.state.sweater
        let jacket = this.state.jacket

       function drawChart() {
        
           // Standard google charts functionality is available as GoogleCharts.api after load
           const data = GoogleCharts.api.visualization.arrayToDataTable([
               ['Chart thing', 'Chart amount'],
               ['jumper', jumper],
               ['raincoat', raincoat],
               ['hoodie', hoodie],
               ['blazer',blazer],
               ['sweater',sweater],
               ['jacket',jacket]
           ]);
           const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart1'));
           pie_1_chart.draw(data);
           chart = pie_1_chart;
       }
        return(
            <div>
               <div id='chart1'></div>
            </div>
        )
    }
}
export default Pie