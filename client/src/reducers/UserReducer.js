// import {
//   LOGIN_USER_SUCCESS,
//   LOGIN_USER_FAILURE
//  } from '../constants/ActionConstants';

const INIT_STATE = {
    loading: false,
    graph_data:[]
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GRAPH_DATA":
            return { ...state, graph_data: action.payload };
        case "GRAPH_DATA_FAILURE":
            return { ...state };
        default: return { ...state };
    }
}
