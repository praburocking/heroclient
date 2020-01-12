import React from 'react';
import {CardElement} from 'react-stripe-elements';
import {Modal,Button,Form, FormControl,Row,Col} from 'react-bootstrap'
import {add_payment} from '../../services/db_services'
import constants from '../../util/constants'
import {connect} from 'react-redux'
import {state_to_props} from '../../util/common_utils'



  const StripeCard =(props)=> {


const handlePay=async (event)=>
{
    event.preventDefault();
    const cardElement = props.elements.getElement('card');
    console.log("cardElement",cardElement);

    const response=await add_payment();
    if(!constants.errorResponse.includes(response))
    {
    console.log("response data",response)   
    props.stripe.handleCardPayment(response.data.client_secret).then((paymentResponse)=>{console.log("payment response",paymentResponse)}).catch(exp=>{console.log("Exception ",exp)});
    props.onHide()
    }
}


    return (


       
      <Modal show={props.show} onHide={props.onHide}  size="lg"  aria-labelledby="contained-modal-title-vcenter"  centered >
          <Form onSubmit={handlePay}> 
<Modal.Header>Payment</Modal.Header>
<Modal.Body>
<Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Name
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue={props.user.username} />
    </Col>
  </Form.Group>
        <CardElement style={{base: {fontSize: '18px'}}} />
        </Modal.Body>
        <Modal.Footer><Button variant="success" type="submit" >pay</Button></Modal.Footer>
        </Form>
        </Modal>
       
      
    );
  }


export default connect(state_to_props)(StripeCard);