import React, { useState } from "react";
import { Button, FormGroup, FormControl ,Form,Media,Container,Row,Col} from "react-bootstrap";
import "./login.css";
import {Public_navbar} from './nav_bar'
import {connect} from 'react-redux'
import {login} from '../services/db_services'
import {setAuthorizationCookies} from '../util/common_utils'
import {withRouter} from 'react-router-dom'
import Product_info from './product_info'




const Login=(props)=> {
  const [user_name, set_user_name] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return user_name.length > 0 && password.length > 0;
  }
  console.log("user",props.user);
  async function handleSubmit(event) {
    event.preventDefault();
    const res=await login({user_name:event.target.user_name.value,password:event.target.password.value})
        console.log("response",res);
        setAuthorizationCookies(res.data)
        props.login_handler(res.data);
        props.history.push("/")
        console.log("user",props.user);
 
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
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="user_name" bssize="large">
          <Form.Label>User ID</Form.Label>
          <FormControl
            autoFocus
            type="text"
            value={user_name}
            name="user_name"
            onChange={e => set_user_name(e.target.value)}
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
          Login
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

//  const login_handler = async (login_data) => {
//     const loggedin_data = await login(login_data)
//   return (dispatch) => {
//     console.log("authorization data",loggedin_data);
//     setAuthorizationCookies(loggedin_data)
//     dispatch({
//       type: 'USER_INIT',
//       data: login_data,
//     })
//   }
// }

const login_handler=(user_data)=>
{
    return({type:"USER_INIT",data:user_data})
}

export default withRouter(connect(state_to_props,{login_handler})(Login))