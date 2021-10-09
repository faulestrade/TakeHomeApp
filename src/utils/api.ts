import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer BQCWORPLp3ocFfWCC8k7DvA2MVS6SQPovF3aQUx9HkqoDU9QDtpx1qF0BKJYBCtzIXnnTK6UfK-vwetwADhcYnX1cGDOcklm_7WZHHg2kR7cvZ_ZsYp9mqzC-wd22N54arFXhEUXIWYfEPQH",
  },
});

export const getData = async (endpoint: string, options = {}): Promise<any> =>
  (await api.get(endpoint, { params: options })).data;

export default api;
