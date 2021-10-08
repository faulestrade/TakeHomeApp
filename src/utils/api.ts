import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer BQChjpx9hlZIOQuKLjwp9LywVB9XGcNMvx8LNoN5S9503mfKtT7j9KNcP7cvyrAIuksHZtKrK5GqZghRmUsf9VktGY6i7D5NlTuYr_vSIcVyiJ-_JEysQ-4N7e7FyOyngjUNtAB-4pLSuSTx",
  },
});

export const getData = async (endpoint: string, options = {}): Promise<any> =>
  (await api.get(endpoint, { params: options })).data;

export default api;
