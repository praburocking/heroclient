const userReducer=(state=[],action)=>
{

        if(action.type==="USER_INIT")
        {
        console.log("action",action);
        return action.data
        }
        else{
            return state
        }
    
}


export default userReducer;