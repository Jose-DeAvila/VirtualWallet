import Cookie from 'js-cookie';
import { USER_REGISTER_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../constants/userConstants';
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
    dispatch({type: USER_REGISTER_REQUEST, payload: {document, name, email, password}});
    try{
        const {data} = await Axios.post("/api/users/register", {phone, document, name, email, password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    }
    catch(error){
        dispatch({type: USER_REGISTER_FAIL, payload: error.message});
    }
}

export {signin, register};