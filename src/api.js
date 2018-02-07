import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/api/auth", { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post("/api/users", { user }).then(res => res.data.user),
    addMember: user =>
      axios.post("/api/members", { user }).then(res => res.data.user),
    fetchAllMembers: () =>
      axios.get("/api/members").then((res) => {
        return res.data
      }),
    fetchSearchResult: (value) =>
      axios.post("/api/members/search", { value }).then(res => res.data),
    fetchSingleMemberData: (value) =>
      axios.post(`/api/members/${value}`).then(res => res.data),
    confirm: token =>
      axios
        .post("/api/auth/confirmation", { token })
        .then(res => res.data.user),
    resetPasswordRequest: email =>
      axios.post("/api/auth/reset_password_request", { email }),
    validateToken: token => axios.post("/api/auth/validate_token", { token }),
    resetPassword: data => axios.post("/api/auth/reset_password", { data }),
    fetchCurrentUser: () =>
      axios.get("/api/users/current_user").then(res => res.data.user)
  }
};
