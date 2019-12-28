import React, { useState } from "react";
import { Button, FormGroup, FormControl ,Form,Nav,Row,Col,Container} from "react-bootstrap";
import "./signup.css";
import {Public_navbar} from './nav_bar'
import {signup} from '../services/db_services'
import {withRouter} from 'react-router-dom'
import Product_info from './product_info'

const Signup=(props)=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit= async (event) =>{
    event.preventDefault();
    const user_detail={user_name:event.target.name.value,email:event.target.email.value,password:event.target.password.value};
    const res=await signup(user_detail);
    if(res.status===200)
    {   console.log("pushing you to login")
         props.history.push("/login");
    }
    console.log("response =>",res);

  }


  return (
      <div>
    <Public_navbar/>
    <Container>
      <Row>
        <Col xs={12} md={7}>
        <Product_info/>
        </Col>
        <Col xs={12} md={5}>
       <div className="Signup">
       <h2 style={{textAlign:"center"}}>SIGNUP</h2>
      <Form onSubmit={handleSubmit}>

      <FormGroup controlId="name" bssize="large">
          <Form.Label>Name</Form.Label>
          <FormControl
            autoFocus
            type="text"
            name="name"
           
          />
        </FormGroup>

        <FormGroup controlId="email" bssize="large">
          <Form.Label>Email</Form.Label>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>


        <FormGroup controlId="password" bssize="large">
          <Form.Label>Password</Form.Label>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>

      
        <Button block bssize="large" disabled={!validateForm()} type="submit">
          Signup
        </Button>
      </Form>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
  );
}

export default withRouter(Signup)