
import React, { Component } from "react";

import {FaUser,FaSignOutAlt} from 'react-icons/fa'
import background from "../assets/loginBg.jpeg";

const DisplayHotelDetails=(props)=>{
    console.log("props",props)
    return(



        <div style={{height:70,backgroundColor:"#3f3d3d",display:'flex',alignItems:'center', flexDirection:'row',width:"100%",paddingLeft:10,paddingRight:10}}>
            <div style={{borderRightColor:"white",borderRightWidth:1,color:'white'}}>
               {props.place}
            </div>
            <div style={{color:"white",marginLeft:'2%'}}>
               {props.startDate}
            </div>
            <div style={{color:"white",marginLeft:"2%"}}>
               {props.endDate}
            </div>
            <div style={{color:"white",marginLeft:'2%'}}>
               {props.adult}
            </div>
            <div style={{color:"white",marginLeft:'2%'}}>
               {props.children}
            </div>
            <div style={{color:"white",marginLeft:'2%'}}>
               {props.room}
            </div>

            

        </div>
    )
}
export  default DisplayHotelDetails;