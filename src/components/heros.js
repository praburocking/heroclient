import React,{useEffect} from 'react'
import {Navbar,Nav,Form,FormControl,Button,Alert,Row,Col, Container,Table} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {state_to_props} from '../util/common_utils'
import Nav_bar_main from './util_components/nav_bar_main'
import {get_hero} from '../services/db_services'
import store from '../store/store'

const   get_heros=async (hero_handler)=>
{

    let heros=await get_hero();
    heros=heros.data
    console.log("db heros ",heros);
    hero_handler(heros);
    //store.dispatch({type:"HERO_INIT",data:heros})
}

const heros_handler=(heros)=>
{
    return({type:"HERO_INIT",data:heros})
}


const Heros=(props)=>
{
    useEffect( ()=>{get_heros(props.heros_handler)},[]);
    console.log("props.hero ",props);
    return(
       <div> 
    <Nav_bar_main username={props.user.username}/>
    <div style={{paddingTop:"15px","padding":"20px"}} >
      <div  style={{padding:"15px"}}>
        <Button className="justify-content-end">+ New Hero</Button>
        
        </div>
    <Table striped hover >
  <thead>
   
    <tr>
    
      <th>Name</th>
      <th>Real Name</th>
      <th>Power</th>
      <th>Country</th>
      <th>Color</th>
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
   { props.hero.map((hero,id)=><tr key={id}><td>{hero.name}</td><td>{hero.real_name}</td><td>{hero.power}</td><td>{hero.country}</td><td>{hero.color}</td></tr>)}
  </tbody>
</Table>

    </div>
    </div>
    )
}

export default connect(state_to_props,{heros_handler})(Heros);