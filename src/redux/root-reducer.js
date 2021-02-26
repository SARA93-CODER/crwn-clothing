import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

import { persistReducer } from "redux-persist";
//we tell the redux persist to use the locl storage as a default storage
import storage from "redux-persist/lib/storage";

//an json object that represent possible configuration for redux-persist to use
const persistConfig = {
  key: ShadowRoot,
  storage,
  //we put the reducers we want to persist inside of the whitelist array, and because the user is persisted in the firebase, so we gonna put only the cart reducer in the app.
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  reducer: directoryReducer,
});

//we make a gaint reducer that contains all the small reducers that the app needs by using combineReducers func.
export default persistReducer(persistConfig, rootReducer);
