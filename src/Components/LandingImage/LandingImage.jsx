import styles from "./LandingImage.module.css";
import Container from "../../shared-components/container/Container";

const LandingImage = () => {
  return (
    <section className={styles.frontSection}>
      <img
        className={styles.landingImage}
        src="/images/front-image.png"
        alt="Landing-image"
      />

      <div className={styles.frontContent}>
        <Container className={styles.frontFlexContainer}>
          <h2 className={styles.frontHeading}>
            Our company produces highest quality products.
          </h2>
          <div className={styles.frontText}>
            <p>Don’t trust us just check us</p>
          </div>

          <a href="#offers" className={styles.frontButton}>
            Our offer
          </a>
        </Container>
      </div>
    </section>
  );
};

export default LandingImage;
