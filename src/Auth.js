import http from "./http-common";

export const TOKEN_KEY = 'token';
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = () => {
  localStorage.removeItem(TOKEN_KEY);

  var data = {
    username: 'cliente',
    password: '123'
  };

  http.post("/sign-up", data).then(response => {
    localStorage.setItem(TOKEN_KEY, response.data);
  })
  .catch(e => {
    console.log(e);
  });
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};