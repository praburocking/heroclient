import React from 'react'
import {Navbar,Nav,Form,FormControl,Button,Alert,Row,Col} from 'react-bootstrap' 
import {Link} from 'react-router-dom'


const Dash_board=(props)=>
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
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
      
    </Navbar.Text>
  </Navbar.Collapse>

  </Navbar>


  </div>)
}

export default Dash_board;