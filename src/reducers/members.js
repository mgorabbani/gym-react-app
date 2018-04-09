import { ALL_MEMBERS_FETCHED } from "../types";

export default function members(state = {}, action = {}) {
  switch (action.type) {
    case ALL_MEMBERS_FETCHED:
      return { ...action.members }
    default:
      return state;
  }
}
