import React from 'react'
import {Navbar,Nav,Form,FormControl,Button,Alert,Row,Col,NavDropdown} from 'react-bootstrap' 
import {Link,withRouter} from 'react-router-dom'
import {signout} from '../../services/db_services'
import {deleteAuthorizationCookies} from '../../util/common_utils'
import constants from '../../util/constants'


const Nav_bar_main=(props)=>
{
    console.log("dash board");
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
    
    <Form inline>
        <FormControl type="text" placeholder="Search Heros" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    
      <Navbar.Collapse className="justify-content-end">
    <Navbar.Text as={Button} onClick={()=>logout(props.history)}>
      Signed in as: <a href="#login">{props.username}</a>
      
    </Navbar.Text>
  </Navbar.Collapse>

  </Navbar>


  </div>

 )
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

export default withRouter(Nav_bar_main);