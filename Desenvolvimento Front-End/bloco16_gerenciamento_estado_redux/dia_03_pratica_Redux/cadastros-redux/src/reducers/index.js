import { combineReducers } from "redux";
import usuarioLogin from "./reducerUserLogin";

const rootReducer = combineReducers({
  usuarioLogin,
})

export default rootReducer;