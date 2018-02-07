import { MEMBER_FETCHED, ALL_MEMBERS_FETCHED } from "../types";
import api from "../api";

export const AllMembersFetched = members => ({
    type: ALL_MEMBERS_FETCHED,
    members,
});
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

export const fetchSearchResult = value => dispatch =>
    api.user.fetchSearchResult(value).then(members => dispatch(memberFetched(members)));
export const fetchSingleMemberData = value => dispatch =>
    api.user.fetchSingleMemberData(value).then(member => dispatch(memberFetched(member)))