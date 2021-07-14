import axios from "axios";

export const GET_DATA = "GET_DATA";

export function getText(text) {
  return function (dispach) {
    return axios.get(`http://localhost:3001/iecho?text=${text}`).then((response) => {
      dispach({
        type: GET_DATA,
        payload: response.data,
      });
    });
  };
}