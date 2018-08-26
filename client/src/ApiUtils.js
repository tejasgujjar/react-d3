import axios from 'axios';

// request.then(response => console.log('Response:'+response))

export function callApi(url, type='GET', dispatch={}, data = {}) {
  let request = null;
  if (type == 'GET'){
    console.log('[GET] API UTIL :'+ url);
    request = axios.get(url, {
      headers:{
        'Access-Control-Allow-Origin': '*',
      }
    });

  }
  else if (type == 'POST'){
    console.log('[POST] API UTIL :'+ url);
    request = axios.post(url, data);

  }
  else{
    console.log('Undefined url request type.')
    return;
  }
  return request;
}
