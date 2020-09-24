import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import wallet from "../img/wallet.jpg";

function SigninScreen(props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      //
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  }

    return (
      <div className="container">
          
        <div className="img">
          <img src={wallet} alt="Wallet" />
        </div>
        <div className="login">
          <h1>Sign-In</h1>
          <form onSubmit={submitHandler}>
            <div className="form--email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} name="email" required={true} />
            </div>
            <div className="form--password">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} name="password" required={true} />
            </div>
            <button type="submit" className="btn-primary">
              Login
            </button>
          </form>
          <div className="signup">
            <p>New?</p>
            <Link to="/register" className="btn-signup">
              Create your account.
            </Link>
          </div>
        </div>
      </div>
    );
}

export default SigninScreen;