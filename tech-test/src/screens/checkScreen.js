import React from 'react';

function checkScreen(props){
    
    return <div className="check">
        <h1>Check Balance</h1>
        <form>
            <div className="form--document">
                <label htmlFor="document">ID</label>
                <input type="number" id="document" />
            </div>
            <div className="form--cellphone">
                <label htmlFor="cellphone">Phone number</label>
                <input type="number" id="cellphone" />
            </div>
            <button type="submit" className="btn-primary">Check Balance</button>
        </form>
    </div>
}

export default checkScreen;