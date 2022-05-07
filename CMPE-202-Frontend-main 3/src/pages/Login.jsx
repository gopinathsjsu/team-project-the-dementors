import React, { Component } from "react";
import {FaUser,FaKey} from 'react-icons/fa'
import background from "../assets/loginBg.jpeg";
import UserPool  from "../UserPool";
import {AuthenticationDetails, CognitoUser} from 'amazon-cognito-identity-js'
//import AWS from 'aws-sd'
import ReactLoading from 'react-loading';
import CircularProgress from '@material-ui/core/CircularProgress'
import Backdrop from '@material-ui/core/Backdrop'
import {makeStyles} from '@material-ui/core'
import LoadingOverlay from 'react-loading-overlay';

const useStyles=makeStyles((theme)=>({
    backdrop:{
        zIndex:theme.zIndex.drawer+1,
        color:"#fff"
    }

}));


export default class Login extends Component {
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            navigate:false,
            loading:false
        }
    }
    
componentDidUpdate(prevState){
    console.log("navigate state--->",prevState)
    if(this.state.navigate!=prevState.navigate && this.state.navigate){
        //localStorage.setItem("userName",place);
        console.log("navigate")
        // alert("Registartion successfull")

        //callLoginAPi
        this.props.history.push("/search")
    }
}
_changeState(){

}

    onSubmit=(event)=>{
       
        console.log("event",this.state.email,this.state.password)
        //event.preventDefault();
        //UserPool.signi'
        const user=new CognitoUser({
            Username:this.state.email,
            Pool:UserPool
        });
        var authenticationData = new AuthenticationDetails({
        Username: this.state.email,
            Password: this.state.password,
        })
    //     user.authenticateUser(authenticationData,{
            
    //             onSuccess: function (result) {
    //                //this._changeState()
    //             // console.log("result--->",result)
                
    //              //this.setState({navigate:true})
    //              //this.props.history.push("/search")
    //          },
    //             onFailure: function(err) {
    //                 alert("Incorrect username or password")
    //                 console.log("err--->",err)
                    
             
    //     },
   
    // }
    //     )
        var call=new Promise((resolve, reject) =>
        user.authenticateUser(authenticationData, {
         onSuccess: result => resolve(result),
         onFailure: err => reject(err)
        })
       
       );
       call.then(res=>{
           console.log("Res promise",res)
           this.setState({navigate:true})
       }).catch(Err=>{
           console.log("err in promise",Err)
           alert("Incorrect username or password")
       })

    }

    //f7q7re1qmcf0lr3vpvio3v9h1
    render() {
        console.log("tbis.state-->",this.state.email)
       
       
       
        return (
            <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',backgroundImage: `url(${background})` ,backgroundSize:"cover" }}>
           
            <form  style={{paddingTop:'10%',paddingBottom:"10%", borderRadius:10,backgroundColor:'white',paddingLeft:"5%",paddingRight:"5%"}}>
                <h3 style={{textAlign:'center',fontWeight:"bold",fontSize:28}}>Login</h3>
               
                <div style={{flexDirection:"row",display:"flex",backgroundColor:"lightgray",width:300,borderRadius:6,alignItems:"center",paddingLeft:10}} className="form-group">
                    <FaUser size={10} color={"gray"}/>
                   
                    <input
                    onChange={(t)=>{
                        //console
                        this.setState({email:t.target.value})
                    }}
                    class="input" style={{borderColor:"transparent",backgroundColor:"transparent",fontSize:10}} type="email" className="form-control" placeholder="Username" />
                </div>

                <div style={{flexDirection:"row",display:"flex",backgroundColor:"lightgray",width:"100%",borderRadius:6,alignItems:"center",paddingLeft:10,marginTop:10}} className="form-group">
                    <FaKey size={10} color={"gray"}/>
                   
                    <input
                     onChange={(t)=>{
                        this.setState({password:t.target.value})
                    }} 
                    style={{borderColor:"transparent",backgroundColor:"transparent",fontSize:10}} type="password" className="form-control" placeholder="Password" />
                </div>

               
<div style={{width:'100%',alignContent:"center",display:"flex",flexDirection:"column"}}>


                <button
                onClick={()=>{
                    this.onSubmit()
                    this.setState({loading:true})
                }}
                style={{alignSelf:'center',marginTop:10,width:'70%'}} type="button" className="btn btn-primary btn-block">Submit</button>
               </div>
                
            </form>
{/* 
            <LoadingOverlay active={this.state.loading} spinner size={40}/> */}
           
            </div>
        );
    }
}