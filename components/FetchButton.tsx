type Props = {
  handleClick: () => void;
};
import styles from "./FetchButton.module.css";
export const FetchButton: React.FC<Props> = (props) => {
  return (
    <>
      <button onClick={props.handleClick} className={styles.button}>
        click me
      </button>
    </>
  );
};
