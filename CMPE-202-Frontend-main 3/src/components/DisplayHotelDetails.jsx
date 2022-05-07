
import React, { Component } from "react";

import {FaUser,FaSignOutAlt} from 'react-icons/fa'
import background from "../assets/loginBg.jpeg";

const DisplayHotelDetails=(props)=>{
    console.log("props",props)
    const styles = {
      borderRight: '2px solid #D3D3D3', 
     color:"white",
      paddingLeft:10,
      paddingRight:10,
      fontWeight:"bold",
      fontSize:16
     
 };
 const stylesRoom = {
   //borderRight: '2px solid #D3D3D3', 
  color:"white",
   paddingLeft:10,
   paddingRight:10,
   fontWeight:"bold",
   fontSize:16
  
};
 const guests=parseInt(props.adult)+parseInt(props.children);
    return(



        <div style={{height:50,backgroundColor:"#3f3d3d",display:'flex',alignItems:'center', flexDirection:'row',width:"100%",paddingLeft:10,paddingRight:10}}>
            <div style={styles}>
               {props.place}
            </div>
            <div style={styles}>
               {props.startDate +" "+ "-"+ " "+props.endDate}
            </div>
           
            <div style={styles}>
               {guests +" "+"Guest(s)"}
            </div>
            
            <div style={stylesRoom}>
               {props.room+" "+"Rooms(s)"}
            </div>

            

        </div>
    )
}
export  default DisplayHotelDetails;