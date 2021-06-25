import './App.css';
import Home from './components/Home/Home/Home';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddServices from './components/AddServices/AddServices';
import Login from './components/Login/Login/Login';
import BookService from './components/Dashboard/BookService/BookService';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import BookingList from './components/Dashboard/BookingList/BookingList';
import AddReview from './components/Dashboard/AddReview/AddReview';
import AllBookings from './components/AllBookings/AllBookings';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/addServices'>
            <AddServices></AddServices>
          </Route>
          <PrivateRoute path='/serviceCheckout/:serviceId'>
            <BookService />
          </PrivateRoute>
          <PrivateRoute path = '/bookingList'>
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path = '/addReview'>
            <AddReview />
          </PrivateRoute>
          <Route path = '/allBookings'>
            <AllBookings />
          </Route>
          <Route path = '/makeAdmin'>
            <MakeAdmin />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
