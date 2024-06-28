import styles from "./Error.module.css";
import errorIcon from "../../assets/error.png";

function Error() {
  return (
    <div className={styles.container}>
      <img src={errorIcon} className={styles.img} />
      <p>Something went wrong.</p>
    </div>
  );
}

export default Error;
