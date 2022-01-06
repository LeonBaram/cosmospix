import { ApodData } from "../models";

/**
 * Validates data returned from NASA's APOD API. A datum is valid if it satisfies the following:
 * - it is an image rather than a video (media_type should be image)
 * - it does not have a copyright holder (copyright should be undefined)
 * @param image the image to validate.
 * @returns true if the image is valid.
 */
export function validateImages(image: ApodData): boolean {
  return image.media_type === "image" && image.copyright === undefined;
}
