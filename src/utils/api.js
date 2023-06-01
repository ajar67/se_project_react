import { baseURL, processResponseServer } from "./constants";

function Get() {
  return fetch(`${baseURL}/items`).then(processResponseServer);
}

function Post(name, imageUrl, weather) {
  return fetch(`${baseURL}/items`, {
    method: "POST",
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(processResponseServer);
}

function Delete(id) {
  return fetch(`${baseURL}/items/:${id}`, {
    method: "DELETE",
  }).then(processResponseServer);
}

export { Get, Post, Delete };
