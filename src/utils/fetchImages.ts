import { ApodParams, ApodData } from "../models";

const apiBaseURL = "https://api.nasa.gov/planetary/apod";

const params: ApodParams = {
  api_key: process.env.API_KEY,
  count: "20",
};

const apiURL = `${apiBaseURL}?${new URLSearchParams(params)}`;

export async function fetchImages(): Promise<ApodData[]> {
  const response = await fetch(apiURL);
  return response.json();
}
