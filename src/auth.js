import { baseURL } from "./utils/constants";

export const register = (username, password, name, avatar) => {
  return fetch(`${baseURL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, name, avatar }),
  })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const authorize = (email, password) => {
  return fetch(`${baseURL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const checkToken = (token) => {
  return fetch(`${baseURL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
