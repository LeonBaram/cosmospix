import { useEffect, useState } from "react";
import { ImageDisplay } from "./components/ImageDisplay";
import { ApodData } from "./models";
import { fetchImages, validateImages } from "./utils";

export const App: React.FC = () => {
  const [images, setImages] = useState<ApodData[]>();

  useEffect(() => {
    fetchImages(20).then((apodData) =>
      setImages(apodData.filter(validateImages).slice(0, 6))
    );
  }, []);
  return (
    <div className="full-bleed">
      <h1>Cosmos Pix</h1>
      <p>test</p>
      <main>
        <ul className="images">
          {images ? (
            images.map((image) => (
              <ImageDisplay image={image} key={image.title} />
            ))
          ) : (
            <p className="loading">loading...</p>
          )}
        </ul>
      </main>
    </div>
  );
};
