import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import logo from "../../assets/image/Logo.png"
import "./header.css"

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <div className='nav_wapper'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='nav_item'>
                <div className='navegation'>
                    <ul className='nav_namu'>
                      <li>Home</li>
                      <li>Abut Us</li>
                      <li>Cars</li>
                      <li>Services</li>
                    </ul>
                </div>
                <div className='header_button'>
                    <button className='but_1'>Oder Now</button>
                </div>
            </div>
        </div>
      </Container>
    </header>
  )
}

export default Header