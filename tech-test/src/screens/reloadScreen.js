import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reloadBalance } from "../actions/userActions";

const restarform = () => {
  document.getElementById('form-reload').reset();
}

function ReloadScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [document, setDocument] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const [aux, setAux] = useState(true);
  const [aux2, setAux2] = useState(true);
  const [reloaded, setReloaded] = useState(false);

  useEffect(() => {
    if (reloaded) {
      restarform();
      setAux2(true);
    }
    return () => {
      //
    };
  }, [reloaded]);
  const reloadHandler = (e) => {
    e.preventDefault();
    if (document === userInfo.document && phone === userInfo.phone) {
      setAux(true);
      dispatch(
        reloadBalance(
          document,
          phone,
          parseInt(value) + parseInt(userInfo.money)
        )
      );
      setReloaded(true);
    } else {
      setAux(false);
    }
  };

  return (
    <div className="reload">
      <h1>Reload wallet</h1>
      <form onSubmit={reloadHandler} id="form-reload">
        <div className="form--document">
          <label htmlFor="document">ID</label>
          <input
            type="number"
            name="document"
            id="document"
            required={true}
            onChange={(e) => setDocument(e.target.value)}
          />
        </div>
        <div className="form--cellphone">
          <label htmlFor="number">Phone number</label>
          <input
            type="number"
            id="number"
            minLength="10"
            name="phone"
            maxLength="10"
            required={true}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form--value">
          <label htmlFor="value">Value to reload</label>
          <input
            type="number"
            id="value"
            name="value"
            required={true}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">
          Reload
        </button>
      </form>
      {aux ? <div></div> : <div className="incorrect-data">Incorrect Data</div>}
      {aux2 && <div className="correct-data">Everything is good!</div>}
    </div>
  );
}

export default ReloadScreen;
