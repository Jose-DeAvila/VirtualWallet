import React from 'react';

function payScreen(props){
    return <div className="pay">
        <h1>Pay</h1>
        <form>
            <div className="form--value">
                <label htmlFor="value">Value to pay</label>
                <input type="number" id="value" required={true} name="value" />
            </div>
            <button type="submit" className="btn-primary">Pay</button>
        </form>
    </div>
}

export default payScreen;