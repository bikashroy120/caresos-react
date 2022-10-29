import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import logo from "../../assets/image/Footer-Logo.png"
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"
import './footer.css'


const Footer = () => {
  return (
    <section className='footer'>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="footer_logo">
                        <img src={logo} alt="" />
                    </div>
                </Col>
                <Col lg="6">
                    <Row>
                        <Col md="3">
                            <div className='footer_tab'>
                                <h2>Mobile app</h2>
                                <ul>
                                    <li>Features</li>
                                    <li>Live share</li>
                                    <li>Video record</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className='footer_tab'>
                                <h2>Community</h2>
                                <ul>
                                    <li>Featured artists</li>
                                    <li>The Portal</li>
                                    <li>Live events</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className='footer_tab'>
                                <h2>Mobile app</h2>
                                <ul>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                    <li>History</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className='footer_button'>
                               <button className='f_but_1'>Register</button>
                               <button className='f_but_2'>Log in</button>
                            </div>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
            <div className='footer_boder'>

            </div>
            <div className='footer_buttom'>
                <div>
                    <p>© Photo, Inc. 2019. We love our users!</p>
                </div>

                <div className='socil_div'>
                    <h4>Follow us:</h4>
                    <div className='social'>
                        <span><FaFacebookF /></span>
                        <span><BsTwitter/></span>
                        <span><AiOutlineInstagram /></span>
                        <span><FaLinkedinIn/></span>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Footer