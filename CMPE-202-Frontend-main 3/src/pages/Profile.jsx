import React, { Component,useState } from "react";

import background from "../assets/searchBg.jpeg";
import NavBarComponent from "../components/NavBar";
import data from "./mock-data.json";
import axios from 'axios';

function Profile(){
    const [profile,setProfile]= useState(data);
    const fname=localStorage.getItem("username");
    const lname=localStorage.getItem("lastName");
    const rewards=localStorage.getItem("rewards");
    const email=localStorage.getItem("email");
    return(
        <div style={{height:'100vh',backgroundImage: `url(${background})` ,backgroundSize:"cover" }}>
            <NavBarComponent/>
            <div 
            style={{justifyContent:'center',alignItems:"center",display:"flex",fontSize:40,color:'whiteSmoke',marginLeft:'-50px',marginTop:'200px'}}
            >
                First Name: {fname}
                <br/>
                Last Name: {lname}
                <br/>
                Reward points: {rewards}
                <br/>
                Email: {email}
                <br/>
            </div>
            <div style={{justifyContent:'center',alignItems:"center",display:"flex"}}>
            </div>
        </div>
    );
}
export default Profile;