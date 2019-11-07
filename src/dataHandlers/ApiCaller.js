// @flow
import fetch from 'cross-fetch';
import { BASE_API_URL } from 'src/common/metaData/Constants';

const DEFAULT_CONTENT_TYPE = {
  'content-type': 'application/json',
};

export default (
  endpoint: string,
  method: string,
  header: Object = DEFAULT_CONTENT_TYPE,
  body: Object = undefined,
  hostName: string = BASE_API_URL,
) =>
  fetch(`${hostName}${endpoint}`, {
    headers: header,
    method,
    body,
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      if (response.status === 201) {
        return response.json();
      }
      return response;
    })
    .catch(() => ({
      status: false,
      message: 'Ooops network error! Check your net connection',
    }));
