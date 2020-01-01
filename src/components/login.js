import React, { useState } from "react";
import { Button, FormGroup, FormControl ,Form,Media,Container,Row,Col,Spinner} from "react-bootstrap";
import "./login.css";
import {Public_navbar} from './nav_bar'
import {connect} from 'react-redux'
import {login} from '../services/db_services'
import {setAuthorizationCookies} from '../util/common_utils'
import {withRouter} from 'react-router-dom'
import Product_info from './product_info'
import constants from '../util/constants'
import Custom_alert from './util_components/alert'



const Login=(props)=> {
  const [user_name, set_user_name] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState({show:false,heading:"invalid Credentials",content:"please retry with proper Username/Password",variant:"danger"});
  const [spinner,setSpinner]=useState(false);

  function validateForm() {
    return user_name.length > 0 && password.length > 0 && !spinner;

  }
  console.log("user",props.user);
  async function handleSubmit(event) {
    event.preventDefault();

    setSpinner(true);
    const res=await login({user_name:event.target.user_name.value,password:event.target.password.value})
        console.log("response",res);
        if(res && constants.errorResponse.includes(res.status))
        {
          if(res.status===401)
          {
            console.log("error");
         setError({...error,show:true})
         setSpinner(false);
          }
          else
          {
            setError(
            {show:true,
            heading:res.data.message,
            content:""});
            setSpinner(false);
          }
        }
        else if(res)
        {
        setAuthorizationCookies(res.data)
        props.login_handler(res.data);
        props.history.push("/")
        console.log("user",props.user);
        }
 
  }
  return (
      <div>
    <Public_navbar/>
    <Container >
      <Row>
        <Col xs={12} md={7}>
    <Product_info />
</Col>
<Col xs={12} md={{offset:"0"}}>
       <div className="Login">
       <h2 style={{textAlign:"center"}}>LOGIN</h2>

       <Custom_alert  error={error} setError={setError}/>
       {console.log("error in jsx",error)}
      <Form onSubmit={handleSubmit} noValidate validated={false}>
        <FormGroup controlId="user_name" bssize="large">
          <Form.Label>User ID</Form.Label>
          <FormControl
            autoFocus
            type="text"
            value={user_name}
            name="user_name"
            required
            onChange={e => set_user_name(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            please enter the user ID
          </Form.Control.Feedback>
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <Form.Label>Password</Form.Label>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            required
          />
          <Form.Control.Feedback type="invalid">
            please enter the password
          </Form.Control.Feedback>
        </FormGroup>
        <Button block bssize="large" disabled={ !validateForm() } type="submit" >
    {spinner && <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
      
    />}{' '}
    {spinner && "Logging You In"}
        {!spinner &&"Login"}
        </Button>
      </Form>
    </div>
    </Col>
</Row>
    </Container>
    </div>
  );
}



const state_to_props=(store)=>
{
    return ({user:store.user,auth:store.auth,hero:store.hero})
}

const login_handler=(user_data)=>
{
    return({type:"USER_INIT",data:user_data})
}

export default withRouter(connect(state_to_props,{login_handler})(Login))