import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};
// we make a slice reducer that we will store it at the end in the root reducer which will be stored in turn in the store of the provider.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
