import CheckLogin from "./CheckLoginReducer";
import CheckDelete from "./CheckDelete";

const { combineReducers } = require("redux");

const RootReducer = combineReducers({
  CheckLogin,
  CheckDelete,
});

export default RootReducer;
