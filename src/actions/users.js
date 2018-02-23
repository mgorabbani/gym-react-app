import { USER_FETCHED } from "../types";
import api from "../api";
import { userLoggedIn } from "./auth";

export const userFetched = user => ({
  type: USER_FETCHED,
  user,
});

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user));
  });


export const fetchCurrentUser = () => dispatch =>
  api.user.fetchCurrentUser().then(user => dispatch(userFetched(user)));

export const addPackage = (data) => dispatch =>
  api.user.addPackage(data).then(() => dispatch(fetchCurrentUser()));

export const addTrainer = (data) => dispatch =>
  api.user.addTrainer(data).then(() => dispatch(fetchCurrentUser()));

export const deletePackage = (data) => dispatch =>
  api.user.deletePackage(data).then(() => dispatch(fetchCurrentUser()));
export const deleteTrainer = (data) => dispatch =>
  api.user.deleteTrainer(data).then(() => dispatch(fetchCurrentUser()));