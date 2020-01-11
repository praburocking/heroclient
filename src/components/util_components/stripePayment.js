import React,{useState} from 'react';
import {injectStripe,CardElement} from 'react-stripe-elements';
import StripeCard from './stripeCard'
import {Button} from 'react-bootstrap'
import {add_payment} from '../../services/db_services'
import constants from '../../util/constants'
const StripePayment=(props)=>
{
const [isClicked,setClick]=useState(false)
const [clientKey,setClientKey]=useState('');


const handlePay=async()=>{

const cardElement = props.elements.getElement('card');
console.log("cardElement",cardElement);


const response=await add_payment();
    if(!constants.errorResponse.includes(response))
    {
    console.log("response data",response)   
    setClientKey(response.data.client_secret); 

    setClick(true)
    }

props.stripe.handleCardPayment(response.data.client_secret).then((paymentResponse)=>{console.log("payment response",paymentResponse)}).catch(exp=>{console.log("Exception ",exp)});
      
      setClick(false);
    }



    // const getPaymentDetails=async(events)=>
    // {
    //     const response=await add_payment();
    // if(!constants.errorResponse.includes(response))
    // {
    // console.log("response data",response)   
    // setClientKey(response.data.client_secret); 

    // setClick(true)
    // }
    // else
    // {
    // console.log("exception occured")
    // }   
    // }


    return(
<div style={{padding:"15px"}} >
<Button variant="primary" onClick={()=>setClick(true)}>pay</Button>
<StripeCard show={isClicked} handlePay={handlePay} onHide={()=>setClick(false)} clientKey={clientKey} stripe={props.stripe} elements={props.elements}/>
</div>
  )
}

export default injectStripe(StripePayment)