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
      <FetchButton handleClick={handleClick} />
      <ImageDisplay loading={loading} imageUrl={imageUrl} />
    </div>
  );
};

export default IndexPage;
