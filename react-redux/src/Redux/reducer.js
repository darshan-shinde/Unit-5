// import {addCounter,subCounter} from './action'
import {add,minus} from './actiontypes'

const initialState = {
    counter : 1,
}


const reducer = (state = initialState,{type,payload}) => {
    switch(type){
       case add : {
         return {...state,counter:state.counter+payload}
       }
       case minus : {
        return {...state,counter:state.counter-payload}
      }
       default: return state
    }
}

export {reducer,initialState}