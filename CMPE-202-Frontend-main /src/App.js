import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import SearchHotel from './pages/SearchHotel';
function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/',element:<Login/>},
      {path:'/signup',element:<Register/>
    },
    {path:'/search',element:<SearchHotel/>
    }
    ]
  )
  return routes;
}

function App() {
  return (
   <Router>
     <AppRoutes/>
   </Router>
  );
}

export default App;
