import React from 'react'
import {Navbar,Nav,Form,FormControl,Button,Alert,Row,Col,NavDropdown} from 'react-bootstrap' 
import {Link,withRouter} from 'react-router-dom'
import {signout,search_hero} from '../../services/db_services'
import {deleteAuthorizationCookies} from '../../util/common_utils'
import constants from '../../util/constants'
import {connect} from 'react-redux'



const Nav_bar_main=(props)=>
{


  const search_handler=async (event)=>
  {
    event.preventDefault();
    console.log("seach ",event.target.search.value)
    const searched= await search_hero(event.target.search.value);
    if(searched.status===200)
    {
     console.log(searched.data); 
     props.heros_handler(searched.data);

  
    }
  }

    return(
 
    <div>
        <Navbar bg="primary" expand="lg" variant="dark">
      
    <Navbar.Brand href="#home">Heros</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/dashboard" >DashBoard</Nav.Link>
        <Nav.Link  as={Link} to="/heros">Heros</Nav.Link>
        
      </Nav>
    
    </Navbar.Collapse>
    
    {props.is_search && <Form inline onSubmit={search_handler}>
        <FormControl type="text" name="search" id="search" placeholder="Search Heros" className="mr-sm-2" />
        <Button variant="outline-light" type="submit">Search</Button>
      </Form> }
    
      <Navbar.Collapse className="justify-content-end">
    <Navbar.Text as={Button} onClick={()=>logout(props.history)}>
      Signed in as: <a href="#login">{props.username}</a>
      
    </Navbar.Text>
  </Navbar.Collapse>

  </Navbar>


  </div>

 )
}




const heros_handler=(heros)=>
{
    return({type:"HERO_INIT",data:heros})
}

const logout=async (history)=>
{
const response=await signout();
if(response.status===200)
{
  deleteAuthorizationCookies()
  history.push("/login");
  
}
}

export default withRouter(connect(null,{heros_handler})(Nav_bar_main));