import React, { Component } from "react";
import NavBarComponent from "../components/NavBar";
import background from "../assets/searchBg.jpeg";
import DisplayHotelDetails from "../components/DisplayHotelDetails";
import { useHistory, useLocation } from "react-router-dom";
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
    const reward=localStorage.getItem("rewards")||0;
    const rewardId=localStorage.getItem("rewardId")||0
    const custId=localStorage.getItem("custId")
   
    
   
    const guests=parseInt(adult)+parseInt(children);
   
    const params=location.state.state.detail;
    const hotelId=location.state.state.hotelId
    
    const link=localStorage.getItem("hotelImg");
    console.log("params-->",params,hotelId)
    
  
    const[isBreakfastChecked,setBreakfastChecked]=React.useState(false);
    const[isFitnessChecked,setFitnessChecked]=React.useState(false);
    const[isSwimmingPoolChecked,setSwimmingPoolChecked]=React.useState(false);
    const[isParkingChecked,setParkingChecked]=React.useState(false);
    const[isMealsChecked,setMealsChecked]=React.useState(false);
    const[checkedItems,setCheckedItems]=React.useState([])
    const[isRewardsChecked,setRewardsChecked]=React.useState(false)
    const[totalPrice,setTotalPrice]=React.useState(150)
    const[amenities,setAmenities]=React.useState([])
    const[amenitiesString,setAmenitiesString]=React.useState("")
    
    React.useEffect(() => {
      
      const totalPrice=parseInt(params.roomPrice)*parseInt(room)*diff;
      
      setTotalPrice(totalPrice)

      const place=localStorage.getItem("location")|| "";
      
    const url = `http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/getAmenities?hotelId=${hotelId}`;
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
    const start=moment(startDate,'DD/MM/YYYY').format("YYYY-MM-DD");
    const end=moment(endDate,"DD/MM/YYYY").format("YYYY-MM-DD");
   
    const imageLink=localStorage.getItem("hotelImg");
 
    const diff=moment(end).diff(moment(start),'days');
    const history=useHistory()
    const sd=moment(start,"YYYY-MM-DD").format("DD-MM-YYYY")
    const ed=moment(end,"YYYY-MM-DD").format("DD-MM-YYYY")
    var hotelName=params.hotel && params.hotel.hotelName?params.hotel.hotelName:localStorage.getItem("hotel_name")
    var address=params.hotel && params.hotel.hotelStreet? params.hotel.hotelStreet:""
    console.log("HOTELNAME",hotelName)
   

   
  
   
    
    
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
                <img src={link} style={{height:'100%',width:'100%',borderRadius:5}}/>
                </div>
                <div style={{width:'40%',display:"flex",flexDirection:"column",paddingTop:15,paddingLeft:20}}>
                <p style={{fontStyle:"unset",fontSize:27,color:"#830051",fontFamily:"sans-serif",fontWeight:"bold"}}>{hotelName}</p>

                <h5 style={{fontStyle:"unset",fontSize:14,color:"#d96932",fontFamily:"sans-serif",fontWeight:"bold"}}>{address + " "+","+place}</h5>

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
        setAmenitiesString(string)
       

      const url=`http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/getAmenitiesPrice?hotelId=1&roomId=${params.roomId}&fromDate=${start}&toDate=${end}&amenities=${string}`
      console.log("url-->",url)
      axios.get(url).then(Res=>{
        console.log("price",Res)
        if(Res && Res.data){
          setTotalPrice(Res.data*parseInt(room))
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
             if(totalPrice>parseInt(reward)){
              setTotalPrice(totalPrice-parseInt(reward))

             }
             else{
              setTotalPrice(parseInt(reward)-totalPrice)
             }
        
           }
           else{
             setTotalPrice(totalPrice+ parseInt(reward))
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
            <button
            onClick={()=>{
              // 
              const url="http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/saveBooking"
              const body={
                "bookingFromDate": sd,
                "bookingToDate": ed,
               
                "roomId": params.roomId,
                "price": totalPrice,
                "numOfRooms": parseInt(room),
                "customerId": custId,
                "hotelId": hotelId,
                "amenities": amenitiesString,
               
               
            }
            console.log("body-->",body)
            //var urlrewards=`http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/updateCustomerReward/${rewardId}?rewards=100&id=${rewardId}`;
            // const body={
            //   "rewards":reward,
            //   "customer_rewardId":rewardId
              
            // }
            var rewardCalculated;
            if(totalPrice>parseInt(reward)){
              rewardCalculated=0;
            }
            else{
             // rewardCalculated=parseInt(reward)-totalPrice;
             rewardCalculated=0
            }
            if(isRewardsChecked){
              var urlrewards=`http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/updateCustomerReward/${rewardId}?rewards=${rewardCalculated}&id=${rewardId}`;
              axios.delete(urlrewards).then(res=>{
                console.log("res from delete-->",res)
                axios.post(url,body).then(response=>{
              console.log("Response from post-->",response);
              history.push("/confirm",{total:totalPrice})


              }).catch(error=>{
                console.log("Error in booking")
                alert("Coudn't place booking.Please try again!!")
              })
              })
              
              .catch(err=>{
                console.log("Err in booking==>",err)
                axios.post(url,body).then(response=>{
                  console.log("Response from post-->",response);
                  history.push("/confirm",{total:totalPrice})
    
                  }).catch(error=>{
                    console.log("Error in booking")
                    alert("Coudn't place booking.Please try again!!")
                  })
                
              })

            
          }
          else{
            axios.post(url,body).then(response=>{
              console.log("Response from post-->",response);
              history.push("/confirm",{total:totalPrice})

              }).catch(error=>{
                console.log("Error in booking")
                alert("Coudn't place booking.Please try again!!")
              })

          }


            
   
         
             
                
                
               
                
              
             
           
            

            }}
            style={{fontWeight:"bold"}} type="button" class="btn btn-warning">Checkout</button>


            </div>

        </div>

       
        </div>
        </div>
        </div>
        </body>

    )
}
export default BookingDetails;