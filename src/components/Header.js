import { Navbar, Container } from "react-bootstrap";
import styles from "../css/Header.module.css";

function Header() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#">
          <img
            alt="logo"
            src="../assets/Logo.png"
            width="33"
            height="33"
            className="d-inline-block align-top"
          />
          <span className={styles.logoText1}>Good Morning</span>
          <span className={`fw-bold ${styles.logoText2}`}>Fellas</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
