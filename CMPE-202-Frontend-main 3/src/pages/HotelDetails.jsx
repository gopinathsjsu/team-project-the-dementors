import React, { Component } from "react";
import NavBarComponent from "../components/NavBar";
import background from "../assets/searchBg.jpeg";
import DisplayHotelDetails from "../components/DisplayHotelDetails";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from "moment";


// export default class HotelDetails extends Component{
//     render(){

//         console.log("this.props",this.props)
//         return(
//             <div style={{height:'100vh',backgroundColor:"#F5F5F5"}}>
//             <NavBarComponent/>
//             <h2>Select a room</h2>
//             <DisplayHotelDetails  />
//             <div style={{height:120,backgroundColor:"#1c1c1c",display:'flex',flexDirection:'column',alignItems:'center'}}>
//                 <h2>hi</h2>

//             </div>
//             </div>
//         )
//     }
// }
function HotelDetails(){
    const history=useHistory()
    const location=useLocation();
    console.log("location-->",location)
var hotelId;
    if(location.state.fromBooking){
        hotelId=location.state.hotelId

    }
    else{
     hotelId=location.state.details.hotelId;
    }
   
    const place=localStorage.getItem("location")|| "";
    const startDate=localStorage.getItem("startDate")|| "";
    const endDate=localStorage.getItem("endDate")|| "";
    const adult=localStorage.getItem("adult")|| "";
    const children=localStorage.getItem("children")|| "";
    const room=localStorage.getItem("room")|| "";
    const[data,setData]=React.useState([])
    const start=moment(startDate,'DD/MM/YYYY').format("YYYY-MM-DD");
    const end=moment(endDate,'DD/MM/YYYY').format("YYYY-MM-DD");
    console.log("START",start,startDate)
    
   
    React.useEffect(() => {
        const place=localStorage.getItem("location")|| "";
        
      const url = `http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/getHotelRooms?hotelId=${hotelId}&fromData=${start}&toDate=${end}`;
     axios.get(url, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'

        
      }}).then(res=>{
         console.log("response--->",res)
         if(res && res.data && res.data.length>0){
            //  console.log("res.data",res.data)
             setData(res.data);

         }
     }).catch(err=>{
         console.log("Err-->",err)
     })
    
    }, []);
    return(
        <div style={{height:'100vh',backgroundColor:"#F5F5F5"}}>
        <NavBarComponent/>
        
        <div style={{marginRight:'10%',marginLeft:'10%',marginTop:10}}>

        
        <DisplayHotelDetails  startDate={startDate} endDate={endDate} children={children} adult={adult} room={room}  />
        </div>
        <h2 style={{marginLeft:'5%'}}>Select a room</h2>
        {data.length>0 ?data.map(ele=>{
                return(
                    <div style={{height:120,backgroundColor:'white',borderBottomWidth:1,borderRadius:10,marginLeft:'10%',marginRight:'10%'}}>
                    <div className="subClass" style={{height:120,display:'flex',flexDirection:'row',marginTop:20,borderBottomColor:"lightgray"}}>
                        <div style={{width:"20%"}}>
                            <img src={ele.image} style={{height:'100%',width:'100%',borderRadius:5}}/>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',paddingLeft:'10%' ,justifyContent:'center',width:'60%'}}>
                                <div style={{flexDirection:"column",display:"flex"}}>
                                    <h3>{ele.roomType}</h3>

   
                               <h5>{ele.description?ele.description:""}</h5> 
                                </div>
                               
                                
                                
                                </div>
                              
                                <div style={{flexDirection:'column',display:'flex',width:'20%',justifyContent:'center',alignItems:"center"}}> 
                                    {/* <h3>From</h3> */}
                                    <div style={{fontWeight:"bold",fontSize:20}}>
                                        From
                                        </div>
                                    {/* <p>{ele.price}</p> */}
                                    <div>
                                        {ele.roomPrice+" "+"USD"}
                                        </div>
                                    <button
                                    type="button"
                                    class="btn btn-warning"
                                    onClick={()=>{
                                        console.log("ele-->",ele.hotel)
                                       history.push("/bookingdetails",{state:{detail:ele,hotelId:hotelId}})
                                        //history.push("/hotellist", {state: { detail: JSON.stringify(place) }})
                                    }}
                                    style={{}}>
                                    Select room
                                    </button>
                                    </div>
                                </div>
                               


                    
                    </div>
                )
            }):null}
        </div>

    )
}
export default HotelDetails;