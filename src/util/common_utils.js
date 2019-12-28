import constants from './constants';
//import dataUtil from '../components/dataUtil'

export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    if(!exdays)
    {
        exdays=30;
    }
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

 export  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  export function deleteCookie(cname, ) {
    document.cookie = cname + "= ; expires =Thu, 01 Jan 1970 00:00:00 GMT ;path=/";
  }


  export const setAuthorizationCookies=(userData)=>
  {
      setCookie("token",userData.token,30);
      setCookie("username",userData.username,30);
      setCookie("id",userData.id);

  }

  export const deleteAuthorizationCookies=()=>
  {
      deleteCookie("token");
      deleteCookie("username");
      deleteCookie("id");

  }


   export const setAuthorizationHeader=()=>
  {
    const token="bearer "+getCookie("token");
    const header={headers:{authorization:token}};
    return header;

  }
  export const verifyAndGetToken=()=>
  {
    let token=getCookie("token");
    if(!token)
    {
      return undefined;
    }
    else
    {
      return token;
    }

  }

  export const state_to_props=(store)=>
  {
      return ({user:store.user,auth:store.auth,hero:store.hero})
  }


  export const find_user_cookie_put_to_store=(store)=>
  {
    const user_data={username:getCookie("username"),token:getCookie("token"),id:getCookie("id")};
    store.dispatch({type:"USER_INIT",data:user_data});
  }
  