import React, { Component } from "react";
import background from "../assets/searchBg.jpeg";
import NavBarComponent from "../components/NavBar";
import {useHistory} from 'react-router-dom';


function Cancel(){
    let history = useHistory();
    return(
        <div style={{height:'100vh',backgroundImage: `url(${background})` ,backgroundSize:"cover" }}>
        <NavBarComponent/>
        <div style={{justifyContent:'center',alignItems:"center",display:"flex",fontSize:40,color:'white',marginLeft:'-50px',marginTop:'200px'}}>
            Sorry to see you go :(
            <br/>
            Book with us and earn rewards
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
export default Cancel;