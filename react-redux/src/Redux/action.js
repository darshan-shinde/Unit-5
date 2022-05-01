import {add,minus} from "./actiontypes"
const addCounter = (payload) => {
 
    return {
        type: add,
        payload
    }
}

const subCounter = (payload) => {
 
    return {
        type: minus,
        payload
    }
}

export {addCounter , subCounter}
