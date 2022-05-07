import React, { Component } from "react";

import background from "../assets/searchBg.jpeg";
import NavBarComponent from "../components/NavBar";

// import "react-datepicker/dist/react-datepicker.css";
//import { Button } from "bootstrap";
import axios from 'axios'



export default class Cancel extends Component {
    constructor(){
        super();
        this.state={
            startDate:false,
            endDate:false,
            adult:1,
            children:1,
            room:1,
            openModal:false
        }
    }
    componentDidMount() {
        //const axios = require("axios");

        //const axios = require("axios");

        // const options = {
        //   method: 'GET',
        //   url: 'https://free-geo-ip.p.rapidapi.com/xml/%7Bip-or-hostname%7D',
        //   headers: {
        //     'X-RapidAPI-Host': 'free-geo-ip.p.rapidapi.com',
        //     'X-RapidAPI-Key': '75faad3b51msh23295450199a068p1bcd7cjsn4a316d9d5c85'
        //   }
        // };
        
        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });
      }
    render() {
        return (
         
          
         <div style={{height:'100vh',backgroundImage: `url(${background})` ,backgroundSize:"cover" }}>
               <NavBarComponent/>
               <div 
               style={{justifyContent:'center',alignItems:"center",display:"flex",fontSize:40,color:'whiteSmoke',marginLeft:'-50px',marginTop:'200px'}}
               >
                   First Name:
                   <br/>
                   Last Name:
                   <br/>
                   Reward points:
                   <br/>
                   Email:
                   <br/>
               </div>
               <div style={{justifyContent:'center',alignItems:"center",display:"flex"}}>
                   
               </div>
             

      </div>
              
               
              
         
        );
    }
}