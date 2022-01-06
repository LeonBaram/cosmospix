import { ApodResponse } from "../models";

const apiBaseURL = "https://api.nasa.gov/planetary/apod";

const params = new URLSearchParams({
  api_key: process.env.API_KEY,
  start_date: "2021-12-1",
});

const apiURL = `${apiBaseURL}?${params}`;

export async function fetchImages(): Promise<ApodResponse> {
  const response = await fetch(apiURL);
  return response.json();
}
