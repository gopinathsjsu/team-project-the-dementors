import React, { Component,useState } from "react";

import background from "../assets/searchBg.jpeg";
import NavBarComponent from "../components/NavBar";
import data from "./mock-data.json";
import { useHistory } from "react-router-dom";

function Profile(){
    let history = useHistory();
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
                Reward points: {parseInt(rewards)}
                <br/>
                Email: {email}
                <br/>
            </div>
            <button class="btn btn-info" onClick={()=>{history.push('/search')}} style={{width:'40%',height:40,color:"white",borderRadius:7,marginLeft:"375px"}}>
                        
                        Search
                   
            </button>
            <div style={{justifyContent:'center',alignItems:"center",display:"flex"}}>
            </div>
        </div>
    );
}
export default Profile;