import axios from'axios'
import {setAuthorizationHeader} from '../util/common_utils'
require('dotenv').config()

console.log("server url",process.env.SERVER_URL);

let url=process.env.SERVER_URL

let hero_url=url+"hero";
let login_url=url+"login";
let user_url=url+"users";
let logout_url=url+"logout";
let signup_url=url+"signup"

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