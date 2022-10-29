import React from "react";
import { Col, Container, Row } from "reactstrap";
import img1 from "../../assets/image/Rectangle 25.png";
import img2 from "../../assets/image/Rectangle 25 (1).png";
import img3 from "../../assets/image/Rectangle 29.png";
import img4 from "../../assets/image/Rectangle 30.png";
import './section.css'

const Section = () => {
  return (
    <>
      <section className="section_1">
        <Container>
          <Row className="flex_box">
            <Col lg="6">
              <div className="section_img">
                <img src={img1} alt="" />
              </div>
            </Col>
            <Col lg="6">
              <div className="section_content">
                <h2>Sed ut perspiciatis unde omnis</h2>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit rnatur aut odit
                  aut fugit, sed quia consequuntur{" "}
                </p>
                <span>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem. qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem.
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section_2">
        <Container>
          <Row className="flex_box">
            <Col lg="6">
              <div className="section_content">
                <h2>Sed ut perspiciatis unde omnis</h2>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit rnatur aut odit
                  aut fugit, sed quia consequuntur{" "}
                </p>
                <span>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem. qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem.
                </span>
              </div>
            </Col>
            <Col lg="6">
              <div className="section_img">
                <img src={img2} alt="" />
              </div>
            </Col>
          </Row>
          <div className="img_galeray">
            <Row>
              <Col lg="6" md="6">
                <img src={img3} alt="" />
              </Col>
              <Col lg="6" md="6">
                <img src={img4} alt="" />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section;
