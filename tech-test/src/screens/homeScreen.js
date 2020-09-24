import React from "react";
import { Route, Link } from "react-router-dom";
import "../homeStyle.css";
import LatestScreen from '../screens/latestScreen';
import reloadScreen from '../screens/reloadScreen';
import payScreen from '../screens/payScreen';
import checkScreen from "./checkScreen";
import { useSelector } from "react-redux";

function HomeScreen(props){
    const myFunction = () => {
        document.querySelector(".btn-menu").classList.toggle("change");
        document.querySelector(".menu").classList.toggle("change");
    }

    const userSignin = useSelector(state=>state.userSignin);
    const userInfo = userSignin;

    return <div className="home">
        <script>
        </script>
        <header>
            <div className="logo">
                <div className="btn-menu" id="btn-menu" onClick={myFunction}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <img src="/img/logo-ePayCo.png" alt="logo ePayCo"/>
            </div>
            <div className="userInfo">
                {userInfo?<div> {userInfo.name}</div>: <div>No name</div>}
            </div>
        </header>
        <main>
            <div className="menu">
                <Link to="/home/latest" onClick={myFunction}>Latest transactions</Link>
                <Link to="/home/reload" onClick={myFunction}>Reload wallet</Link>
                <Link to="/home/pay" onClick={myFunction}>Pay</Link>
                <Link to="/home/check" onClick={myFunction}>Check balance</Link>
                <Link to="/" onClick={myFunction}>Log out</Link>
            </div>
            <Route path="/home/latest" component={LatestScreen} />
            <Route path="/home/reload" component={reloadScreen} />
            <Route path="/home/pay" component={payScreen} />
            <Route path="/home/check" component={checkScreen} />
        </main>
    </div>
}

export default HomeScreen;