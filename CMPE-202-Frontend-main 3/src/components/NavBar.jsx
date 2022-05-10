
import React, { Component } from "react";

import {FaUser,FaSignOutAlt, FaHotel} from 'react-icons/fa'
import { useHistory } from "react-router-dom";
import background from "../assets/loginBg.jpeg";

const NavBarComponent=()=>{
    const history=useHistory();
    const name=localStorage.getItem("username")
    console.log("name-->",name)
    return(
        <div style={{height:70,backgroundColor:"#F5F5F5",display:'flex',flexDirection:'row',alignItems:'center',width:"100%",borderBottom:1,paddingLeft:10,paddingRight:10}}>
            <div style={{width:"80%",fontSize:45,fontFamily:"cursive",fontWeight:"bold"}}>
                Worthy Go
            </div>
            <div style={{width:"25%",display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",fontWeight:"bold",fontFamily:"seris",fontSize:14 }}>
                    <FaUser onClick={()=>{history.push('/profile')}} size={14} color={"#231f20"} style={{marginLeft:5}}/>
                    {name}
                </div>
        
                <div onClick={()=>{history.push('/bookings')}}>
                        <FaHotel size={14} color={"#231f20"}  style={{marginLeft:5}}/>
                        Manage Trips
                    </div>

                <div onClick={()=>{history.push("/")}} style={{display:"flex",flexDirection:"row",fontFamily:"serif",fontSize:14,fontWeight:"bold",alignItems:"center"}}>
                        <FaSignOutAlt/>
                        SignOut
                    </div>
            </div>
        </div>
    )
}
export  default NavBarComponent;