import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'



export const Public_navbar=(props)=>
{
return(
    <div>

<Nav className="justify-content-end "
  variant="pills"
  activeKey="/home"
  onSelect={selectedKey => console.log(`selected ${selectedKey}`)}

  varient="pills"
>
<Navbar.Brand style={{textAlign:"right"}}>Welcome to SuperHeros</Navbar.Brand>
  <Nav.Item>
 <Nav.Link as={Link} to="/login"> Login</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link as={Link} to="/signup">signup</Nav.Link> 
  </Nav.Item>

</Nav>


</div>)
}

