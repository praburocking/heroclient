import axios from'axios'
import {setAuthorizationHeader} from '../util/common_utils'
require('dotenv').config()

console.log("server url",process.env);

let url=process.env.NODE_ENV==="development"?process.env.REACT_APP_DEVELOPMENT_SERVER_URL:process.env.REACT_APP_PRODUCTION_SERVER_URL;
//url="http://localhost:3001/api/"
//url="https://prabuheros-server.herokuapp.com/api/"

let hero_url=url+"hero";
let login_url=url+"login";
let user_url=url+"users";
let logout_url=url+"logout";
let signup_url=url+"signup"
let payment_url=url+"pay"

export const signup=(userData)=>
{
return axios.post(signup_url,userData).then(response=>response).catch((error)=>error.response);
}

export const signout=()=>
{
return axios.post(logout_url,{signout:true},setAuthorizationHeader()).then(response=>response).catch((error)=>error.response);
}


export const login=(loginData)=>
{   console.log("loginData ",loginData);
    return axios.post(login_url,loginData).then(response=>response).catch(error=>error.response);
}

export const get_hero=()=>
{
return axios.get(hero_url,setAuthorizationHeader()).then(response=>response).catch((error)=>error.response);
}

export const search_hero=(search)=>
{
return axios.get(hero_url+"/search?search_term="+search,setAuthorizationHeader()).then(response=>response).catch((error)=>error.response);
}

export const add_hero=(hero)=>
{
return axios.post(hero_url,hero,setAuthorizationHeader()).then(response=>response).catch((error)=>error.response);
}

export const add_payment=()=>
{
return axios.post(payment_url,null,setAuthorizationHeader()).then(response=>response).catch((error)=>error.response);
}
