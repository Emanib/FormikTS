import { combineReducers, createStore } from "redux";
import { listReducer } from "./List/reducer";

const reducers = combineReducers({
    list: listReducer,
});

export const store = createStore(reducers);

export type State = ReturnType<typeof reducers>;