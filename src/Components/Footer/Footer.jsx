import Container from "../../shared-components/container/Container";

import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <Container>
        <div className={styles.footerContents}>
          <p className={styles.footerDetails}>
            Simsys Company Ltd; All rights reserved, 2024
          </p>

          <div className={styles.footerIcons}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
