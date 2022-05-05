import React, { Component } from "react";
import {FaUser,FaKey,FaMapPin,FaMapMarker, FaCalendar, FaPlus, FaMinus,FaUsers} from 'react-icons/fa'
import DatePicker from "react-datepicker";

import background from "../assets/searchBg.jpeg";
import NavBarComponent from "../components/NavBar";
import Calendar from 'react-calendar';

import "react-datepicker/dist/react-datepicker.css";
//import { Button } from "bootstrap";
import axios from 'axios'



export default class SearchHotel extends Component {
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

        const options = {
          method: 'GET',
          url: 'https://free-geo-ip.p.rapidapi.com/xml/%7Bip-or-hostname%7D',
          headers: {
            'X-RapidAPI-Host': 'free-geo-ip.p.rapidapi.com',
            'X-RapidAPI-Key': '75faad3b51msh23295450199a068p1bcd7cjsn4a316d9d5c85'
          }
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        


        // const app = this;
        // function initAutocomplete() {
        //   var input = document.getElementById("pac-input");
        //   var searchBox = new window.google.maps.places.SearchBox(input);
        //   searchBox.addListener("places_changed", function() {
        //       console.log("addlistener-->",document.getElementById("pac-input").value)
        //     //app.setState({ location: document.getElementById("pac-input").value });
        //   });
        // }
        // initAutocomplete();
      }
    render() {
        return (
         
          
         <div style={{height:'100vh',backgroundImage: `url(${background})` ,backgroundSize:"cover" }}>
               <NavBarComponent/>
               <div style={{marginTop:20,padding:"7%",display:"flex",flexDirection:"row"}}>
                   <div style={{flexDirection:"row",backgroundColor:"white",width:280,borderRadius:7,alignItems:"center",height:30}}>
                       
                       <input
                      
                       id="pac-input"
                       onChange={(t)=>{
                        //var searchBox = new window.google.maps.places.SearchBox(t);
                       // console.log("searchbox-->",t)
                       }}
                       style={{borderStyle:"none",fontSize:10,width:"80%",marginLeft:10}} type="text" placeholder="Where do you want to go"/>
                   <FaMapMarker size={13} color="#6666FF"/>
                   </div>
                   
                       <div className="input-container" 
                       //style={{display:"flex",flexDirection:"row",backgroundColor:"white",borderRadius:7,height:30,alignItems:"center",marginLeft:15}}
                       >
                     
                <DatePicker
      placeholderText={'Select start date'}
      //wrapperClassName="date-picker"
        selected={this.state.startDate}
        onChange={(t)=>{
            this.setState({startDate:t})
        }}
        style={{fontSize:10}}
       // customInput={<FaCalendar size={20}/>}
       customStyles={{ borderColor:"transparent" ,fontSize:13,marginLeft:10}}
      
       
      />
      <FaCalendar size={13} color={"#6666FF"} />
      </div>
      <div 
      className="input-container"
      //style={{display:"flex",flexDirection:"row",backgroundColor:"white",borderRadius:7,height:30,alignItems:"center",marginLeft:15}}
      >
                <DatePicker
      placeholderText={'Select end  date'}
        selected={this.state.endDate}
        onChange={(t)=>{
            this.setState({endDate:t})
        }}
       // customInput={<FaCalendar size={20}/>}
       customStyles={{ borderColor:"transparent" ,fontSize:13}}
      
       
      />
      <FaCalendar size={13} color={"#6666FF"} />
      </div>
      <div style={{display:'flex',flexDirection:"column",marginLeft:70}}>
            
            <div onClick={()=>{
                this.setState({openModal:!this.state.openModal})

            }} style={{flexDirection:"row",height:30,borderRadius:7,display:"flex",backgroundColor:"white",marginLeft:10,alignItems:"center",paddingLeft:7,paddingRight:7,justifyContent:"center"}}>
            <FaUsers size={13} color={"#6666FF"} />  
            <p style={{fontSize:10,marginTop:'10%',marginLeft:4}}>{this.state.adult+" "+"adult(s)"+" "+"."}</p>
            <p style={{fontSize:10,marginTop:"10%"}}>{this.state.children+" "+"children"+" "+"."}</p>
            <p style={{fontSize:10,marginTop:"10%"}}>{this.state.room+" "+"room(s)"+" "+""}</p>
                

            </div>
           
    
             {this.state.openModal?<div style={{padding:10,backgroundColor:"white",display:"flex",flexDirection:"column",marginTop:10,boxShadow:5}}>
                 <div style={{flexDirection:"row",display:"flex",marginTop:5,alignItems:"center",height:30}}>
                 <div style={{width:"55%",display:"flex"}}>

<h6 style={{marginTop:7}}>Adults</h6> 
</div>
<div style={{width:"45%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                      <FaPlus
                       onClick={()=>{
                        this.setState({adult:this.state.adult+1})
                    }}
                      size={13}/>
                     <h6 style={{marginTop:7,fontSize:10}}>{this.state.adult}</h6>
                     <FaMinus
                      onClick={()=>{
                        this.setState({adult:this.state.adult-1})
                    }} size={13}/> 
                     </div>
                    
                     </div>
                     <div style={{flexDirection:"row",display:"flex",marginTop:5,alignItems:"center",height:20}}>
                      <div style={{width:"55%"}}>

                      <h6 style={{marginTop:7}}>Children</h6> 
                      </div>
                      <div style={{width:"45%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                      <FaPlus
                      onClick={()=>{
                          this.setState({children:this.state.children+1})
                      }}
                      size={13}/>
                     <h6 style={{marginTop:7,fontSize:10}}>{this.state.children}</h6>
                     <FaMinus
                      onClick={()=>{
                        this.setState({children:this.state.children-1})
                    }}
                     size={13}/> 
                     </div>
                    
                     </div>
                     <div style={{flexDirection:"row",display:"flex",marginTop:5,alignItems:"center",height:20}}>
                     <div style={{width:'55%'}}>

<h6 style={{marginTop:7}}>Room</h6> 
</div>
<div style={{width:"45%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                      <FaPlus onClick={()=>{
                          this.setState({room:this.state.room+1})
                      }} size={13}/>
                     <h6 style={{marginTop:7,fontSize:10}}>{this.state.room}</h6>
                     <FaMinus
                     onClick={()=>{
                         this.setState({room:this.state.room-1})
                     }}
                     size={13}/> 
                     </div>
                    
                     </div>
                
                </div>:null} 
                </div>
            
                   

               </div>
               <div style={{justifyContent:'center',alignItems:"center",display:"flex"}}>
               <button style={{backgroundColor:"red",width:'40%',height:40,backgroundColor:"#73a5c6",color:"white",borderRadius:7}}>Search</button>>
                   
               </div>
             

      </div>
              
               
              
         
        );
    }
}