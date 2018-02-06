import { MEMBER_FETCHED } from "../types";

export default function members(state = {}, action = {}) {
  switch (action.type) {
    case MEMBER_FETCHED:
      return { ...state, ...action.members, };
    default:
      return state;
  }
}
