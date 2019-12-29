import React from 'react'
import {Navbar,Nav,Form,FormControl,Button,Alert,Row,Col,NavDropdown} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import Nav_bar_main from './util_components/nav_bar_main'
import {connect} from 'react-redux'
import {state_to_props} from '../util/common_utils'



const Dash_board=(props)=>
{ 
    console.log("dash board ",props);
    return(
    <div>
    <Nav_bar_main username={props.user.username} is_searh={false} />
<div className="d-flex justify-content-center" sytle={{alignContent:"center"}}>
   
    <h1  style={{padding:"25px"}}>DashBoard is under construction, please use Heros Tab </h1>
   
</div>
<div className="d-flex justify-content-center">
  
    <img
        src="batman-512.png"
        width="300"
        height="300"
      
        alt="React Bootstrap logo"
      />

      </div>
    </div>
    )
    
}

export default connect(state_to_props)(Dash_board);