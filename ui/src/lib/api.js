const API_URL = "http://localhost:2500/api";

export async function fetchUsers() {
  const { search } = window.location;
  const response = await fetch(API_URL + "/users/" + search);
  if (!response.ok) {
    throw new Error(`Error fetching the users list: ${response.statusText}.`);
  }
  return response.json();
}

export async function fetchTypes() {
  const response = await fetch(API_URL + "/attrs?types");
  if (!response.ok) {
    throw new Error(
      `Error fetching the typed attributes: ${response.statusText}.`,
    );
  }
  return response.json();
}
