import axios from 'axios';
import utils from '../utils';

const API = '/api';

// store access_token
const token = utils.getParam('access_token');
if (token) localStorage.setItem('TOKEN', token);

function api(method, svc, data = {}) {
  const url = `${API}/${svc}`;
  // const TOKEN = localStorage.getItem('TOKEN');

  const params = {
    method,
    url,
    data: utils.snakifyKeys(data),
    headers: {
      'Content-Type': 'application/json',
      // 'Sso-Token': TOKEN,
    },
  };
  return axios(params).then((resp) => utils.camelizeKeys(resp.data));
}

export default {
  
};
