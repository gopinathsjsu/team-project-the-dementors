import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  Switch,
} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import SearchHotel from './pages/SearchHotel';
import HotelList from './pages/HotelList';
import HotelDetails from './pages/HotelDetails';
import { Component } from 'react';
import BookingDetails from './pages/BookingDetails';
import Cancel from './pages/Cancel';
import CustomerList from './pages/CustomerList';
import Profile from './pages/Profile';
import Confirm from './pages/Confirmation';
import AllBookings from './pages/AllBookings';
//function AppRoutes() {
//   const routes = useRoutes(
//     [
//       {path:'/',element:<Login/>},
//       {path:'/signup',element:<Register/>
//     },
//     {path:'/search',element:<SearchHotel/>
//     },
//     {path:'/hotellist',element:<HotelList/>
//   },
//   {path:'/hoteldetails',element:<HotelDetails/>
//   },
    
//     ]
//   )
//   return routes;
// }

function App() {
  return (
   <Router>
     {/* <AppRoutes/> */}
     <Switch>
       <Route exact path={"/"} component={Login}/>
       <Route exact path={"/signup"} component={Register}/>
       <Route exact path={"/search"} component={SearchHotel}/>
       <Route exact path={"/hotellist"} component={HotelList}/>
       <Route exact path={"/hoteldetails"} component={HotelDetails}/>
       <Route exact path={"/bookingdetails"} component={BookingDetails}/>
       <Route exact path={"/cancel"} component={Cancel}/>
       <Route exact path={"/customerlist"} component={CustomerList}/>
       <Route exact path={"/profile"} component={Profile}/>
       <Route exact path={"/confirm"} component={Confirm}/>
       <Route exact path={"/bookings"} component={AllBookings}/>
      

     </Switch>
    
   </Router>
  );
}

export default App;
