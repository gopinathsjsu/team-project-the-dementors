import React, { Component,useState,Fragment } from "react";
import NavBarComponent from "../components/NavBar";
import moment from 'moment';
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";
import axios from "axios";

function AllBookings(){
let data = JSON.parse(localStorage.getItem('allbookings'));
let cId = localStorage.getItem("custId");
const [book,setBooking]= useState(data);
const [editbookingId,setEditbookingId] = useState(null);
const [editFormData, seteditFormData] = useState({
    bookingFromDate:"",
    bookingToDate:""
});
const handleEditClick = (event , b)=>{
    event.preventDefault();
    setEditbookingId(b.bookingId);

    const formValues = {
        bookingFromDate: b.bookingFromDate,
        bookingToDate:b.bookingToDate
    }
    seteditFormData(formValues);
}

const handleEditFormChange = (event)=>{
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData}
    newFormData[fieldName] = fieldValue;
    seteditFormData(newFormData); 
}

const handleEditFormSubmit = (event)=>{
    event.preventDefault();
    const editedRow = {
        bookingFromDate : (moment(editFormData.bookingFromDate).format('YYYY-MM-DD')) +  "T01:00:00.000+00:00",
        bookingToDate: (moment(editFormData.bookingToDate).format('YYYY-MM-DD')) +  "T01:00:00.000+00:00"
    }
    const newUpdatedRow = [...book];
    for(let i =0;i< newUpdatedRow.length;i++){
        if(newUpdatedRow[i].bookingId===editbookingId){
            newUpdatedRow[i].bookingFromDate = editedRow.bookingFromDate;
            newUpdatedRow[i].bookingToDate = editedRow.bookingToDate;
            const  body = {
                "bookingFromDate": moment(newUpdatedRow[i].bookingFromDate).format('DD-MM-YYYY'),
                "bookingToDate": moment(newUpdatedRow[i].bookingToDate).format('DD-MM-YYYY'),
                "customerId": parseInt(cId),
                "hotelId": parseInt(newUpdatedRow[i].hotel.hotelId),
                "roomId": parseInt(newUpdatedRow[i].room.roomId),
                "amenities": newUpdatedRow[i].amenities
            }
            axios.put(`http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/updateBooking/${newUpdatedRow[i].bookingId}`, body)
            .then(() => console.log("Success"))
            .catch(console.log("ERRR"));
        }
    }
    console.log(newUpdatedRow);
    setBooking(newUpdatedRow);
    setEditbookingId(null);
}

const handleCancelClick = (event) =>{
    event.preventDefault();
    setEditbookingId(null);
}

const handleDeleteClick = (event,bookingId) =>{
    event.preventDefault();
    const delRow = [...book];
    for(let i =0;i<=delRow.length;i++){
        if(delRow[i].bookingId===bookingId){
            console.log("ID: ",bookingId);
            axios.delete(`http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/deleteBooking/${delRow[i].bookingId}`)
            .then(() => console.log("Sucess"))
            .catch(console.log("ERRR"));
            delRow.splice(i,1);
            break;
        }
    }
    setBooking(delRow);
}
  return(
    <div style={{height:'100vh',backgroundSize:"cover",opacity:0.8 }}>
               <NavBarComponent/>
               <div style={{justifyContent:'center',alignItems:"center",display:"flex",fontSize:20,paddingLeft:'50px',paddingRight:'50px',height:'100%'}}>
               <form onSubmit={handleEditFormSubmit}>
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
                      book.map((b)=>(
                          <Fragment>
                              {editbookingId === b.bookingId ? 
                              (<EditableRow 
                                b = {b}
                                editFormData = {editFormData}
                                handleEditFormChange = {handleEditFormChange}
                                handleCancelClick = {handleCancelClick}
                              />
                              ) : 
                              (<ReadOnlyRow 
                                b={b}
                                handleEditClick = {handleEditClick}
                                handleDeleteClick = {handleDeleteClick}
                                />
                              ) }
                          </Fragment>
                         ))}
                  </tbody>
                </table>
                </form>
               </div>
      </div>
  );
}
export default AllBookings;