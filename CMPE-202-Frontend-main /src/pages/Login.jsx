import React, { Component } from "react";
import {FaUser,FaKey} from 'react-icons/fa'
import background from "../assets/loginBg.jpeg";

export default class Login extends Component {
    render() {
        return (
            <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',backgroundImage: `url(${background})` ,backgroundSize:"cover" }}>
            <form style={{paddingTop:'10%',paddingBottom:"10%", borderRadius:10,backgroundColor:'white',paddingLeft:"5%",paddingRight:"5%"}}>
                <h3 style={{textAlign:'center',fontWeight:"bold",fontSize:28}}>Login</h3>

                <div style={{flexDirection:"row",display:"flex",backgroundColor:"lightgray",width:300,borderRadius:6,alignItems:"center",paddingLeft:10}} className="form-group">
                    <FaUser size={10} color={"gray"}/>
                   
                    <input style={{borderColor:"transparent",backgroundColor:"transparent",fontSize:10}} type="email" className="form-control" placeholder="Username" />
                </div>

                <div style={{flexDirection:"row",display:"flex",backgroundColor:"lightgray",width:"100%",borderRadius:6,alignItems:"center",paddingLeft:10,marginTop:10}} className="form-group">
                    <FaKey size={10} color={"gray"}/>
                   
                    <input style={{borderColor:"transparent",backgroundColor:"transparent",fontSize:10}} type="password" className="form-control" placeholder="Password" />
                </div>

               
<div style={{width:'100%',alignContent:"center",display:"flex",flexDirection:"column"}}>


                <button style={{alignSelf:'center',marginTop:10,width:'70%'}} type="submit" className="btn btn-primary btn-block">Submit</button>
               </div>
                
            </form>
            </div>
        );
    }
}