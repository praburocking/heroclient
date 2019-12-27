import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login.js'
import Signup from './components/signup'
import Heros from './components/heros'
import {BrowserRouter as Router,Route, Link, Redirect, useHistory} from 'react-router-dom'
// import store from  './reducers/store'
import { Provider } from 'react-redux'
import Dash_board from './components/dash_board'
import {verifyAndGetToken} from './util/common_utils'



function App(props) {

  return (
  <div >
      {/* <Route exact path='/' render={()=>username?<Notes/>:<Redirect to="/login"/>}></Route> */}
      <Route exact path ="/signup" render={()=>verifyAndGetToken()?<Redirect to="/dashboard"/>:<Signup/>} />
      <Route exact path ="/login" render={()=>verifyAndGetToken()?<Redirect to="/dashboard"/>:<Login/>} />
      <Route exact path ="/dashboard" render={()=>verifyAndGetToken()?<Dash_board/>:<Redirect to="/login"/>}/>
      <Route exact path ="/heros" render={()=>verifyAndGetToken()?<Heros/>:<Redirect to="/login"/>}/>
      <Route exact path="/" render={()=>verifyAndGetToken()?<Redirect to="/dashboard"/>:<Redirect to="/login"/>}/>
      
  
  </div>

  );
}

export default App;