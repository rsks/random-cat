import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { ImageDisplay } from "../components/ImageDisplay";
import { FetchButton } from "../components/FetchButton";
import { fetchImage } from "../lib/fetchImage";
type Image = {
  url: string;
};

const IndexPage: NextPage = () => {
  const [imageUrl, setImangeUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchImage()
      .then((newImage) => {
        setImangeUrl(newImage.url);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
        setError("画像の取得に失敗しました。");
        setLoading(false);
      });
  }, []);

  const handleClick = () => {
    setLoading(true);
    setError(null);
    fetchImage()
      .then((newImage) => {
        setImangeUrl(newImage.url);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
        setError("画像の取得に失敗しました。");
        setLoading(false);
      });
  };

  return (
    <div className={styles.page}>
      <FetchButton handleClick={handleClick} />
      {error && <p className={styles.error}>{error}</p>}
      <ImageDisplay loading={loading} imageUrl={imageUrl} />
    </div>
  );
};

export default IndexPage;
