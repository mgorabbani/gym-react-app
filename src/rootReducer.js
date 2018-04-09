import { combineReducers } from "redux";

import user from "./reducers/user";
import characters from "./reducers/characters";
import locale from "./reducers/locale";
import members from "./reducers/members"
import member from "./reducers/member"
export default combineReducers({
  user,
  characters,
  locale,
  members,
  member
});
