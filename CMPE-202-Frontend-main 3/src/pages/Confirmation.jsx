import React, { Component } from "react";
import background from "../assets/searchBg.jpeg";
import NavBarComponent from "../components/NavBar";
import {useHistory} from 'react-router-dom';


function Confirm(){
    let history = useHistory();
    return(
        <div style={{height:'100vh',backgroundImage: `url(${background})` ,backgroundSize:"cover" }}>
        <NavBarComponent/>
        <div style={{justifyContent:'center',alignItems:"center",display:"flex",fontSize:40,color:'white',marginLeft:'-50px',marginTop:'200px'}}>
            Thank you for booking with us! 
            <br/>
            You have earned 10 points
        </div>
        <div style={{justifyContent:'center',alignItems:"center",display:"flex"}}>
        <button style={{width:'40%',height:40,backgroundColor:"#73a5c6",color:"white",borderRadius:7}}
        onClick={()=>{history.push('/search')}}
        >
            Continue
         </button>
            
        </div>
 </div>
    );
}
export default Confirm;
// export default class Confirm extends Component {
//     constructor(){
//         super();
//         this.state={
//             startDate:false,
//             endDate:false,
//             adult:1,
//             children:1,
//             room:1,
//             openModal:false
//         }
//     }
//     componentDidMount() {

//       }
//     render() {
//         return (
         
          
//          <div style={{height:'100vh',backgroundImage: `url(${background})` ,backgroundSize:"cover" }}>
//                <NavBarComponent/>
//                <div style={{justifyContent:'center',alignItems:"center",display:"flex",fontSize:40,color:'white',marginLeft:'-50px',marginTop:'200px'}}>
//                    Thank you for booking with us! 
//                    <br/>
//                    You have earned 10 points
//                </div>
//                <div style={{justifyContent:'center',alignItems:"center",display:"flex"}}>
//                <button style={{width:'40%',height:40,backgroundColor:"#73a5c6",color:"white",borderRadius:7}}
//                onClick={()=>{useHistory().push('/hotellist')}}
//                >
//                    Continue
//                 </button>
                   
//                </div>
//         </div>
              
               
              
         
//         );
//     }
// }