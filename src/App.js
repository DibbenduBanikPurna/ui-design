import React, { createContext } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Login/Register';

import Navbar from './Components/Navbar/Navbar';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import AdminNotice from './Components/Admin/AdminNotice/AdminNotice';

//import useFirebase from './Hooks/UseFirebase';

export const UserContext = createContext();
function App() {
 
  return (
    <div className="App">
      <Router>
         <Navbar/> 
        <Switch>
      <UserContext.Provider value="">
          <Route exact path="/">  <Login/>  </Route>
          <Route  path="/register"> <Register/> </Route>
          <Route path="/admin/news"> <AdminDashboard/> </Route>
          <Route path="/admin-notice"> <AdminNotice/> </Route>
          </UserContext.Provider>
                  </Switch>
      </Router>
      
      

    </div>
  );
}

export default App;
