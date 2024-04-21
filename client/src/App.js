import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile'; 
import Books from './components/Books/Books';
import AddBook from './components/Books/AddBook';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import BookDetail from './components/Books/BookDetail';
import Users from './components/Users/Users';

const App = () => {
  return (
    <>
      <Router>
        <Header />
       <Routes>
       <Route exact path='/' Component={Home} />
        <Route exact path='/register' Component={Register} />
        <Route exact path='/login' Component={Login} />
        <Route exact path='/profile' Component={Profile} />
        <Route exact path='/books' Component={Books} />
        <Route exact path='/addbook' Component={AddBook} />
        <Route exact path='/user-update' Component={UpdateProfile} />
        <Route exact path='/book/:id' Component={BookDetail} />
        <Route exact path='/users' Component={Users} />
       </Routes>
      </Router>
    </>
  );
};

export default App;
