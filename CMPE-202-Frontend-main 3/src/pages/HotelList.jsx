import React, { Component } from "react";
import NavBarComponent from "../components/NavBar";
import background from "../assets/searchBg.jpeg";
import history from '../navigation/history'
import { Button } from "bootstrap";
import {useHistory,useLocation} from 'react-router-dom'
import DisplayHotelDetails from "../components/DisplayHotelDetails";
import axios from "axios";




function HotelList(props){
    const location=useLocation()
    // console.log("location-->",localStorage.getItem("location"))
    const place=localStorage.getItem("location")|| "";
    const startDate=localStorage.getItem("startDate")|| "";
    const endDate=localStorage.getItem("endDate")|| "";
    const adult=localStorage.getItem("adult")|| "";
    const children=localStorage.getItem("children")|| "";
    const room=localStorage.getItem("room")|| "";
    
    // console.log("children-->",children)
    

    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
  
    React.useEffect(() => {
        const place=localStorage.getItem("location")|| "";
        
      const url = `http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/getHotels?city=${place}`;
     axios.get(url, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'

        
      }}).then(res=>{
         console.log("response--->",res)
         if(res && res.data && res.data.length>0){
            //  console.log("res.data",res.data)
             setData(res.data);
             res.data.map(ele=>{
                 console.log("ele.image-->",typeof(ele.image));
             })

         }
     }).catch(err=>{
         console.log("Err-->",err)
     })
    
    }, []);
    // const url1="https://cors-anywhere.herokuapp.com/http://hotelbookingaws-env.eba-mkq2bqg6.us-east-1.elasticbeanstalk.com/getHotelRooms?hotelId=1&fromData=2022-02-02&toDate=2022-02-04"
  
    // axios.get(url1, {headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json'

        
    //   }}).then(res=>{
    //      console.log("response hotel--->",res)
    //      if(res && res.data && res.data.length>0){
    //         //  console.log("res.data",res.data)
    //          setData(res.data);

    //      }
    //  }).catch(err=>{
    //      console.log("Err-->",err)
    //  })
    
    // }, []);
   
    // React.useEffect(() => {
    //   if (data.length !== 0) {
    //     setIsLoading(false);
    //   }
    //   console.log(data);
    // }, [data]);
  
    let history=useHistory()
    //console.log("data-->",data,props)
   //URL.createObjectURL("L1VzZXJzL3JhbXlhbWFoZXNoL0Rvd25sb2Fkcy9Ib3RlbHMvSHlhdHQgU2FuIEpvc2UuanBlZw==");
    
                  //setImg(imageObjectURL);
    

    return(
        <div style={{height:'100vh',backgroundColor:"#F5F5F5"}}>
        <NavBarComponent/>
        <DisplayHotelDetails place={place} startDate={startDate} endDate={endDate} children={children} adult={adult} room={room} />
        <div style={{height:50}}></div>
        <div style={{marginRight:'10%',marginLeft:'10%'}}>
            <h2>Select a hotel</h2>
            {data.length>0 ?data.map(ele=>{
                const imageObjectURL = URL.createObjectURL(new Blob([ele.image]));
                console.log("imageurl-->",imageObjectURL)
                  
                return(
                    <div style={{height:150,backgroundColor:'white',borderBottomWidth:1,borderRadius:10}}>
                    <div className="subClass" style={{height:100,display:'flex',flexDirection:'row',marginTop:20,borderBottomColor:"lightgray"}}>
                        <div style={{width:"20%"}}>
                            <img src={ele.image} style={{height:'100%',width:'100%',borderRadius:5}}/>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',paddingLeft:'10%' ,justifyContent:'center',width:"60%"}}>
                                <h4>{ele.hotelName}</h4>
                                {/* <h6>{ele.hotelType}</h6> */}
                                <p>{ele.hotelStreet+","+ele.hotelCity+" ,"+ele.hotelZipCode+", "+ele.hotelState}</p>
                                
                                
                                </div>
                                <div style={{width:'20%',justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                    <div>

                                    From
                                    </div>
                                   
                                    <div>
                                    {ele.startingPrice+" "+"USD"}
                                        </div>
                                    </div>

                                </div>
                                <div style={{height:50,display:'flex',padding:5}}>
                                    <div style={{display:'flex',flexDirection:'row',width:'70%'}}>
                                    


                                    </div>
                                    <div style={{width:"30%",alignItems:'center',flexDirection:'column',display:"flex"}}>
                                        <button onClick={()=>{
                                          //let history = useHistory();
                                          //history.push("hoteldetails");
                                          localStorage.setItem("hotelImg",ele.image);
                                          history.push('/hoteldetails',{details:ele})
                                        }} style={{backgroundColor:"#1c1c1c",padding:5,color:"white",fontWeight:"bold",borderRadius:5}}>View Details</button>
                                        </div>


                    </div>
                    </div>
                )

            }):null}

        </div>
        </div>
    
    )
}
export default HotelList;