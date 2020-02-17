import * as types from "../Constants/ActionsTypes";
const initialSettings = {
  plansLoading: false,
  plansList: []
};

const settings = (state = initialSettings, action) => {
  switch (action.type) {
    // Fetch Plans Reducers
    case types.REQUEST_PLANS_FETCH:
      return {
        ...state,
        plansLoading: true
      };
    case types.RESPONSE_PLANS_FETCH:
      const PlansList2 = action.data;
      console.log("PlansList", PlansList2);
      return {
        ...state,
        plansLoading: false,
        plansList: PlansList2
      };

    default:
      return state;
  }
};

export default settings;
