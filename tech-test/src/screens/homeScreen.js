import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import "../homeStyle.css";
import reloadScreen from "../screens/reloadScreen";
import payScreen from "../screens/payScreen";
import checkScreen from "./checkScreen";
import { useSelector } from "react-redux";

let value = 0;
let takeValue;

function HomeScreen(props) {
  const money = props.location.search ? Number(props.location.search.split("=")[1]) : 0;
  const myFunction = () => {
    document.querySelector(".btn-menu").classList.toggle("change");
    document.querySelector(".menu").classList.toggle("change");
  };
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  useEffect(() => {
      //
    return () => {
      //
    };
  }, []);
  takeValue = () => {
    value = money;
    console.log(value);
    return value;
  }

  takeValue();

  return (
    <div className="home">
      <header>
        <div className="logo">
          <div className="btn-menu" id="btn-menu" onClick={myFunction}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <img src="/img/logo-ePayCo.png" alt="logo ePayCo" />
        </div>
        <div className="userInfo">
          {
              userInfo && <Link to="/" className="data"> {userInfo.name} ~ {userInfo.document}</Link>
          }
        </div>
      </header>
      <main>
        <div className="menu">
          <Link to="/home/reload" onClick={myFunction}>
            Reload wallet
          </Link>
          <Link to="/home/pay" onClick={myFunction}>
            Pay
          </Link>
          <Link to="/home/check" onClick={myFunction}>
            Check balance
          </Link>
          <Link to="/" onClick={myFunction}>
            Log out
          </Link>
        </div>
        <Route path="/home/reload" component={reloadScreen} />
        <Route path="/home/pay" component={payScreen} />
        <Route path="/home/check" component={checkScreen} />
      </main>
    </div>
  );
}
export default HomeScreen;
export {takeValue};