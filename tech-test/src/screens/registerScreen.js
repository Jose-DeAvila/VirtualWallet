import React, { useEffect, useState } from 'react';
import wallet from '../img/wallet.jpg';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

function SignupScreen(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nDocument, setnDocument] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
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
      dispatch(register(phone, nDocument, name, email, password))
    }
    return(
        <div className="container">
        <div className="img">
          <img src={wallet} alt="Wallet" />
        </div>
        <div className="register">
            <Link to="/" className="back-icon">←</Link>
          <h1>Sign-Up </h1>
          {loading && <div>Loading...</div>}
          {error && <div> {error} </div>}
          <form onSubmit={submitHandler}>
            <div className="form--document">
              <label htmlFor="document">N° Document</label>
              <input type="document" id="document" onChange={(e) => setnDocument(e.target.value)} name="document" required={true}></input>
            </div>
            <div className="form--name">
              <label htmlFor="name">Full name</label>
              <input type="text" id="name" onChange={(e) => setName(e.target.value)} name="name" required={true}></input>
            </div>
            <div className="form--email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} name="email" required={true}></input>
            </div>
            <div className="form--password">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} name="password" required={true}></input>
            </div>
            <div className="form--phone">
              <label htmlFor="phone">Phone number:</label>
              <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)} name="phone" required={true}></input>
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