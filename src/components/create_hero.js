import React from 'react'
import {Navbar,Nav,Form,FormControl,Button,Alert,Row,Col,NavDropdown,Modal,ModalBody,FormGroup} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import Nav_bar_main from './util_components/nav_bar_main'
import {connect} from 'react-redux'
import {state_to_props} from '../util/common_utils'



const Create_hero=(props)=>
{ 
    console.log("create_notes",props);
    return(


 <Modal show={props.show} onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered  >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="justify-content-center">
         Create Hero
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <Form >

<FormGroup controlId="name" bssize="large">
    <Form.Label>Name</Form.Label>
    <FormControl  autoFocus type="text" name="name"/> </FormGroup>

  <FormGroup controlId="email" bssize="large">
    <Form.Label>Email</Form.Label>
    <FormControl autoFocus  type="email" name="email" />
  </FormGroup>


  <FormGroup controlId="password" bssize="large">
    <Form.Label>Password</Form.Label>
    <FormControl name="password"  type="password" />
  </FormGroup>
  </Form>
 

        
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" type="submit">
        Create Hero
     </Button>
     
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
    
}

export default connect(state_to_props)(Create_hero);