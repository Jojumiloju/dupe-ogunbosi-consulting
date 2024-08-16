import { createStore, combineReducers, applyMiddleware } from "redux";

const mathReducer = (state = {
    result: 1,
    lastValues: [],
}, action) => {
  switch (action.type) {
    case "ADD":
        state = {
        ...state,
        result : state.result + action.payload,
        lastValues : [...state.lastValues, action.payload]
        }
        break;
    case "SUBTRACT":
        state = {
        ...state,
        result : state.result + action.payload,
        lastValues : [...state.lastValues, action.payload]
        }
        break;
  }
  return state;
};

const userReducer = (state = {
    username: '',
    age: 0,
}, action) => {
  switch (action.type) {
    case "SET_NAME":
        state = {
        ...state,
        username: action.payload
        }
        break;
    case "SET_AGE":
        state = {
        ...state,
        age: action.payload
        }
        break;
  }
  return state;
};

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
}

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLogger));

store.subscribe(() => {
    console.log("Store updated!", store.getState());
})

store.dispatch({
    type: "ADD",
    payload: 1
})

store.dispatch({
    type: "SUBTRACT",
    payload:5
})

store.dispatch({
    type: "ADD",
    payload: 100
})
store.dispatch({
    type: "SET_NAME",
    payload: "100"
})
store.dispatch({
    type: "SET_AGE",
    payload: 100,
})
