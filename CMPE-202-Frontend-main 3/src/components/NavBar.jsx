
import React, { Component } from "react";

import {FaUser,FaSignOutAlt} from 'react-icons/fa'
import background from "../assets/loginBg.jpeg";

const NavBarComponent=()=>{
    return(



        <div style={{height:70,backgroundColor:"#F5F5F5",display:'flex',flexDirection:'row',alignItems:'center',width:"100%",borderBottom:1,paddingLeft:10,paddingRight:10}}>
            <div style={{width:"80%",fontSize:45,fontFamily:"cursive",fontWeight:"bold"}}>
                Worthy Go
 
                </div>
                <div style={{width:"25%",display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
   <div style={{display:"flex",flexDirection:"row",alignItems:"center",fontWeight:"bold",fontFamily:"seris",fontSize:14 }}>

            <FaUser size={14} color={"#231f20"} style={{marginLeft:5}}/>
            User
            {/* <h5
             style={{textAlign:"center",alignSelf:"center", color:"#231f20",marginLeft:7,fontFamily:"serif",fontSize:14,fontWeight:"bold"}}
             >
                 User</h5> */}
           </div>
           
           <div style={{fontFamily:"serif",fontSize:14,fontWeight:"bold"}}>
           Manage Trips

           </div>

           <div style={{display:"flex",flexDirection:"row",fontFamily:"serif",fontSize:14,fontWeight:"bold",alignItems:"center"}}>

           
            <FaSignOutAlt size={14} color={"#231f20"} style={{marginRight:7}}/>
             SignOut
            {/* <h5 style={{color:"#231f20",marginLeft:7,fontSize:14,fontFamily:"serif",fontWeight:"bold"}}>Sign Out</h5> */}
            </div>
            </div>

        </div>
    )
}
export  default NavBarComponent;