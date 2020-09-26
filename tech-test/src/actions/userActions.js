import Cookie from 'js-cookie';
import { USER_REGISTER_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_LOGOUT } from '../constants/userConstants';
import {USER_RELOAD_REQUEST, USER_RELOAD_SUCCESS, USER_RELOAD_FAIL, USER_PAY_REQUEST, USER_PAY_SUCCESS, USER_PAY_FAIL} from '../constants/userConstants';
import Axios from 'axios';

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
      const { data } = await Axios.post("/api/users/signin", { email, password });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message});
    }
}

const register = (phone, document, name, email, password) => async (dispatch) => {
    dispatch({type: USER_REGISTER_REQUEST, payload: {phone, document, name, email, password}});
    try{
        const {data} = await Axios.post("/api/users/register", {phone, document, name, email, password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    }
    catch(error){
        dispatch({type: USER_REGISTER_FAIL, payload: error.message});
    }
}

const reloadBalance = (document, phone, value) => async (dispatch) => {
  dispatch({type: USER_RELOAD_REQUEST, payload: {document, phone, value}});
  try{
    const {data} = await Axios.post("/api/users/reload", {document, phone, value});
    dispatch({type: USER_RELOAD_SUCCESS, payload: data});
    Cookie.set('userInfo', JSON.stringify(data));
  }
  catch(error){
    dispatch({type: USER_RELOAD_FAIL, payload: error.message});
  }
}

const pay = (document, value) => async (dispatch) => {
  dispatch({type: USER_PAY_REQUEST, payload: {document, value}});
  try{
    const {data} = await Axios.post("/api/users/pay", {document, value});
    dispatch({type: USER_PAY_SUCCESS, payload: data});
    Cookie.set('userInfo', JSON.stringify(data));
  }
  catch(error){
    dispatch({type: USER_PAY_FAIL, payload: error.message});
  }
}

const logout = () => (dispatch) =>{
  Cookie.remove("userInfo");
  dispatch({type: USER_LOGOUT});
}

export {signin, register, reloadBalance, pay, logout};