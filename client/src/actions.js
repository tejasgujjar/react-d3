import { callApi } from './ApiUtils';
const new_password_change_url = '/'

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

export const check_if_password_change_required = () => (dispatch) => {
  callApi('/has_changed_password', 'GET', dispatch)
      .then((success, data) => {
          console.log('success in getting password data');
          dispatch({ type: "PASSWORD_CHANGE", payload: success.data.change_password }); //true
      })
      .catch((error, data) => {
          console.log('Error in getting  graph data');
          // dispatch({ type: "PASSWORD_CHANGE", payload: false }); //true
      })
      .then(() => {
        console.log('Done executing axios');
        // dispatch({type: SHOW_SPINNER, payload:false});
      });
}

export const set_change_password = () => (dispatch) => {
  callApi('/change_password', 'POST', dispatch)
      .then((success, data) => {
          console.log('success in getting password data '+ success);
          dispatch({ type: "PASSWORD_CHANGE", payload: success.data.change_password }); //true
      })
      .catch((error, data) => {
          console.log('Error in getting  password data: '+ error);
          // dispatch({ type: "PASSWORD_CHANGE", payload: false }); //true
      })
      .then(() => {
        console.log('Done executing axios');
        // dispatch({type: SHOW_SPINNER, payload:false});
      });
}
