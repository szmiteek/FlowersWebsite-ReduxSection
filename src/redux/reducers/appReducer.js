import { ADD_EVENT, DELETE_EVENT } from "../actions/actions";

const appReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.payload];
    case DELETE_EVENT:
      return state.filter((event) => event.name !== action.name);

    default:
      return state;
  }
};

export default appReducer;
