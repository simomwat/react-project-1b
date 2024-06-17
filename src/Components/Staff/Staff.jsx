import styles from "./Staff.module.css";
import Container from "../../shared-components/container/Container";

const Staff = () => {
  return (
    <section id="about-us" className={styles.section}>
      <Container>
        <h2 className={styles.sectionHeading}>Our specialists?</h2>
        <ul className={styles.specialistList}>
          <li className={styles.specialistItem}>
            <div className={styles.specialistPhotoCentred}>
              <img
                className={styles.specialistPhoto}
                src="/images/specialist1.jpeg"
                alt="specialist Mary Dunnes"
              />
            </div>
            <div className={styles.specialistInfo}>
              <h3 className={styles.specialistName}>
                Mary Dunnes [HR department]
              </h3>
              <p className={styles.specialistDescription}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                nostrum, sequi eaque illum odio pariatur quia quo! Nam eius
                nobis quam ipsum fugit! Cumque iste dolore sit libero, et ea.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus voluptates similique praesentium, possimus ipsa culpa
                eveniet quos ut error laudantium libero quia blanditiis facilis
                a reprehenderit consequatur nisi, veritatis animi.
              </p>
            </div>
          </li>
          <li className={styles.specialistItem}>
            <div className={styles.specialistPhotoCentred}>
              <img
                className={styles.specialistPhoto}
                src="/images/specialist2.jpg"
                alt="specialist Mary Dunnes"
              />
            </div>
            <div className={styles.specialistInfo}>
              <h3 className={styles.specialistName}>
                Matthew Blair [IT department]
              </h3>
              <p className={styles.specialistDescription}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                nostrum, sequi eaque illum odio pariatur quia quo! Nam eius
                nobis quam ipsum fugit! Cumque iste dolore sit libero, et ea.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus voluptates similique praesentium, possimus ipsa culpa
                eveniet quos ut error laudantium libero quia blanditiis facilis
                a reprehenderit consequatur nisi, veritatis animi.
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Staff;
