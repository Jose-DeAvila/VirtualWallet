import React from 'react';
import wallet from '../img/wallet.jpg';
import { Link } from "react-router-dom";

function SignupScreen(props){
    return(
        <div className="container">
        <div className="img">
          <img src={wallet} alt="Wallet" />
        </div>
        <div className="register">
            <Link to="/" className="back-icon">←</Link>
          <h1>Sign-Up </h1>
          <form>
            <div className="form--document">
              <label htmlFor="email">N° Document</label>
              <input type="email" id="email" name="email"></input>
            </div>
            <div className="form--name">
              <label htmlFor="password">Full name</label>
              <input type="password" id="password" name="password"></input>
            </div>
            <div className="form--email">
              <label htmlFor="password">Email</label>
              <input type="password" id="password" name="password"></input>
            </div>
            <div className="form--password">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password"></input>
            </div>
            <button type="submit" className="btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    );
}

export default SignupScreen;