import React, { Component, useState } from "react";
import NavBarComponent from "../components/NavBar";
import axios from 'axios';
import moment from 'moment';
import data from "./allcustomer-data.json";

function CustomerList(){
  const [allcustomers,setCustomer]= useState([]);
  let hotel = localStorage.getItem("hotelId")
  console.log("1st booking", allcustomers)
  console.log("HOTEL: ",hotel)
  React.useEffect(() => {
  const url =  `http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/getHotelBooking?hotelId=${localStorage.getItem("hotelId")}`;
  axios.get(url, {headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json' 
  }}).then(res=>{
     console.log("response--->",res)
     if(res && res.data && res.data.length>0){
         console.log("res.data",res.data)
         setCustomer(res.data);
     }
}).catch(err=>{
     console.log("Err-->",err)
 })
}, []);

  return(
    <div style={{height:'100vh',backgroundSize:"cover",opacity:0.8 }}>
               <NavBarComponent/>
               <div style={{justifyContent:'center',alignItems:"center",display:"flex",fontSize:20,paddingLeft:'50px',paddingRight:'50px',height:'100%'}}>
               <table style={{border:'1px solid black'}}>
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                      <th>Check in Date</th>
                      <th>Check out Date</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  {allcustomers && allcustomers.length>0?allcustomers.map(ele=>{
                      if(typeof(ele)=="object"){
                     return(
                       <tr>
                         <td>{ele.customer && ele.customer.firstName? ele.customer.firstName:""}</td>
                         <td>{moment(ele.bookingFromDate).format('DD-MM-YYYY')}</td>
                         <td>{moment(ele.bookingToDate).format('DD-MM-YYYY')}</td>
                         <td>{ele.price}</td>
                       </tr>
                     )
                      }
                      else{
                        return null;
                      }
                    }):null}
                  </tbody>
                </table>
               </div>
      </div>
  );
}
export default CustomerList;