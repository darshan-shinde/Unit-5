import {legacy_createStore as CreateStore} from "redux"

// action variables
const addCount = "add_count"
const addtodo = "AddTodo"
const tog = "Toggle"

// action creators
const addTodo = (title) => {
    return {
        type: addtodo,
        payload:{
            title: title,
            status:"false"
        }
    }
}

const reducer = (store,action) => {

    switch(action.type){
        case addCount :
            return {...store,counter : store.counter + action.payload}
        case addtodo :
            return {...store, todo :[...store.todo,action.payload]}
        case tog :
            return {...store,theme:action.payload}
        default: return store
    }
}

 const init = {
     counter : 0,
     todo : [],
     theme:"dark"
 }

const store = CreateStore(reducer,init)


console.log(store.getState())

store.dispatch({type:addCount,payload:1})

store.dispatch(addTodo("learning kungfu"))

store.dispatch({type:tog,payload:"light"})

console.log(store.getState())
