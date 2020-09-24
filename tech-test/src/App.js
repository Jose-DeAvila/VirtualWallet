import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SigninScreen from "./screens/loginScreen";
import SignupScreen from "./screens/registerScreen";
import HomeScreen from "./screens/homeScreen";
import "./normalize.css";
import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact={true} component={SigninScreen} />
        <Route path="/register" component={SignupScreen} />
        <Route path="/home" component={HomeScreen}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
