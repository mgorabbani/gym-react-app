import { MEMBER_FETCHED } from "../types";
import api from "../api";

export const memberFetched = members => ({
    type: MEMBER_FETCHED,
    members,
});

export const addMember = data => dispatch =>
    api.user.addMember(data).then(user => {
        // dispatch(userLoggedIn({ ...user, loaded: false }));
    });

export const fetchAllMembers = () => dispatch =>
    api.user.fetchAllMembers().then(members => dispatch(memberFetched(members)));