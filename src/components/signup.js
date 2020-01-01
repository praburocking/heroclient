import React, { useState } from "react";
import { Button, FormGroup, FormControl ,Form,Nav,Row,Col,Container,Spinner} from "react-bootstrap";
import "./signup.css";
import {Public_navbar} from './nav_bar'
import {signup} from '../services/db_services'
import {withRouter} from 'react-router-dom'
import Product_info from './product_info'
import Custom_alert from './util_components/alert'
import constants from '../util/constants'

const Signup=(props)=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]=useState("")
  const [error,setError]=useState({show:false,heading:"Exception in Signing up",content:"",variant:"danger"});
  const [spinner,setSpinner]=useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0 && name.length>4 && !spinner;
  }

  const handleSubmit= async (event) =>{
    event.preventDefault();
    const user_detail={user_name:event.target.name.value,email:event.target.email.value,password:event.target.password.value};
    setSpinner(true);
    const res=await signup(user_detail);
    if(constants.errorResponse.includes( res.status))
    {  setSpinner(false);
      setError({...error,show:true,content:res.data.message});
    }
    else if(res.data)
    {
      console.log("pushing you to login")
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
       <Custom_alert error={error} setError={setError}/>
      <Form onSubmit={handleSubmit}>

      <FormGroup controlId="name" bssize="large">
          <Form.Label>Name</Form.Label>
          <FormControl
            autoFocus
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="more than 4 characters"
           
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

        {spinner && <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
      
    />}{' '}
    {spinner && "Signing you up"}
         {!spinner && "Signup"}
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