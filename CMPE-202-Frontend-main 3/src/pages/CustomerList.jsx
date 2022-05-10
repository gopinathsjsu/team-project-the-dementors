import React, { Component, useState } from "react";
import NavBarComponent from "../components/NavBar";
import axios from 'axios';
import moment from 'moment';
import data from "./allcustomer-data.json";

function CustomerList(){
  const [allcustomers,setCustomer]= useState([]);
  let hotel = localStorage.getItem("hotelId")
  console.log("HOTEL: ",hotel)
  React.useEffect(() => {
  // const url = 'http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/getHotelBooking?hotelId='+{hotel};
  const url =  `http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/getHotelBooking?hotelId=${hotel}`;
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
                      <th>Customer Room</th>
                      <th>Check in Date</th>
                      <th>Check out Date</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{console.log("20000000",allcustomers[0].bookingId)}</td>
                      <td>{moment(allcustomers[0].bookingFromDate).format('MM/DD/yy')}</td>
                      <td>{moment(allcustomers[0].bookingToDate).format('MM/DD/yy')}</td>
                      <td>{console.log("20000000",allcustomers[0].price)}</td>
                    </tr>
                      {/* {
                      allcustomers.map(function(c){
                        return (
                          <tr>
                            <td>{console.log("In table: ", c.bookingId)}</td> 
                             <td>{c.room.roomNo}</td>
                            <td>{moment(c.bookingFromDate).format('MM/DD/yy')}</td>
                            <td>{moment(c.bookingToDate).format('MM/DD/yy')}</td>
                            <td>{c.price}</td>  
                            </tr> 
                        );
                         })} */}
                  </tbody>
                </table>
               </div>
      </div>
  );
}
export default CustomerList;