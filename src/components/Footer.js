import { Container } from "react-bootstrap";
import styles from "../css/Footer.module.css";

function Footer() {
  return (
    <div className={styles.bgFooter}>
      <Container
        className={`d-flex justify-content-between align-items-center text-white ${styles.container}`}
      >
        <p className={styles.yearText}>
          <span className="fw-bold">wknd@</span>2022
        </p>
        <p className={styles.versionText}>alpha version 0.1</p>
      </Container>
    </div>
  );
}

export default Footer;
