import React from 'react'
import {Navbar,Nav,Form,FormControl,Button,Alert,Row,Col,NavDropdown,Modal,ModalBody,FormGroup} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import Nav_bar_main from './util_components/nav_bar_main'
import {connect} from 'react-redux'
import {state_to_props} from '../util/common_utils'
import {add_hero} from '../services/db_services'




const add_hero_state=(hero)=>
{
return ({type:"HERO_ADD",data:hero})
}



const Create_hero=(props)=>
{ 
    console.log("create_notes",props);

    const handle_hero=async (event)=>
    {
    event.preventDefault();
    let hero={
        name:event.target.name.value,
        real_name:event.target.real_name.value,
        power:event.target.power.value,
        country:event.target.country.value,
        color:event.target.color.value,
        weapon:event.target.weapons.value,
        arch_enemy:event.target.arch_enemy.value
    };
    hero=await add_hero(hero);
    console.log("add hero ",hero);
    props.add_hero_state(hero.data);
    props.onHide();
    }

    return(
 <Modal show={props.show} onHide={props.onHide}  size="lg"  aria-labelledby="contained-modal-title-vcenter"  centered  >
      <Form onSubmit={handle_hero} >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
        <div style={{alignContent:"center"}}> Create Hero</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
   

<FormGroup controlId="name" bssize="large">
    <Form.Label>Name</Form.Label>
    <FormControl  autoFocus type="text" name="name"/> </FormGroup>

  <FormGroup controlId="real_name" bssize="large">
    <Form.Label>real name</Form.Label>
    <FormControl autoFocus  type="text" name="real name" />
  </FormGroup>


  <FormGroup controlId="power" bssize="large">
    <Form.Label>power</Form.Label>
    <FormControl name="power"  type="text"  />
  </FormGroup>

  <FormGroup controlId="country" bssize="large">
    <Form.Label>Country</Form.Label>
    <FormControl name="country"  type="text" />
  </FormGroup>

  <FormGroup controlId="color" bssize="large">
    <Form.Label>Color</Form.Label>
    <FormControl name="color"  type="text" />
  </FormGroup>

  <FormGroup controlId="weapons" bssize="large">
    <Form.Label>weapons</Form.Label>
    <FormControl name="weapons"  type="text" />
  </FormGroup>

  <FormGroup controlId="arch_enemy" bssize="large">
    <Form.Label>Arch Enemy</Form.Label>
    <FormControl name="arch_enemy"  type="text" />
  </FormGroup>
 
      </Modal.Body>
      <Modal.Footer>
      <Button variant="success" type="submit" type="submit" >
        Create Hero
     </Button>
     
        <Button onClick={props.onHide} variant="danger">Close</Button>
      </Modal.Footer>
      </Form>
    </Modal>
    )
    
}

export default connect(state_to_props,{add_hero_state})(Create_hero);