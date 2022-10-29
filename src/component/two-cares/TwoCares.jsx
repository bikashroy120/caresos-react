import React from "react";
import { Col, Container, Row } from "reactstrap";
import img1 from "../../assets/image/two-cares.png";
import img2 from "../../assets/image/two-cares2 (2).png";
import './twoCares.css'

const TwoCares = () => {
  return (
    <section className="two_cares">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="two-caresbox">
              <img src={img1} alt="" />
              <h2>Sed ut perspiciatis</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia conseq uuntur magni dolores eos qui ratione
                voluptatem se.
              </p>

              <div className="two_cares_button">
                <button className="but_1">Learn more</button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="two-caresbox">
              <img src={img2} alt="" />
              <h2>Lorem ipsum dolor</h2>
              <p>
                Amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magn aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>

              <div className="two_cares_button">
                <button className="but_1">Learn more</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TwoCares;
