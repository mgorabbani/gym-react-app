import { MEMBER_FETCHED } from "../types";

export default function members(state = {}, action = {}) {
  switch (action.type) {
    case MEMBER_FETCHED:
      return { ...action.members };
    default:
      return state;
  }
}
