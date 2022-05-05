
import React, { Component } from "react";
import {FaUser,FaKey,FaEnvelope} from 'react-icons/fa'
import background from "../assets/loginBg.jpeg";
import Dropdown from 'react-dropdown';
import Select from 'react-select';

export default class Register extends Component{
    constructor(){
        super();
        this.state={
            userType:"Customer",
            hotelList:[{
                label:"Hilton",
                value:1
            },
            {
                label:"Arena",
                value:2
            },{
                label:"Aloft",
                value:3
            },{
                label:"Sonesta",
                value:4
            }
        ],
        hotelSelected:""
        }
    }
  
    render() {
        const colour = {
            control: (base, state) => ({
              ...base,
              background: "#023950",
              height:30,
              // match with the menu
              borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
              // Overwrittes the different states of border
              borderColor: state.isFocused ? "yellow" : "green",
              // Removes weird border around container
              boxShadow: state.isFocused ? null : null,
              "&:hover": {
                // Overwrittes the different states of border
                borderColor: state.isFocused ? "red" : "blue"
              }
            }),
            menu: base => ({
              ...base,
              // override border radius to match the box
              borderRadius: 0,
              // kill the gap
              marginTop: 0
            }),
            menuList: base => ({
              ...base,
              // kill the white space on first and last option
              padding: 0
            })
          };
          const colourStyles = {
            control: base => ({
              ...base,
              height: 30,
              minHeight: 30,
         
              backgroundColor:'lightgray',
              marginTop:10,
              fontSize:10,justifyContent:'center'
            }),
            
          };

        const userType = [
            { label: "Customer", value: 1 },
            { label: "Employee", value: 2 },
           
          ];
       return (
            <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',backgroundImage: `url(${background})` ,backgroundSize:"cover" }}>
            <form style={{paddingTop:'10%',paddingBottom:"10%", borderRadius:10,backgroundColor:'white',paddingLeft:"5%",paddingRight:"5%"}}>
                <h3 style={{textAlign:'center',fontWeight:"bold",fontSize:28}}>Sign Up</h3>

                <div style={{flexDirection:"row",display:"flex",backgroundColor:"lightgray",width:300,borderRadius:6,alignItems:"center",paddingLeft:10,marginTop:10}} className="form-group">
                    <FaUser size={10} color={"gray"}/>
                   
                    <input style={{borderColor:"transparent",backgroundColor:"transparent",fontSize:10}} type="text" className="form-control" placeholder="First Name" />
                </div>
                <div style={{flexDirection:"row",display:"flex",backgroundColor:"lightgray",width:300,borderRadius:6,alignItems:"center",paddingLeft:10,marginTop:10}} className="form-group">
                    <FaUser size={10} color={"gray"}/>
                   
                    <input style={{borderColor:"transparent",backgroundColor:"transparent",fontSize:10}} type="text" className="form-control" placeholder="Last Name" />
                </div>
                <div style={{flexDirection:"row",display:"flex",backgroundColor:"lightgray",width:300,borderRadius:6,alignItems:"center",paddingLeft:10,marginTop:10}} className="form-group">
                    <FaEnvelope size={10} color={"gray"}/>
                   
                    <input style={{borderColor:"transparent",backgroundColor:"transparent",fontSize:10}} type="email" className="form-control" placeholder="Email" />
                </div>

                <div style={{flexDirection:"row",display:"flex",backgroundColor:"lightgray",width:"100%",borderRadius:6,alignItems:"center",paddingLeft:10,marginTop:10}} className="form-group">
                    <FaKey size={10} color={"gray"}/>
                   
                    <input style={{borderColor:"transparent",backgroundColor:"transparent",fontSize:10}} type="password" className="form-control" placeholder="Password" />
                </div>
                <Select
               placeholder={"User Type"}
               styles={colourStyles}

               options={ userType } onChange={(t)=>{
                   this.setState({userType:t.label})
               }} />
                 {this.state.userType=="Employee"? <Select
               placeholder={"Select Hotel"}
               styles={colourStyles}

               options={ this.state.hotelList } onChange={(t)=>{
                   this.setState({hotelSelected:t.label})
               }} />:null}

               
<div style={{width:'100%',alignContent:"center",display:"flex",flexDirection:"column"}}>


                <button style={{alignSelf:'center',marginTop:10,width:'70%'}} type="submit" className="btn btn-primary btn-block">Submit</button>
               </div>
              
               

                
            </form>
            </div>
        );
    }
}