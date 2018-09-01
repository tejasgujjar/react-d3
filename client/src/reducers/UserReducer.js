// import {
//   LOGIN_USER_SUCCESS,
//   LOGIN_USER_FAILURE
//  } from '../constants/ActionConstants';

const INIT_STATE = {
    loading: false,
    graph_data:[],
    change_password: true
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GRAPH_DATA":
            return { ...state, graph_data: action.payload };
        case "GRAPH_DATA_FAILURE":
            return { ...state };
          case "PASSWORD_CHANGE":
            return { ...state, change_password: action.payload };
        default: return { ...state };
    }
}
