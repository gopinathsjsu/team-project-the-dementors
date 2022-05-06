import React, { Component } from "react";
import NavBarComponent from "../components/NavBar";
import background from "../assets/searchBg.jpeg";
import DisplayHotelDetails from "../components/DisplayHotelDetails";
import { useLocation } from "react-router-dom";
import { FaArrowsAlt } from "react-icons/fa";
//import background from "../assets/searchBg.jpeg";
import "../css/style.css";


function   BookingDetails(props){
 
    const location=useLocation()
   
    const params=location.state.state.detail
    console.log("this.props---->",params)
    const[isBreakfastChecked,setBreakfastChecked]=React.useState(false);
    const[isFitnessChecked,setFitnessChecked]=React.useState(false);
    const[isSwimmingPoolChecked,setSwimmingPoolChecked]=React.useState(false);
    const[isParkingChecked,setParkingChecked]=React.useState(false);
    const[isMealsChecked,setMealsChecked]=React.useState(false);
    const[checkedItems,setCheckedItems]=React.useState([])
    console.log("checkediTme",checkedItems)
    
    
    return(
        <div style={{height:'100vh',backgroundColor:"#D3D3D3"}}>
        <NavBarComponent/>
        
        <div style={{marginRight:'10%',marginLeft:'10%'}}>

        
        <DisplayHotelDetails  />
        <h2 style={{marginTop:10,marginBottom:10}}>Booking Details</h2>
        <div style={{backgroundColor:"whitesmoke"}}>
            <div style={{height:350,display:'flex',flexDirection:'row'}}>
                <div style={{width:'70%'}}>
                <img src={background} style={{height:'100%',width:'100%',borderRadius:5}}/>
                </div>
                <div style={{width:'40%',display:"flex",flexDirection:"column",paddingTop:15,paddingLeft:20}}>
                    <h5 style={{fontStyle:"unset",fontSize:24}}>{params.name}</h5>
                    <div style={{flexDirection:"row",display:"flex",backgroundColor:"whitesmoke",height:40}}>
                        <p style={{fontSize:18,fontWeight:'bold'}}>Check In : </p>
                        <p style={{fontSize:18}}>1</p>
                        

                    </div>
                    <div style={{flexDirection:"row",display:"flex",backgroundColor:"whitesmoke",height:40}}>
                        <p style={{fontSize:18,fontWeight:'bold'}}>Check Out: </p>
                        <p style={{fontSize:18,textAlignV:"center"}}>1</p>
                        

                    </div>
                    <div style={{flexDirection:"row",display:"flex",backgroundColor:"whitesmoke",height:40}}>
                        <p style={{fontSize:18,fontWeight:'bold'}}>Room(s) : </p>
                        <p style={{fontSize:18,textAlignV:"center"}}> {"  "+1}</p>
                        

                    </div>

                </div>


            </div>
            <div style={{paddingLeft:10,paddingTop:15}}>
                <div>
                Select Amenities

                </div>
                <div>
                <label style={{marginLeft:10}}>
        <input
          type="checkbox"
          checked={isBreakfastChecked}
          //onChange={handleChange}
          onChange={()=>{
            //setMealsChecked(!isMealsChecked)
            setBreakfastChecked(!isBreakfastChecked)
           
            var arr=checkedItems
            if(arr.includes("breakfast")){
              const idx=  arr.indexOf("breakfast")
              arr.splice(idx,1)
            }
            else{
            arr.push("breakfast")
            }

            setCheckedItems(arr)
            
          }}
        />
        Continental Breakfast
      </label>
      <label style={{marginLeft:10}}>
        <input
          type="checkbox"
          checked={isFitnessChecked}
          //onChange={handleChange}
          onChange={()=>{
            //setMealsChecked(!isMealsChecked)
            var arr=checkedItems
            setFitnessChecked(!isFitnessChecked)
            if(arr.includes("fitness")){
                const idx=  arr.indexOf("fitness")
                arr.splice(idx,1)
              }
              else{
              arr.push("fitness")
              }
           
          }}
        />
        Fitness Room
      </label>
      <label style={{marginLeft:10}}>
        <input
          type="checkbox"
          checked={isSwimmingPoolChecked}
          //onChange={handleChange}
          onChange={()=>{
            var arr=checkedItems
            //setMealsChecked(!isMealsChecked)
            setSwimmingPoolChecked(!isSwimmingPoolChecked)
            if(arr.includes("swimming")){
                const idx=  arr.indexOf("swimming")
                arr.splice(idx,1)
              }
              else{
              arr.push("swimming")
              }
          }}
        />
        Swimming Pool
      </label>
      <label style={{marginLeft:10}}>
        <input
          type="checkbox"
          checked={isParkingChecked}
          onChange={()=>{
            setParkingChecked(!isParkingChecked)
            var arr=checkedItems
            if(arr.includes("parking")){
                const idx=  arr.indexOf("parking")
                arr.splice(idx,1)
              }
              else{
              arr.push("parking")
              }
          }}
          //onChange={handleChange}
        />
        Daily Parking
      </label>
      <label style={{marginLeft:10}}>
        <input
          type="checkbox"
          checked={isMealsChecked}
          onChange={()=>{
              
            setMealsChecked(!isMealsChecked)
             var arr=checkedItems
             if(arr.includes("meals")){
                const idx=  arr.indexOf("meals")
                arr.splice(idx,1)
              }
              else{
              arr.push("meals")
              }
          }}
        />
        All meals
      </label>
      <button style={{marginLeft:'5%'}} type="button" class="btn btn-primary">Apply</button>

                </div>
               

               
            </div>
            <div className="center">
                <div style={{width:"70%",display:"flex"}}>
                <button type="button" class="btn btn-primary">Book Room(s)</button>
                </div>
                <div style={{width:"30%",display:"flex"}}>
                <p style={{fontWeight:"bold",fontSize:20}}>Total charges : </p>
            <div style={{width:5}}>

            </div>
                <p style={{fontSize:20}}>{" " +0}</p>
                </div>
            </div>

        </div>

       
        </div>
        </div>

    )
}
export default BookingDetails;