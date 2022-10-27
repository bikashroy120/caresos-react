import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./about.css";
import about from "../../assets/image/about.png";

const About = () => {
  return (
    <section className="about_area">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div>
              <img src={about} alt="" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about_content">
              <h2 className="about_heading">About Us</h2>
              <span className="short_drc">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
                vestibulum diam sit adipis cing elit adipis cing elit.
              </span>
              <p className="long_dec">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                ultrices scelerisque urna sed man proin lacinia. Posuere
                facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros.
                sklois kias rabs raffeadbook. <br />

                nibh elementum eget. Integer dolor urna egestas sit donec neque,
                mi elit. Diam praesent mi blandit uices vel amet. Sapien, ac
                tortor vel ut pharetra, celerisqd. sklois kias rabs raffead
                book.
              </p>
              <div className="about_btn">
                <button className="but_1">Read More</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
