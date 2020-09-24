import { LATEST_LIST_FAIL, LATEST_LIST_REQUEST, LATEST_LIST_SUCCESS } from "../constants/LatestConstantes";

function latestListReducer(state={latest:[]}, action){
    switch(action.type){
        case LATEST_LIST_REQUEST:
            return{loading: true};
        case LATEST_LIST_SUCCESS:
            return {loading: false, latest: action.payload};
        case LATEST_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export {latestListReducer};