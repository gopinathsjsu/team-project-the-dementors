import React, { Component } from "react";
import NavBarComponent from "../components/NavBar";
import background from "../assets/searchBg.jpeg";
import DisplayHotelDetails from "../components/DisplayHotelDetails";
import { useLocation } from "react-router-dom";
import { FaArrowsAlt } from "react-icons/fa";
import axios  from "axios";
//import background from "../assets/searchBg.jpeg";
import "../css/style.css";
import moment from "moment";


function   BookingDetails(props){
 
    const location=useLocation()
    const place=localStorage.getItem("location")|| "";
    const startDate=localStorage.getItem("startDate")|| "";
    const endDate=localStorage.getItem("endDate")|| "";
    const adult=localStorage.getItem("adult")|| "";
    const children=localStorage.getItem("children")|| "";
    const room=localStorage.getItem("room")|| "";
   
    const guests=parseInt(adult)+parseInt(children);
   
    const params=location.state.state.detail;
    const hotelId=location.state.state.hotelId
    const diff=moment(endDate).diff(moment(startDate),'days');
  
    const[isBreakfastChecked,setBreakfastChecked]=React.useState(false);
    const[isFitnessChecked,setFitnessChecked]=React.useState(false);
    const[isSwimmingPoolChecked,setSwimmingPoolChecked]=React.useState(false);
    const[isParkingChecked,setParkingChecked]=React.useState(false);
    const[isMealsChecked,setMealsChecked]=React.useState(false);
    const[checkedItems,setCheckedItems]=React.useState([])
    const[isRewardsChecked,setRewardsChecked]=React.useState(false)
    const[totalPrice,setTotalPrice]=React.useState(150)
    const[amenities,setAmenities]=React.useState([])
    
    React.useEffect(() => {
      console.log("params-->",params)
      const totalPrice=parseInt(params.roomPrice)*3;
      console.log("totalprice-->",totalPrice)

      const place=localStorage.getItem("location")|| "";
      
    const url = `https://cors-anywhere.herokuapp.com/http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/getAmenities?hotelId=${hotelId}`;
    axios.get(url, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'

      
    }}).then(res=>{
       console.log("response--->",res)
       if(res && res.data && res.data.length>0){
         const arr=[]
          //  console.log("res.data",res.data)
          const amenities=res.data;
          amenities.forEach((ele,idx)=>{
            arr.push({
              name:ele,
              id:idx+1

            })

          })

          
          setAmenities(arr)

       }
   }).catch(err=>{
       console.log("Err-->",err)
   })
  
  }, []);
    const rewardPts=50;
  
   
    
    
    return(
      <body>
        <div style={{backgroundColor:"#D3D3D3",paddingBottom:40}}>
        <NavBarComponent/>
        
        <div style={{marginRight:'10%',marginLeft:'10%'}}>

        
        <DisplayHotelDetails  place={place} startDate={startDate} endDate={endDate} children={children} adult={adult} room={room}  />
        <h2 style={{marginTop:10,marginBottom:10,fontWeight:"bold",fontSize:29,fontFamily:"sans-serif"}}>Let's Reserve it</h2>
        <div style={{backgroundColor:"whitesmoke",borderRadius:10}}>
            <div style={{height:350,display:'flex',flexDirection:'row'}}>
                <div style={{width:'70%'}}>
                <img src={background} style={{height:'100%',width:'100%',borderRadius:5}}/>
                </div>
                <div style={{width:'40%',display:"flex",flexDirection:"column",paddingTop:15,paddingLeft:20}}>
                <h5 style={{fontStyle:"unset",fontSize:27,color:"#830051",fontFamily:"sans-serif",fontWeight:"bold"}}>{"Marriot"}</h5>

                <h5 style={{fontStyle:"unset",fontSize:14,color:"#d96932",fontFamily:"sans-serif",fontWeight:"bold"}}>{"211 S. First Street San Jose, California 95113"}</h5>

                    <div style={{flexDirection:"row",display:"flex",backgroundColor:"whitesmoke",height:40}}>
                        <p style={{fontSize:18,fontWeight:'bold'}}>Room Type : </p>
                        <p style={{fontSize:18}}>{" "+params.roomType}</p>
                        

                    </div>
                    <div style={{flexDirection:"row",display:"flex",backgroundColor:"whitesmoke",height:40}}>
                        <p style={{fontSize:18,fontWeight:'bold'}}>Check In : </p>
                        <p style={{fontSize:18}}>{startDate}</p>
                        

                    </div>
                    <div style={{flexDirection:"row",display:"flex",backgroundColor:"whitesmoke",height:40}}>
                        <p style={{fontSize:18,fontWeight:'bold'}}>Check Out : </p>
                        <p style={{fontSize:18,textAlignV:"center"}}>{endDate}</p>
                        

                    </div>
                    <div style={{flexDirection:"row",display:"flex",backgroundColor:"whitesmoke",height:40}}>
                        <p style={{fontSize:18,fontWeight:'bold'}}>Room(s) : </p>
                        <p style={{fontSize:18,textAlignV:"center"}}> {"  "+room}</p>
                        

                    </div>
                    <div style={{flexDirection:"row",display:"flex",backgroundColor:"whitesmoke",height:40}}>
                        <p style={{fontSize:18,fontWeight:'bold'}}>Guest(s) : </p>
                        <p style={{fontSize:18,textAlignV:"center"}}> {"  "+guests}</p>
                        

                    </div>

                </div>


            </div>
            <div style={{paddingLeft:10,paddingTop:15}}>
                <div style={{fontWeight:"bold",fontSize:20}}>
                Select Amenities

                </div>
                <div>
                  {amenities.length>0? amenities.map(ele=>{
                    return(
                      <label style={{marginLeft:10}}>
                        
        <input
          type="checkbox"
          checked={checkedItems.includes(ele.name)}
          //onChange={handleChange}
          onChange={()=>{
            //setMealsChecked(!isMealsChecked)
            //setBreakfastChecked(!isBreakfastChecked)
           
            var arr=[...checkedItems]
            if(arr.includes(ele.name)){
              const idx=  arr.indexOf(ele.name)
              arr.splice(idx,1)
            }
            else{
              console.log("Else-->")
            arr.push(ele.name)
            }
           
            

         // [setCheckedItems(...checkedItems,checkedItems.push(ele.id))]
          setCheckedItems(arr);
            
          }}
        />
        {ele.name}
       
      </label>

                    )
                  }):null}
                 
                
      <button 
      onClick={()=>{
        var string=''
        checkedItems.forEach((ele,idx)=>{
          if(idx!=checkedItems.length-1){
          string=string+ele+","
          }
          else{
            string=string+ele
          }
          
        })
        console.log("string-->",string)

      const url=`https://cors-anywhere.herokuapp.com/http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/getAmenitiesPrice?hotelId=1&roomId=1&fromDate=2022-02-02&toDate=2022-02-04&amenities=${string}`
      axios.get(url).then(Res=>{
        console.log("price",Res)
        if(Res && Res.data){
          setTotalPrice(Res.data)
        }
      }).catch(err=>{
        console.log("Err price",err)
      })
      }}
      style={{marginLeft:'5%'}} type="button" class="btn btn-primary">Apply</button>

                </div>
               

               
            </div>
            <div style={{backgroundColor:"lightgray",height:1,marginTop:'2%',marginBottom:"2%"}}/>
            <div style={{display:"flex"}}>
              <div style={{width:"70%"}}>
                
               
                <label style={{fontFamily:"sans-serif",fontWeight:"bold",marginLeft:10}}>
                 
        <input
          type="checkbox"
          style={{marginLeft:10,marginRight:10}}
          checked={isRewardsChecked}
          //onChange={handleChange}
          onChange={()=>{
           setRewardsChecked(!isRewardsChecked)
           if(!isRewardsChecked){
           setTotalPrice(totalPrice-rewardPts)
           }
           else{
             setTotalPrice(totalPrice+rewardPts)
           }
           
          }}
        />
         Apply Rewards 
        </label>
        <div style={{fontFamily:"sans-serif",fontWeight:"bold",marginLeft:'4%'}}>
         {"Total Price : "+totalPrice}
        </div>
       

                
              
            </div>
            <div style={{width:'30%',display:"flex",justifyContent:"flex-end",marginBottom:5,marginRight:"2%"}}>
            <button style={{fontWeight:"bold"}} type="button" class="btn btn-warning">Checkout</button>


            </div>

        </div>

       
        </div>
        </div>
        </div>
        </body>

    )
}
export default BookingDetails;