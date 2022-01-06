import { ApodData } from "../models";

export interface Props {
  image: ApodData;
}

export const ImageDisplay: React.FC<Props> = ({ image }) => {
  return (
    <article className="image-display">
      <div className="img-container">
        <img src={image.hdurl ?? image.url} alt={image.title} />
      </div>
      <p>{image.explanation}</p>
    </article>
  );
};
