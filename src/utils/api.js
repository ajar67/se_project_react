import { baseURL, processResponseServer } from "./constants";

function getItems() {
  return fetch(`${baseURL}/items`).then(processResponseServer);
}

function addItem({ name, imageUrl, weather }) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseURL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(processResponseServer);
}

function deleteItem(id) {
  const token = localStorage.getItem("jwt");

  return fetch(`${baseURL}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(processResponseServer);
}

function profileUpdate({ name, avatar }) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseURL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then(processResponseServer);
}

function addCardLike(id, token) {
  return fetch(`${baseURL}/${id}/likes`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(processResponseServer);
}

function removeCardLike(id, token) {
  return fetch(`${baseURL}/${id}/likes`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(processResponseServer);
}

export {
  getItems,
  addItem,
  deleteItem,
  profileUpdate,
  addCardLike,
  removeCardLike,
};
