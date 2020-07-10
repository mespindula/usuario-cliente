import http from "../http-common";
import { login } from "../Auth";

const doLogin = () => {
    login();
};

const getAll = () => {
  return http.get("/user/list");
};

const get = id => {
  return http.get(`/user/${id}`);
};

const create = data => {
  return http.post("/user", data);
};

const update = (id, data) => {
  return http.put(`/user/${id}`, data);
};

const remove = id => {
  return http.delete(`/user/${id}`);
};

export default {
    doLogin,
  getAll,
  get,
  create,
  update,
  remove
};
