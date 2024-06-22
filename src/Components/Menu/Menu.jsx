import Link from "../../shared-components/Link/Link";
import Container from "../../shared-components/container/Container";
import styles from "./Menu.module.css";

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
                  <Link href="#offers" label="Our Offer" isSmall={true} />
                </li>
                <li>
                  <Link href="#about-us" label="About Us" isSmall={true} />
                </li>
                <li className={styles.navContact}>
                  <Link
                    href="#about-us"
                    label="Contacts"
                    isSmall={true}
                    disabled
                  />
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
