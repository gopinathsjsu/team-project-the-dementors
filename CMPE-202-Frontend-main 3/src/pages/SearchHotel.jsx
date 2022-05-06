import React, { Component } from "react";
import {FaUser,FaKey,FaMapPin,FaMapMarker, FaCalendar, FaPlus, FaMinus,FaUsers} from 'react-icons/fa'
import DatePicker from "react-datepicker";

import background from "../assets/searchBg.jpeg";
import NavBarComponent from "../components/NavBar";
import Calendar from 'react-calendar';

import "react-datepicker/dist/react-datepicker.css";
//import { Button } from "bootstrap";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import moment  from "moment";



function SearchHotel () {
    const history=useHistory();
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const[startDate,setStartDate]=React.useState(null);
    const [endDate,setEndDate]=React.useState(null);
    const[openModal,setOpenModal]=React.useState(false);
    const [adult,setAdult]=React.useState(0);
    const [children,setChildren]=React.useState(0);
    const[room,setRoom]=React.useState(0)
    const[place,setPlace]=React.useState("")
    console.log("type of",typeof(place),place);
    return (
         
          
        <div style={{height:'100vh',backgroundImage: `url(${background})` ,backgroundSize:"cover" }}>
              <NavBarComponent/>
              <div style={{marginTop:20,padding:"7%",display:"flex",flexDirection:"row"}}>
                  <div style={{flexDirection:"row",backgroundColor:"white",width:280,borderRadius:7,alignItems:"center",height:30}}>
                      
                      <input
                      class="input"
                      type="text"
                     
                   
                      onChange={(t)=>{
                          setPlace(t.target.value)
                       //var searchBox = new window.google.maps.places.SearchBox(t);
                      // console.log("searchbox-->",t)
                      }}
                      style={{borderStyle:"none",fontSize:10,width:"80%",marginLeft:10,borderColor:"red"}} type="text" placeholder="Where do you want to go"/>
                  <FaMapMarker size={13} color="#6666FF"/>
                  </div>
                  
                      <div className="input-container" 
                      //style={{display:"flex",flexDirection:"row",backgroundColor:"white",borderRadius:7,height:30,alignItems:"center",marginLeft:15}}
                      >
                    
               <DatePicker
     placeholderText={'Select start date'}
     //wrapperClassName="date-picker"
       selected={startDate}
       onChange={(t)=>{
          setStartDate(t)
       }}
       style={{fontSize:10}}
      // customInput={<FaCalendar size={20}/>}
      customStyles={{ borderColor:"transparent" ,fontSize:13,marginLeft:10}}
     
      
     />
     <FaCalendar size={13} color={"#6666FF"} />
     </div>
     <div 
     className="input-container"
     //style={{display:"flex",flexDirection:"row",backgroundColor:"white",borderRadius:7,height:30,alignItems:"center",marginLeft:15}}
     >
               <DatePicker
     placeholderText={'Select end  date'}
       selected={endDate}
       onChange={(t)=>{
        setEndDate(t);
       }}
      // customInput={<FaCalendar size={20}/>}
      customStyles={{ borderColor:"transparent" ,fontSize:13}}
     
      
     />
     <FaCalendar size={13} color={"#6666FF"} />
     </div>
     <div style={{display:'flex',flexDirection:"column",marginLeft:70}}>
           
           <div onClick={()=>{
               setOpenModal(!openModal)
               //this.setState({openModal:!this.state.openModal})

           }} style={{flexDirection:"row",height:30,borderRadius:7,display:"flex",backgroundColor:"white",marginLeft:10,alignItems:"center",paddingLeft:7,paddingRight:7,justifyContent:"center"}}>
           <FaUsers size={13} color={"#6666FF"} />  
           <p style={{fontSize:10,marginTop:'10%',marginLeft:4}}>{adult+" "+"adult(s)"+" "+"."}</p>
           <p style={{fontSize:10,marginTop:"10%"}}>{children+" "+"children"+" "+"."}</p>
           <p style={{fontSize:10,marginTop:"10%"}}>{room+" "+"room(s)"+" "+""}</p>
               

           </div>
          
   
            {openModal?<div style={{padding:10,backgroundColor:"white",display:"flex",flexDirection:"column",marginTop:10,boxShadow:5}}>
                <div style={{flexDirection:"row",display:"flex",marginTop:5,alignItems:"center",height:30}}>
                <div style={{width:"55%",display:"flex"}}>

<h6 style={{marginTop:7}}>Adults</h6> 
</div>
<div style={{width:"45%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                     <FaPlus
                      onClick={()=>{
                       //this.setState({adult:this.state.adult+1})
                       setAdult(adult+1);
                   }}
                     size={13}/>
                    <h6 style={{marginTop:7,fontSize:10}}>{adult}</h6>
                    <FaMinus
                     onClick={()=>{
                       //this.setState({adult:this.state.adult-1})
                       setAdult(adult-1)
                   }} size={13}/> 
                    </div>
                   
                    </div>
                    <div style={{flexDirection:"row",display:"flex",marginTop:5,alignItems:"center",height:20}}>
                     <div style={{width:"55%"}}>

                     <h6 style={{marginTop:7}}>Children</h6> 
                     </div>
                     <div style={{width:"45%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                     <FaPlus
                     onClick={()=>{
                         //this.setState({children:this.state.children+1})
                         setChildren(children+1)
                     }}
                     size={13}/>
                    <h6 style={{marginTop:7,fontSize:10}}>{children}</h6>
                    <FaMinus
                     onClick={()=>{
                       //this.setState({children:this.state.children-1})
                       setChildren(children-1)
                   }}
                    size={13}/> 
                    </div>
                   
                    </div>
                    <div style={{flexDirection:"row",display:"flex",marginTop:5,alignItems:"center",height:20}}>
                    <div style={{width:'55%'}}>

<h6 style={{marginTop:7}}>Room</h6> 
</div>
<div style={{width:"45%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                     <FaPlus onClick={()=>{
                         //this.setState({room:this.state.room+1})
                     }} size={13}/>
                    <h6 style={{marginTop:7,fontSize:10}}>{room}</h6>
                    <FaMinus
                    onClick={()=>{
                        //this.setState({room:this.state.room-1})
                    }}
                    size={13}/> 
                    </div>
                   
                    </div>
               
               </div>:null} 
               </div>
           
                  

              </div>
              <div style={{justifyContent:'center',alignItems:"center",display:"flex"}}>
              <button
              onClick={()=>{
                // var someDateString = moment(endDate).format("DD/MM/YYYY");
                // console.log("somstring",someDateString)
                  localStorage.setItem("location",place);
                  localStorage.setItem("startDate",moment(startDate).format("DD/MM/YYYY"));
                  localStorage.setItem("endDate",moment(endDate).format("DD/MM/YYYY"));
                  localStorage.setItem("adult",adult);
                  localStorage.setItem("children",children);
                  localStorage.setItem("room",room);
                  history.push("/hotellist", {state: { detail: JSON.stringify(place) }})
                  //history.push("/hotellist", {state: { place,startDate,endDate,adult,children,room }})

              }}
              style={{backgroundColor:"red",width:'40%',height:40,backgroundColor:"#73a5c6",color:"white",borderRadius:7}}>Search</button>
                  
              </div>
            

     </div>
    )
   
   
       
              
               
              
         
    
     }

    export default SearchHotel;
