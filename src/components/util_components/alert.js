
import React,{useState} from 'react'
import {Alert} from 'react-bootstrap'

function Custom_alert(props) {
   
  
    if (props.error!==undefined && props.error.show) {
      return (
        <Alert variant={props.error.variant} onClose={() => props.setError({...props.error,show:false})} dismissible>
          <Alert.Heading>{props.error.heading}</Alert.Heading>
          <p>
           {props.error.content}
          </p>
        </Alert>
      );
    }
    else
    return(<></>);
    
  }
  
export default Custom_alert;