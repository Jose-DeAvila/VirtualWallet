import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import wallet from "../img/wallet.jpg";

function SigninScreen(props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      props.history.push("/home");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }

    return (
      <div className="container">
          
        <div className="img">
          <img src={wallet} alt="Wallet" />
        </div>
        <div className="login">
          <h1>Sign-In</h1>
          <div>
            {loading && <div>Loading...</div>}
            {error && <div> {error} </div>}
          </div>
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