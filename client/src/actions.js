import { callApi } from './ApiUtils';

export const get_graph_data = (user, url, history) => (dispatch) => {
    // dispatch({ type: LOGIN_USER });
    const param = {}

    callApi(url, 'GET', dispatch, param)
        .then((success, data) => {
            console.log('success in getting graph data');
            dispatch({ type: "GRAPH_DATA", payload: success.data });
        })
        .catch((error, data) => {
            console.log('Error in getting  graph data');
            dispatch({ type: "GRAPH_DATA_FAILURE" });
        })
        .then(() => {
          console.log('Done executing axios');
          // dispatch({type: SHOW_SPINNER, payload:false});
        });
}
