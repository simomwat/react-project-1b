import styles from "./SingleOffer.module.css";

const SingleOffer = (props) => {
  return (
    <div className={styles.box}>
      <p>{props.offer.tittle}</p>
      {props.offer.isNew ? (
        <div className={styles.serviceTypeNew}>
          <span className={styles.dot}></span>
          <p>(new!)</p>
        </div>
      ) : null}
    </div>
  );
};

export default SingleOffer;
