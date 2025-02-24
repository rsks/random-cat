import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
type Image = {
  url: string;
};

const IndexPage: NextPage = () => {
  const [imageUrl, setImangeUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchImage().then((newImage) => {
      setImangeUrl(newImage.url);
      setLoading(false);
    });
  }, []);

  const handleClick = () => {
    setLoading(true);
    fetchImage().then((newImage) => {
      setImangeUrl(newImage.url);
      setLoading(false);
    });
  };

  return (
    <div className={styles.page}>
      <button onClick={handleClick} className={styles.button}>
        click me
      </button>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <img src={imageUrl} className={styles.img} />
        )}
      </div>
    </div>
  );
};

const fetchImage = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
};

export default IndexPage;
