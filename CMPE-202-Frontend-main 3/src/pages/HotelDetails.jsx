import React, { Component } from "react";
import NavBarComponent from "../components/NavBar";
import background from "../assets/searchBg.jpeg";
import DisplayHotelDetails from "../components/DisplayHotelDetails";
import { useHistory } from "react-router-dom";


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
    const hotelData=[
        {
            "name":"One Bed",
            "address":"211 S. First Street San Jose, California 95113",
            "price":"105 USD",
            "id" :1
        },
        {
            "name":"Two Bed",
            "address":"211 S. First Street San Jose, California 95113",
            "price":"150 USD",
            "id":2
        },
        {
            "name":"Suite",
            "address":"211 S. First Street San Jose, California 95113",
            "price":"200 USD",
            "id":3
        },
        {
            "name":"Standard",
            "address":"211 S. First Street San Jose, California 95113",
            "price":"170 USD",
            "id":4
        },
    ]
    return(
        <div style={{height:'100vh',backgroundColor:"#F5F5F5"}}>
        <NavBarComponent/>
        <h2>Select a room</h2>
        <div style={{marginRight:'10%',marginLeft:'10%'}}>

        
        <DisplayHotelDetails  />
        </div>
        {hotelData.map(ele=>{
                return(
                    <div style={{height:120,backgroundColor:'white',borderBottomWidth:1,borderRadius:10,marginLeft:'10%',marginRight:'10%'}}>
                    <div className="subClass" style={{height:120,display:'flex',flexDirection:'row',marginTop:20,borderBottomColor:"lightgray"}}>
                        <div style={{width:"20%"}}>
                            <img src={background} style={{height:'100%',width:'100%',borderRadius:5}}/>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',paddingLeft:'10%' ,justifyContent:'center',width:'60%'}}>
                                {ele.name}
                               
                                
                                
                                </div>
                                <div style={{flexDirection:'column',display:'flex',width:'20%',justifyContent:'center',alignItems:"center"}}> 
                                    {/* <h3>From</h3> */}
                                    <div style={{fontWeight:"bold",fontSize:20}}>
                                        From
                                        </div>
                                    {/* <p>{ele.price}</p> */}
                                    <div>
                                        {ele.price}
                                        </div>
                                    <button
                                    type="button"
                                    class="btn btn-warning"
                                    onClick={()=>{
                                        history.push("/bookingdetails",{state:{detail:ele}})
                                        //history.push("/hotellist", {state: { detail: JSON.stringify(place) }})
                                    }}
                                    style={{}}>
                                    Select room
                                    </button>
                                    </div>
                                </div>
                               


                    
                    </div>
                )
            })}
        </div>

    )
}
export default HotelDetails;