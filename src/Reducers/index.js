import { combineReducers } from "redux";

// reducers
import plansReducers from "./PlansReducers";

// root reducers
const rootReducer = combineReducers({
  plans: plansReducers
});

export default rootReducer;
