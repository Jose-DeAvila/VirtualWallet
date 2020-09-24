import React from 'react';

function reloadScreen(){
    return (
      <div className="reload">
        <h1>Reload wallet</h1>
        <form>
          <div className="form--document">
            <label htmlFor="file">ID</label>
            <input type="number" id="number" />
          </div>
          <div className="form--cellphone">
            <label htmlFor="number">Phone number</label>
            <input type="number" id="number" minLength="10" maxLength="10" required={true}/>
          </div>
          <div className="form--value">
            <label htmlFor="value">Value to reload</label>
            <input type="number" id="value" />
          </div>
          <button type="submit" className="btn-primary">Reload</button>
        </form>
      </div>
    );
}

export default reloadScreen;