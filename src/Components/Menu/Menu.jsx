import Link from "../../shared-components/Link/Link";
import Container from "../../shared-components/container/Container";
import styles from "./Menu.module.css";
import { HashLink } from "react-router-hash-link";

const Menu = () => {
  return (
    <section className={styles.companyHeader}>
      <Container>
        <header className={styles.companyHeader}>
          <div className={styles.headerContent}>
            <div className={styles.brand}>
              <img
                className={styles.logo}
                src="https://picsum.photos/200"
                alt="Company Logo"
              />
              <h1> Simsys Company Ltd</h1>
            </div>
            <nav>
              <ul className={styles.navItem}>
                <li>
                  <Link href="#offer" label="Our Offer" isSmall={true} />
                </li>
                <li>
                  <Link href="#contact" label="Contact" isSmall={true} />
                </li>
                <li className={styles.navContact}>
                  <Link href="#aboutUs" label="AboutUs" isSmall={true} />
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </Container>
    </section>
  );
};

export default Menu;
