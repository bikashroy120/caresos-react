import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./hero.css"

const Hero = () => {
  return (
    <div className="hero_Section">
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero_content">
              <h2>
                Purchase your
                 <span> Perfect</span> car
              </h2>
              <h3>Over 1000+ New Cars Available Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscin elitVit ae
                pellentesque sed etiam tortor.
              </p>

              <div className="button_grop">
                  <button className='but_1'>Explore More</button>
                  <button className="but_2">See Cars</button>  
              </div>
            </div>
          </Col>
          <Col lg="6"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
