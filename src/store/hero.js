



const heroReducer=(state=[],action)=>
{

    if(action.type==="HERO_INIT")
    return action.data

    else if(action.type==="HERO_ADD")
       return state.concat(action.data)
    else
        return state
        


}


export default heroReducer;