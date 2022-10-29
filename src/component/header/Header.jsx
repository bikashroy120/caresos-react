import React, { useEffect, useRef } from 'react'
import { Container } from 'reactstrap'
import logo from "../../assets/image/Logo.png"
import "./header.css"
import {BsList} from "react-icons/bs"

const Header = () => {

  const headerRef = useRef(null);
  const nemuRef = useRef(null);

  const stickyHeaderFun = ()=>{
      window.addEventListener("scroll",()=>{
          if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
              headerRef.current.classList.add('sticke_header')
          }else{
              headerRef.current.classList.remove('sticke_header')
          }
      })
  }


  useEffect(()=>{
      stickyHeaderFun();
      return ()=>window.removeEventListener("scroll",stickyHeaderFun)
  })

  const navTrogle = ()=>nemuRef.current.classList.toggle("mobil_show")



  return (
    <header className='header'>
      <Container>
        <div className='nav_wapper'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='nav_item' ref={nemuRef} onClick={navTrogle}>
                <div className='navegation'>
                    <ul className='nav_namu'>
                      <li>Home</li>
                      <li>Abut Us</li>
                      <li>Cars</li>
                      <li>Services</li>
                    </ul>

                 
                      <button className='but_1'>Oder Now</button>
                    
                </div>
            </div>

            <div className='mobile_nav'>
              <span onClick={navTrogle}><BsList/></span>
            </div>

        </div>
      </Container>
    </header>
  )
}

export default Header