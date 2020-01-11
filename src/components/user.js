import React,{useEffect,useState} from 'react'
import {Navbar,Nav,Form,FormControl,Button,Alert,Row,Col, Container,Table} from 'react-bootstrap' 
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {state_to_props} from '../util/common_utils'
import Nav_bar_main from './util_components/nav_bar_main'
import {get_hero} from '../services/db_services'
import store from '../store/store'
import Create_hero from './create_hero'
import StripePayment from './util_components/stripePayment'
import CheckoutForm from './util_components/CheckoutForm'
import {Elements} from 'react-stripe-elements';






const User=(props)=>
{
  const [showCreateHero, setCreateHero] = useState(false);
   

    return(
       <div> 
    <Nav_bar_main username={props.user.username} is_search={true}/>

   
      <Elements>
<StripePayment/>
{/* <CheckoutForm/> */}
</Elements>

  
    </div>
    )
}


export default connect(state_to_props)(withRouter(User));