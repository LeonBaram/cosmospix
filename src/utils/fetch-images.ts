import { ApodParams, ApodResponse } from "../models";

const apiBaseURL = "https://api.nasa.gov/planetary/apod";

const params: ApodParams = {
  api_key: process.env.API_KEY,
  count: "5",
};

const apiURL = `${apiBaseURL}?${new URLSearchParams(params)}`;

export async function fetchImages(): Promise<ApodResponse> {
  const response = await fetch(apiURL);
  return response.json();
}
