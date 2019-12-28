import {createStore,combineReducers} from 'redux'
import heroReducer from './hero'
import userReducer from './user'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'


const combine_reducer=combineReducers({

    hero:heroReducer,
    user:userReducer,
})


const store=createStore(combine_reducer,applyMiddleware(thunk));
export default store; 