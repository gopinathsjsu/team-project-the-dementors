import React, { Component,useState } from "react";

import background from "../assets/searchBg.jpeg";
import NavBarComponent from "../components/NavBar";
import data from "./mock-data.json";
import axios from 'axios';

function Profile(){
    const [profile,setProfile]= useState(data);
    return(
        <div style={{height:'100vh',backgroundImage: `url(${background})` ,backgroundSize:"cover" }}>
            <NavBarComponent/>
            <div 
            style={{justifyContent:'center',alignItems:"center",display:"flex",fontSize:40,color:'whiteSmoke',marginLeft:'-50px',marginTop:'200px'}}
            >
                First Name: {profile.customer.firstName}
                <br/>
                Last Name: {profile.customer.lastName}
                <br/>
                Reward points: {profile.customer.customerRewards[1]}
                <br/>
                Email: {profile.customer.emailId}
                <br/>
            </div>
            <div style={{justifyContent:'center',alignItems:"center",display:"flex"}}>
            </div>
        </div>
    );
}
export default Profile;