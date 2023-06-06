import { baseURL, processResponseServer } from "./constants";

function getItems() {
  return fetch(`${baseURL}/items`).then(processResponseServer);
}

function addItem({ name, imageUrl, weather }) {
  return fetch(`${baseURL}/items`, {
    method: "POST",
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(processResponseServer);
}

function deleteItem(id) {
  return fetch(`${baseURL}/items/${id}`, {
    method: "DELETE",
  }).then(processResponseServer);
}

export { getItems, addItem, deleteItem };
