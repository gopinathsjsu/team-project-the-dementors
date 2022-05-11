import React, { Component } from "react";
import background from "../assets/searchBg.jpeg";
import NavBarComponent from "../components/NavBar";
import {useHistory, useLocation} from 'react-router-dom';


function Confirm(){
    let history = useHistory();
    const location = useLocation();
    console.log(location.state.total)
    return(
        <div style={{height:'100vh',backgroundImage: `url(${background})` ,backgroundSize:"cover" }}>
        <NavBarComponent/>
        <div style={{justifyContent:'center',alignItems:"center",display:"flex",fontSize:40,color:'white',marginLeft:'-50px',marginTop:'200px'}}>
            Thank you for booking with us! 
            <br/>
            You have earned {parseInt(0.1* parseInt(location.state.total))} points
        </div>
        <div style={{justifyContent:'center',alignItems:"center",display:"flex"}}>
        <button style={{width:'40%',height:40,backgroundColor:"#73a5c6",color:"white",borderRadius:7}}
        onClick={()=>{history.push('/search')}}
        >
            Continue
         </button>          
        </div>
 </div>
    );
}
export default Confirm;