const authReducer=(state=[],action)=>
{
    switch(action.type)
    {
        case(action.type==="AUTH_INIT"):
        return action.data
        default:
            return state;
    }
}


export default authReducer;