import { ApodParams, ApodData } from "../models";

const apiBaseURL = "https://api.nasa.gov/planetary/apod";

/**
 * Sends a(n) HTTP GET request to the NASA APOD API, requesting the specified amount of ApodData instances, each of which may represent an image or a video with its associated metadata.
 * @param count the number of ApodData instances for which to query the APOD API
 * @returns [count] number of ApodData instances from the APOD API, held in a Promise
 */
export async function fetchImages(count: number): Promise<ApodData[]> {
  const params: ApodParams = {
    api_key: process.env.API_KEY,
    count: "" + count,
  };

  const apiURL = `${apiBaseURL}?${new URLSearchParams(params)}`;
  const response = await fetch(apiURL);
  return response.json();
}
