import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/general/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import Background from "./components/landing/Background";

//user auth components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Route exact path="/" component={Background}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Router>
    </Provider>
  );
}

export default App;
