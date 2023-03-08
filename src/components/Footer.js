import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";
import navIcon4 from "../assets/img/nav-icon4.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://twitter.com/AdityaSurve525"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/AdityaSurve"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/surve_15/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/aditya-surve-3ba667235/"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
