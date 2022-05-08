import React, { Component,useState } from "react";
import NavBarComponent from "../components/NavBar";
import data from "./mock-data.json";

function AllBookings(){
const [book,setBook]= useState(data);
  return(
    <div style={{height:'100vh',backgroundSize:"cover",opacity:0.8 }}>
               <NavBarComponent/>
               <div style={{justifyContent:'center',alignItems:"center",display:"flex",fontSize:20,paddingLeft:'50px',paddingRight:'50px',height:'100%'}}>
               <table style={{border:'1px solid black'}}>
                  <thead>
                    <tr>
                      <th>Hotel Name</th>
                      <th>Hotel Room</th>
                      <th>Check in Date</th>
                      <th>Check out Date</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                      book.customer.booking.map(function(b){
                        return (
                            <tr key={b.bookingId}>
                            <td>{b.hotel.hotelName}</td>
                            <td>{b.room.roomNo}</td>
                            <td>{b.bookingFromDate}</td>
                            <td >{b.bookingToDate}</td>
                            <td >{b.room.roomPrice}</td>
                            </tr>
                        );
                         })}
                  </tbody>
                </table>
               </div>
      </div>
  );
}
export default AllBookings;