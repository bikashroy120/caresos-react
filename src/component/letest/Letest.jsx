import React from "react";
import { Col, Container, Row } from "reactstrap";
import Slyder from "../slyder/Slyder";
import "./letest.css"


const Letest = () => {
  return (
    <section className="letest_area">
      <Container>
        <Row>
          <Col lg="6">
            <div className="leatest_headding">
              <h2>our Latest cars</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
                vestibulum diam sit adipis cing elit adipis cing elit.
              </p>
            </div>
          </Col>
        </Row>

        <Slyder />

      </Container>
    </section>
  );
};

export default Letest;
