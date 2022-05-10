import React, { Component,useState,Fragment } from "react";
import NavBarComponent from "../components/NavBar";
// import data from "./allbookings-data.json";
import moment from 'moment';
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";

function AllBookings(){
let data = JSON.parse(localStorage.getItem('allbookings'));
console.log("1233456567",data);
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
        bookingFromDate : (moment(editFormData.bookingFromDate).format('YYYY-MM-DD')) +  "T00:00:00.000+00:00",
        bookingToDate: (moment(editFormData.bookingToDate).format('YYYY-MM-DD')) +  "T00:00:00.000+00:00"
    }
    const newUpdatedRow = [...book];
    // let customerId = 0, hotelId = 0,amenities="",roomId=0,price=0,numOfRooms=0;
    for(let i =0;i< newUpdatedRow.length;i++){
        if(newUpdatedRow[i].bookingId===editbookingId){
            newUpdatedRow[i].bookingFromDate = editedRow.bookingFromDate;
            newUpdatedRow[i].bookingToDate = editedRow.bookingToDate;
            // newUpdatedRow[i].amenities = 
        }
    }
    console.log(newUpdatedRow);
    setBooking(newUpdatedRow);
    setEditbookingId(null);
    // React.useEffect(() => {
    //     const requestOptions = {
    //                 method: 'PUT',
    //                 headers: { 'Content-Type': 'application/json' },
    //                 body: JSON.stringify({
    //                     "bookingFromDate": newUpdatedRow[i],
    //                     "bookingToDate": "13-05-2022",
    //                     "customerId": 2,
    //                     "hotelId": 1,
    //                     "amenities": "Continental Breakfast,Jacuzzi",
    //                     "roomId": 3,
    //                     "price": 310,
    //                     "numOfRooms": 1
    //                 })
    //             };
    //             fetch('http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/updateBooking/10', requestOptions)
    //         .then(response => response.json())
    //         .then(data => setPostId(data.id));
    // })
    //     // POST request using fetch inside useEffect React hook
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    //     };
    //     fetch('https://reqres.in/api/posts', requestOptions)
    //         .then(response => response.json())
    //         .then(data => setPostId(data.id));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
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