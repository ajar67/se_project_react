import { baseURL, processResponseServer } from "./constants";

export default function Get() {
  return fetch(`${baseURL}/items`).then(processResponseServer);
}

export default function Post(name, imageUrl, weather) {
  return fetch(`${baseURL}/items`, {
    method: "POST",
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(processResponseServer);
}

export default function Delete(id) {
  return fetch(`${baseURL}/items/:${id}`, {
    method: "DELETE",
  }).then(processResponseServer);
}
