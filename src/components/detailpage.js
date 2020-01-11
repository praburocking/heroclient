import React,{useEffect,useState} from 'react'
import {Navbar,Nav,Form,FormControl,Button,Alert,Row,Col, Container,Table, FormGroup,Toast} from 'react-bootstrap' 
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {state_to_props} from '../util/common_utils'
import Nav_bar_main from './util_components/nav_bar_main'
import {get_hero} from '../services/db_services'
import store from '../store/store'
import Create_hero from './create_hero'
import './detailpage.css'



const heroListStyle={borderRight:"2px",borderStyle: "hidden solid hidden hidden",minHeight:"100vh",maxHeight:"100vh",paddingRight:"0px"}

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



const DetailView=(props)=>
{
  const [showCreateHero, setCreateHero] = useState(false);
  const [showTab1,setTab1]=useState(true);
  const [showQuikEdit, setQuickEdit] = useState({name:false});
    useEffect( ()=>{
        if(props.hero===[]||props.hero===undefined)
         {
        get_heros(props.heros_handler)
         }
},[]);
    console.log("props detail view hero ",props);

   

let currentHero=undefined;
if(props.hero)
{
    currentHero=props.hero.find(hero => hero.id === props.currentHero)
}
console.log("currentHero",currentHero);

if(props.hero && currentHero)
{
    return(
       <div> 
    <Nav_bar_main username={props.user.username} is_search={true}/>
    <Row style={{ paddingLeft: "20px",
    borderBottomStyle: "solid",borderRight:"2px"}}>
    <div  style={{padding:"15px"}}>
        <Button className="justify-content-end" onClick={()=>setCreateHero(true)}>+ New Hero</Button>
        </div>
    </Row>
    <Row style={{ minHight: "100vh"}}>
        <Col sm={{span:3}} style={heroListStyle}>
        
        <Table hover responsive={true}>
  <thead>
   
    <tr>
    
      <th>Name</th>
      <th>Real Name</th>
      
    </tr>
  </thead>
  <tbody>
   { (props.hero!==undefined||props.hero.length!==0 ) && props.hero.map((hero)=><tr key={hero.id} onClick={()=>fetch(hero.id,props.history)}><td>{hero.name}</td><td>{hero.real_name}</td></tr>)}
  </tbody>
</Table>
        
        </Col>
        <Col style={{background:currentHero.color}}> 
       

        <div className="container emp-profile" >
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="/batman-512.png" width="275" height="183" alt="heros"/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h4>
                                        {currentHero.name}
                                    </h4>
                                    <h6>
                                       {currentHero.real_name}
                                    </h6>
                                    <p className="proile-rating">power : <span>{currentHero.power}</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" onClick={()=>setTab1(true)} role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" onClick={()=>setTab1(false)} role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                          { showTab1 && <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hero's Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentHero.id}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Country</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentHero.country}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Color</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentHero.color}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Arch-Enemy</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentHero.arch_enemy}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Weapons</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentHero.weapon}</p>
                                            </div>
                                        </div>
                            </div>}
                            {/* { !showTab1 &&
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                       
                                <Row>
                                    <Form>
                                        <FormGroup>
                                            <Form.label>story</Form.label>
                                            <FormControl type="textarea" rows="3"/>
                                        </FormGroup>
                                    <Button type="submit" variant="success">Add Story</Button>
                                    </Form></Row>     



                            </div>} */}
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    </Col>
    </Row>
    <Create_hero  show={showCreateHero} onHide={() => setCreateHero(false)}/>
    </div>
    )
                        }
                        else
                        {
                           return( <Container>Fetching your heros...</Container>)
                        }
}

const fetch=(id,history)=>
{
history.push(id);
}


export default connect(state_to_props,{heros_handler})(withRouter(DetailView));