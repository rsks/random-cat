type Props = {
  imageUrl: string;
  loading: boolean;
};
import styles from "./ImageDisplay.module.css";
export const ImageDisplay: React.FC<Props> = (props) => {
  return (
    <div>
      {props.loading ? (
        <p>Loading...</p>
      ) : (
        <img src={props.imageUrl} className={styles.img} />
      )}
    </div>
  );
};
