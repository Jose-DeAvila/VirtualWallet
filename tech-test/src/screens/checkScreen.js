import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

const resetForm = () => {
    document.getElementById('form').reset();
}

function CheckScreen(props){

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const [document, setDocument ] = useState('');
    const [phone, setPhone] = useState('');
    const [show, setShow] = useState(false);

    const checkHandler = () => {
        if(document === userInfo.document && phone === userInfo.phone){
            setShow(true);
            resetForm();
        }
    }
    
    return <div className="check">
        <h1>Check Balance</h1>
        <form id="form">
            <div className="form--document">
                <label htmlFor="document">ID</label>
                <input type="number" id="document" onChange={(e) => setDocument(e.target.value)} required={true}/>
            </div>
            <div className="form--cellphone">
                <label htmlFor="cellphone">Phone number</label>
                <input type="number" id="cellphone" onChange={(e) => setPhone(e.target.value)} required={true}/>
            </div>
            <button type="button" onClick={checkHandler} className="btn-primary">Check Balance</button>
        </form>
        {
            show ? <div className="correct-data"><p>Balance: </p><p>${userInfo.money}</p></div> : <div className="incorrect-data">Please, complete the form to see balance</div>
        }
    </div>
}

export default CheckScreen;