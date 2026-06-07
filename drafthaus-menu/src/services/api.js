const BASE_URL = "http://localhost:3000";

export const getCategories = () =>
  fetch(`${BASE_URL}/categories`).then(r => r.json());

export const getItems = () =>
  fetch(`${BASE_URL}/items`).then(r => r.json());

export const addCategory = (data) =>
  fetch(`${BASE_URL}/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const addItem = (data) =>
  fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const updateItem = (id, data) =>
  fetch(`${BASE_URL}/items/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const deleteItem = (id) =>
  fetch(`${BASE_URL}/items/${id}`, {
    method: "DELETE"
  });