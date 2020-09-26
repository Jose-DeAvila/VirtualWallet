import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import "../homeStyle.css";
import reloadScreen from "../screens/reloadScreen";
import payScreen from "../screens/payScreen";
import CheckScreen from "./checkScreen";
import { useDispatch, useSelector } from "react-redux";
import Cookie from 'js-cookie';
import { logout } from "../actions/userActions";

let value = 0;
let takeValue;

function HomeScreen(props) {
  const myFunction = () => {
    document.querySelector(".btn-menu").classList.toggle("change");
    document.querySelector(".menu").classList.toggle("change");
  };
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    props.history.push("/");
  }
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  useEffect(() => {
    if(!userInfo){
      props.history.push("/");
    }
    return () => {
      //
    };
  }, []);

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
              userInfo && <Link to="/" className="data"> {userInfo.name} ~ {userInfo.document} </Link>
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
          <Link to="/" onClick={logoutHandler}>
            Log out
          </Link>
        </div>
        <Route path="/home/reload" component={reloadScreen} />
        <Route path="/home/pay" component={payScreen} />
        <Route path="/home/check" component={CheckScreen} />
      </main>
    </div>
  );
}
export default HomeScreen;