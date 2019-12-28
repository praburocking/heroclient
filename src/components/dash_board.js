import React from 'react'
import {Navbar,Nav,Form,FormControl,Button,Alert,Row,Col,NavDropdown} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import Nav_bar_main from './util_components/nav_bar_main'
import {connect} from 'react-redux'
import {state_to_props} from '../util/common_utils'



const Dash_board=(props)=>
{ 
    console.log("dash board ",props);
    return(<Nav_bar_main username={props.user.username} is_searh={false} />)
    
}

export default connect(state_to_props)(Dash_board);