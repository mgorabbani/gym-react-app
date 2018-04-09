import axios from "axios";

const axi = axios;
export default {
  user: {
    login: credentials =>
      axi.post("/api/auth", { credentials }).then(res => res.data.user),
    signup: user =>
      axi.post("/api/users", { user }).then(res => res.data.user),
    addMember: user =>
      axi.post("/api/members", { user }).then(res => res.data.user),
    fetchAllMembers: () =>
      axi.get("/api/members").then((res) => {
        console.log('api level', res.data)
        return res.data
      }),
    fetchSearchResult: (value) =>
      axi.post("/api/members/search", { value }).then(res => res.data),
    fetchSingleMemberData: (value) =>
      axi.post(`/api/members/${value}`).then(res => res.data),
    confirm: token =>
      axi
        .post("/api/auth/confirmation", { token })
        .then(res => res.data.user),
    resetPasswordRequest: email =>
      axi.post("/api/auth/reset_password_request", { email }),
    validateToken: token => axi.post("/api/auth/validate_token", { token }),
    resetPassword: data => axi.post("/api/auth/reset_password", { data }),
    fetchCurrentUser: () =>
      axi.get("/api/users/current_user").then(res => res.data.user),
    addPackage: (data) =>
      axi.post("/api/users/add_package", { data }),
    addTrainer: (data) =>
      axi.post("/api/users/add_trainer", { data }),
    deletePackage: (id) =>
      axi.post("/api/users/delete_package", { id }),
    deleteTrainer: (id) =>
      axi.post("/api/users/delete_trainer", { id }),
    addExcercise: (data) =>
      axi.post("/api/members/excercise", { data }),
    removeExcercise: (data) =>
      axi.delete("/api/members/excercise", { data }),
    addChart: (data) =>
      axi.post("/api/members/chart", { data }),
    removeChart: (data) =>
      axi.delete("/api/members/chart", { data }),
    attendance: (data) =>
      axi.post("/api/members/attendance", { data }),
  }
};
