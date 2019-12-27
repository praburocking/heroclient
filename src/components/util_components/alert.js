
import React from 'react'
import {Alert} from 'react-bootstrap'

function Custom_alert(props) {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant={props.variant} onClose={() => setShow(false)} dismissible>
          <Alert.Heading>{props.heading}</Alert.Heading>
          <p>
           {props.content}
          </p>
        </Alert>
      );
    }
    
  }
  
export default Custom_alert;