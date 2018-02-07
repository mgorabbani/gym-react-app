import { MEMBER_FETCHED, ALL_MEMBERS_FETCHED } from "../types";

export default function members(state = {}, action = {}) {
  switch (action.type) {
    case MEMBER_FETCHED:
      return { ...action.members };
    case ALL_MEMBERS_FETCHED:
      return { ...action.member }
    default:
      return state;
  }
}
