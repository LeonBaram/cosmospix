import { useEffect, useState } from "react";
import { ApodData } from "./models";
import { fetchImages, validateImages } from "./utils";

export const App: React.FC = () => {
  const [images, setImages] = useState<ApodData[]>();

  useEffect(() => {
    (async () => {
      const apodData = await fetchImages();
      setImages(apodData.filter(validateImages));
      console.log(images);
    })();
  }, []);
  return (
    <>
      <h1>Cosmos Pix</h1>
      <p>test</p>
    </>
  );
};
