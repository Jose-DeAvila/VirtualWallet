import { USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_PAY_FAIL, USER_PAY_REQUEST, USER_PAY_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_RELOAD_FAIL, USER_RELOAD_REQUEST, USER_RELOAD_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants";

function userSigninReducer(state = {}, action) {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: "Incorrect email or password" };
      default: return state;
    }
  }
  
function userRegisterReducer(state = {}, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: "User already register" };
    default: return state;
  }
}

function userReloadReducer(state = {}, action) {
  switch (action.type) {
    case USER_RELOAD_REQUEST:
      return { loading: true };
    case USER_RELOAD_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_RELOAD_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function userPayReducer(state = {}, action){
  switch(action.type){
    case USER_PAY_REQUEST:
      return {loading: true};
    case USER_PAY_SUCCESS:
      return {loading: false, userInfo: action.payload};
    case USER_PAY_FAIL:
      return {loading: false, error: action.payload};
    default: return state;
  }
}

export {
  userSigninReducer, userRegisterReducer, userReloadReducer, userPayReducer
}