import axios from 'axios';
import { LATEST_LIST_FAIL, LATEST_LIST_REQUEST, LATEST_LIST_SUCCESS } from '../constants/latestConstants';

const listLatest = () => async (dispatch) => {
    try{
      dispatch({ type: LATEST_LIST_REQUEST });
      const { data } = await axios.get("/api/latest");
      dispatch({ type: LATEST_LIST_SUCCESS, payload: data });
    }
    catch(error){
        dispatch({type: LATEST_LIST_FAIL, payload: error.message});
    }
}

export {listLatest};