import * as types from "../Constants/ActionsTypes";
import axios from "axios";

// fetch all plans list
export function fetchPlansList(params = {}) {
  console.log("params", params);
  return dispatch => {
    dispatch({ type: types.REQUEST_PLANS_FETCH, data: {} });
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };
    axios
      .get("http://www.mocky.io/v2/5e3156863200007200888450", config)
      .then(result => {
        const data = result.data;
        console.log("plansActions: fetch: fetch plans result success: ", data);
        dispatch({
          type: types.RESPONSE_PLANS_FETCH,
          data: { error: false, data, remember: params.remember }
        });
        return data;
      })
      .catch(error => {
        let data = { error: true };
        try {
          data["errors"] = error.response.data.errors;
        } catch (ex) {
          data["errors"] = [
            {
              param: "Network Error",
              msg:
                "Unable to connect. Please ensure your network is connected properly."
            }
          ];
        }
        dispatch({ type: types.RESPONSE_PLANS_FETCH, data: {} });
        return data;
      });
  };
}
