import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pay } from "../actions/userActions";
import emailjs from "emailjs-com";

const restarform = () => {
  document.getElementById("form-reload").reset();
};

function PayScreen(props) {
  function token() {
    return Math.random().toString(36).substr(2).substring(0, 6);
  }
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [value, setValue] = useState(0);
  const [ok, setOk] = useState(true);
  const [token1, setToken] = useState("");
  const dispatch = useDispatch();
  const [reloaded, setReloaded] = useState(false);
  const payHandler = (e) => {
    e.preventDefault();
    if (userInfo.money > value) {
      setToken(token());
      dispatch(
        pay(userInfo.document, parseInt(userInfo.money) - parseInt(value))
      );
      emailjs.send("gmail","template_react",{
        userDocument: userInfo.document,
        userName: userInfo.name,
        userToken: token1,
        userEmail: userInfo.email,
        }, "user_osE6rGzYx37FW0CFjDKF2").then((result)=> {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }, );
      setReloaded(true);
    } else {
      setOk(false);
    }
  };

  useEffect(() => {
    if (reloaded) {
      restarform();
      setOk(true);
    }
    return () => {
      //
    };
  }, [reloaded]);

  return (
    <div className="pay">
      <h1>Pay</h1>
      <form
        id="form-reload"
        target="_blank"
        action={"https://formspree.io/" + userInfo.email}
        onSubmit={payHandler}
        method="POST"
      >
        <div className="form--value">
          <label htmlFor="value">Value to pay</label>
          <input
            type="number"
            id="value"
            onChange={(e) => setValue(e.target.value)}
            required={true}
            name="value"
          />
        </div>
        <input type="hidden" value={userInfo.document} name="userDocument" />
        <input type="hidden" value={userInfo.name} name="userName" />
        <input type="hidden" value={token1} name="userToken" />
        <input type="hidden" value={userInfo.email} name="userEmail" />
        <button type="submit" className="btn-primary">
          Pay
        </button>
      </form>
      {ok ? (
        <div className="correct-data">Everything is Good!</div>
      ) : (
        <div className="incorrect-data">Error in transfer</div>
      )}
    </div>
  );
}

export default PayScreen;