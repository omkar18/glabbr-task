import React, { Component } from "react";
import Plans from "./Components/PlansContainer";
import "./App.css";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./Reducers/index";
import thunk from "redux-thunk";

let store = createStore(allReducers, applyMiddleware(thunk));
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <HashRouter>
            <Switch>
              <Route path="/plans" component={Plans} />
            </Switch>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
