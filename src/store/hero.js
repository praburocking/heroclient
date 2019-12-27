



const heroReducer=(state=[],action)=>
{
switch(action.type)
{
    case(action.type==="HERO_INIT"):
    return action.data
    
    case (action.type==="HERO_ADD"):
       return state.concat(action.data)
    default:
        return []
        
}

}


export default heroReducer;