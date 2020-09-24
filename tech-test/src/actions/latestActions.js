import axios from 'axios';
const { LATEST_LIST_REQUEST, LATEST_LIST_SUCCESS, LATEST_LIST_FAIL } = require("../constants/LatestConstantes")

const listLatest = () => async (dispatch) => {
    try{
        dispatch({type: LATEST_LIST_REQUEST});
        const {data} = await axios.get("/api/latest");
        dispatch({type: LATEST_LIST_SUCCESS, payload: data});
    }
    catch(error){
        dispatch({type: LATEST_LIST_FAIL, payload: error.message});
    }
}

export {listLatest};