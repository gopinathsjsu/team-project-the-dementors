import React, { Component } from "react";
import NavBarComponent from "../components/NavBar";
import background from "../assets/searchBg.jpeg";
import history from '../navigation/history'
import { Button } from "bootstrap";
import {useHistory,useLocation} from 'react-router-dom'
import DisplayHotelDetails from "../components/DisplayHotelDetails";




function HotelList(props){
    const location=useLocation()
    console.log("location-->",localStorage.getItem("location"))
    const place=localStorage.getItem("location")|| "";
    const startDate=localStorage.getItem("startDate")|| "";
    const endDate=localStorage.getItem("endDate")|| "";
    const adult=localStorage.getItem("adult")|| "";
    const children=localStorage.getItem("children")|| "";
    const room=localStorage.getItem("room")|| "";
    console.log("children-->",children)
    

    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
  
    React.useEffect(() => {
      const url = "https://randomuser.me/api/?results=15";
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json['results']))
        .catch((error) => console.log(error));
    }, []);
  
    React.useEffect(() => {
      if (data.length !== 0) {
        setIsLoading(false);
      }
      console.log(data);
    }, [data]);
  
    let history=useHistory()
    console.log("data-->",data,props)
    const list=[{
        "name":"Marriot Hotel",
        "address":"211 S. First Street San Jose, California 95113"
    },
    {
        "name":"Marriot Hotel",
        "address":"211 S. First Street San Jose, California 95113"
    },
    {
        "name":"Marriot Hotel",
        "address":"211 S. First Street San Jose, California 95113"
    },
    {
        "name":"Marriot Hotel",
        "address":"211 S. First Street San Jose, California 95113"
    },
    {
        "name":"Marriot Hotel",
        "address":"211 S. First Street San Jose, California 95113"
    },
];

    return(
        <div style={{height:'100vh',backgroundColor:"#F5F5F5"}}>
        <NavBarComponent/>
        <DisplayHotelDetails place={place} startDate={startDate} endDate={endDate} children={children} adult={adult} room={room} />
        <div style={{height:50}}></div>
        <div style={{marginRight:'10%',marginLeft:'10%'}}>
            <h2>Select a hotel</h2>
            {list.map(ele=>{
                return(
                    <div style={{height:150,backgroundColor:'white',borderBottomWidth:1,borderRadius:10}}>
                    <div className="subClass" style={{height:100,display:'flex',flexDirection:'row',marginTop:20,borderBottomColor:"lightgray"}}>
                        <div style={{width:"20%"}}>
                            <img src={background} style={{height:'100%',width:'100%',borderRadius:5}}/>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',paddingLeft:'10%' ,justifyContent:'center'}}>
                                <h4>{ele.name}</h4>
                                <p>{ele.address}</p>
                                
                                
                                </div>
                                </div>
                                <div style={{height:50,display:'flex',padding:5}}>
                                    <div style={{display:'flex',flexDirection:'row',width:'70%'}}>
                                    


                                    </div>
                                    <div style={{width:"30%",alignItems:'center',flexDirection:'column',display:"flex"}}>
                                        <button onClick={()=>{
                                          //let history = useHistory();
                                          //history.push("hoteldetails");
                                          history.push('/hoteldetails',{title:ele.name})
                                        }} style={{backgroundColor:"#1c1c1c",padding:5,color:"white",fontWeight:"bold",borderRadius:5}}>View Details</button>
                                        </div>


                    </div>
                    </div>
                )
            })}

        </div>
        </div>
    
    )
}
export default HotelList;