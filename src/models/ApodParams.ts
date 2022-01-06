/**
 * The request parameters expected by NASA's APOD API ("Astronomy Picture of the Day").
 *
 * Documentation Source: https://github.com/nasa/apod-api#docs.
 */
export interface ApodParams extends Record<string, string> {
  /** https://api.nasa.gov/#signUp */
  api_key: string;
  /** A string in YYYY-MM-DD format indicating the date of the APOD image (example: 2014-11-03). Defaults to today's date. Must be after 1995-06-16, the first day an APOD picture was posted. There are no images for tomorrow available through this API. */
  date?: string;
  /** A boolean True|False indicating whether concept tags should be returned with the rest of the response. The concept tags are not necessarily included in the explanation, but rather derived from common search tags that are associated with the description text. (Better than just pure text search.) Defaults to False.
   *
   * Note: Represented as a string for compatibility with the URLSearchParams constructor.
   */
  concept_tags?: string;
  /** A boolean True|False parameter indicating whether or not high-resolution images should be returned. This is present for legacy purposes, it is always ignored by the service and high-resolution urls are returned regardless.
   *
   * Note: Represented as a string for compatibility with the URLSearchParams constructor.
   */
  hd?: string;
  /** A positive integer, no greater than 100. If this is specified then count randomly chosen images will be returned in a JSON array. Cannot be used in conjunction with date or start_date and end_date.
   *
   * Note: Represented as a string for compatibility with the URLSearchParams constructor.
   */
  count?: string;
  /** A string in YYYY-MM-DD format indicating the start of a date range. All images in the range from start_date to end_date will be returned in a JSON array. Cannot be used with date. */
  start_date?: string;
  /** A string in YYYY-MM-DD format indicating that end of a date range. If start_date is specified without an end_date then end_date defaults to the current date. */
  end_date?: string;
  /** A boolean parameter True|False inidcating whether the API should return a thumbnail image URL for video files. If set to True, the API returns URL of video thumbnail. If an APOD is not a video, this parameter is ignored.
   *
   * Note: Represented as a string for compatibility with the URLSearchParams constructor.
   */
  thumbs?: string;
}
