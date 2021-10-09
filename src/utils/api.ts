import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer BQAVEm00UnfEMmt8DWiocX44ZtrHfDKug91nNbxXGvEjwk80SzDL63eLDelSizsBEaAcmVrFyffuj4UAGy0Hrm7WaU2PUO7OZG9BQroRc0EDGPzPBhMUNeyP2Bk1BqSWHiwc570cfmsLKsKl",
  },
});

export const getData = async (endpoint: string, options = {}): Promise<any> =>
  (await api.get(endpoint, { params: options })).data;

export default api;
