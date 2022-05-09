import React, { Component } from "react";
import NavBarComponent from "../components/NavBar";
import axios from 'axios';

function CustomerList(){
  return(
    <div style={{height:'100vh',backgroundSize:"cover",opacity:0.8 }}>
               <NavBarComponent/>
               <div style={{justifyContent:'center',alignItems:"center",display:"flex",fontSize:20,paddingLeft:'50px',paddingRight:'50px',height:'100%'}}>
               <table style={{border:'1px solid black'}}>
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                      <th>Customer Room</th>
                      <th>Check in Date</th>
                      <th>Check out Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Test</td>
                      <td>503</td>
                      <td>1 July 2022</td>
                      <td>2 July 2022</td>
                    </tr>
                  </tbody>
                </table>
               </div>
      </div>
  );
}
export default CustomerList;
// export default class Cancel extends Component {
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
//         //const axios = require("axios");

//         //const axios = require("axios");

//         const options = {
//           method: 'GET',
//           url: 'https://free-geo-ip.p.rapidapi.com/xml/%7Bip-or-hostname%7D',
//           headers: {
//             'X-RapidAPI-Host': 'free-geo-ip.p.rapidapi.com',
//             'X-RapidAPI-Key': '75faad3b51msh23295450199a068p1bcd7cjsn4a316d9d5c85'
//           }
//         };
        
//         axios.request(options).then(function (response) {
//             console.log(response.data);
//         }).catch(function (error) {
//             console.error(error);
//         });

        


//         // const app = this;
//         // function initAutocomplete() {
//         //   var input = document.getElementById("pac-input");
//         //   var searchBox = new window.google.maps.places.SearchBox(input);
//         //   searchBox.addListener("places_changed", function() {
//         //       console.log("addlistener-->",document.getElementById("pac-input").value)
//         //     //app.setState({ location: document.getElementById("pac-input").value });
//         //   });
//         // }
//         // initAutocomplete();
//       }
//     render() {
//         return ( 
//          <div style={{height:'100vh',backgroundSize:"cover",opacity:0.8 }}>
//                <NavBarComponent/>
//                <div style={{justifyContent:'center',alignItems:"center",display:"flex",fontSize:20,paddingLeft:'50px',paddingRight:'50px',height:'100%'}}>
//                <table style={{border:'1px solid black'}}>
//                   <thead>
//                     <tr>
//                       <th>Customer Name</th>
//                       <th>Customer Room</th>
//                       <th>Check in Date</th>
//                       <th>Check out Date</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Test</td>
//                       <td>503</td>
//                       <td>1 July 2022</td>
//                       <td>2 July 2022</td>
//                     </tr>
//                   </tbody>
//                 </table>
//                </div>
//       </div>
//         );
//     }
// }