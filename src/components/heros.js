import React,{useEffect,useState} from 'react'
import {Navbar,Nav,Form,FormControl,Button,Alert,Row,Col, Container,Table} from 'react-bootstrap' 
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {state_to_props} from '../util/common_utils'
import Nav_bar_main from './util_components/nav_bar_main'
import {get_hero} from '../services/db_services'
import store from '../store/store'
import Create_hero from './create_hero'

const   get_heros=async (hero_handler)=>
{
    let heros=await get_hero();
    if(heros.status===200)
    {
    console.log("db heros ",heros.data);
    hero_handler(heros.data);
    }
    //store.dispatch({type:"HERO_INIT",data:heros})
}

const heros_handler=(heros)=>
{
    return({type:"HERO_INIT",data:heros})
}


const Heros=(props)=>
{
  const [showCreateHero, setCreateHero] = useState(false);
    useEffect( ()=>{get_heros(props.heros_handler)},[]);
    console.log("props.hero ",props);
    return(
       <div> 
    <Nav_bar_main username={props.user.username} is_search={true}/>

    <div style={{paddingTop:"15px","padding":"20px"}} >
      <div  style={{padding:"15px"}}>
        <Button className="justify-content-end" onClick={()=>setCreateHero(true)}>+ New Hero</Button>
        </div>
    <Table hover responsive={true}>
  <thead>
   
    <tr>
    
      <th>Name</th>
      <th>Real Name</th>
      <th>Power</th>
      <th>Country</th>
      <th>Color</th>
      <th>Weapons</th>
      <th>Arch Enemy</th>
    </tr>
  </thead>
  <tbody>
   { (props.hero!==undefined||props.hero.length!==0 ) && props.hero.map((hero)=><tr key={hero.id} onClick={()=>fetch(hero.id,props.history)}><td>{hero.name}</td><td>{hero.real_name}</td><td>{hero.power}</td><td>{hero.country}</td><td>{hero.color}</td><td>{hero.weapon}</td><td>{hero.arch_enemy}</td></tr>)}
  </tbody>
</Table>
{(props.hero===undefined||props.hero.length===0 ) &&<div className="d-flex justify-content-center"><h3>Getting your heros here... </h3></div>}
<Create_hero  show={showCreateHero} onHide={() => setCreateHero(false)}/>
    </div>
    </div>
    )
}

const fetch=(id,history)=>
{
history.push("/heros/"+id);
}


export default connect(state_to_props,{heros_handler})(withRouter(Heros));