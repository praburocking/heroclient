import React, { useState } from "react";
import { Button, FormGroup, FormControl ,Form,Media,Container,Row,Col} from "react-bootstrap";

const Product_info=(props)=>
{
    return(
        <Media style={{paddingTop:"100px"}}>
  <img
    width={125}
    height={125}
    className="mr-3"
    src="batman-512.png"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>Meet your Heros</h5>
    <p>
    Come and Create your heros with us, you can add new heros, edit them, give power to them, create an arch enemy, view their stats on dashboard and much more...
    </p>
  </Media.Body>
</Media>
    )
}


export default Product_info
