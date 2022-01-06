import { ApodParams, ApodData } from "../models";

const apiBaseURL = "https://api.nasa.gov/planetary/apod";

export async function fetchImages(count: number): Promise<ApodData[]> {
  const params: ApodParams = {
    api_key: process.env.API_KEY,
    count: "" + count,
  };

  const apiURL = `${apiBaseURL}?${new URLSearchParams(params)}`;
  const response = await fetch(apiURL);
  return response.json();
}
