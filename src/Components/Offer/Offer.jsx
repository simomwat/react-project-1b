import SingleOffer from "./SingleOffer";
import offers from "./data";
import styles from "./Offer.module.css";
import Container from "../../shared-components/container/Container";

const Offer = () => {
  return (
    <section id="offers" className={styles.container}>
      <Container>
        <h2 className={styles.serviceText}>What our company offers?</h2>

        <div className={styles.offerWrapper}>
          {offers.map((offer) => (
            <SingleOffer offer={offer} key={offer.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Offer;
