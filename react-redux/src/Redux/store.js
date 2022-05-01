import {createStore} from "redux/store";
import {reducer} from "./reducer"


export const store = createStore(reducer)