import React from 'react'

//importing the navbar
import NavElement from '../Header/Index'

//importing react-bootstrap components for responsive webpage
import { Col, Container, Row } from 'react-bootstrap'

//importing all the react-icons 
import {CiLocationOn} from 'react-icons/ci'
import {MdOutlineCalendarMonth, MdOutlineBusinessCenter} from 'react-icons/md'
import {RiShipLine, Ri24HoursFill} from 'react-icons/ri'
import {BsArrowRight, BsChatRightDots} from 'react-icons/bs'
import {HiOutlineGlobeAlt} from 'react-icons/hi'

//importing images
import waves from '../../media/water_waves.png'

//importing custom css
import './Home.css'

//importing react-helmet for dynamic routing
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <div>
         <Helmet>
            <title>Shipmate | Home</title>
        </Helmet>
        <NavElement />
        <Container>
            <Row>
                <div className='hero-header'>Hassle-Free Shipping Solutions</div>
            </Row>
            <Row>
                <div className='hero-tagline'>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</div>
            </Row>
            <Row>
                <div className='hero-input'>
                    <Row>
                    <Col sm='6' md='3'>
                    <div className='input-origin'>
                        <div className="icon"><CiLocationOn/></div>
                        <input placeholder='Origin, Port, City' className="input"></input>
                    </div>
                    </Col>
                    <Col sm='6' md='3'>
                    <div className='input-arrival'>
                        <div className="icon"><CiLocationOn/></div>
                        <input placeholder='Destination, Port, City' className="input"></input>
                    </div>
                    </Col>
                    <Col sm='6' md='3'>
                    <div className='input-date'>
                        <span></span><div className="icon"><MdOutlineCalendarMonth/></div>
                        <input placeholder='13 April 2023' className="input"></input>
                    </div>
                    </Col>
                    <Col sm='4' md='2'>
                    <div className='input-load'>
                        <span></span><div className="icon"><RiShipLine/></div>
                        <input placeholder='Load' className="input"></input>
                    </div>
                    </Col>
                    <Col sm='2' md="auto">
                    <a href="/result"><div className='input-hero-button'>
                        <BsArrowRight/>
                    </div></a>
                    </Col>                    
                    </Row>
                </div>
            </Row>
            <Row>
                <Row>
                    <div className='service-header'>Services</div>
                </Row>
                <Row>
                    <Col xl='3' lg='6' className='my-2'>
                    <div className='service-card'>
                        <div className='service-card-top'>
                            <div className='service-card-icon' style={{color: "#0075FF"}}>
                                <RiShipLine/>
                            </div>
                            <div className='service-card-header'>
                                Freight Services
                            </div>
                        </div>
                        <div className='service-card-content'>
                            Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.
                        </div>
                    </div>
                    </Col>
                    <Col xl='3' lg='6' className='my-2'>
                    <div className='service-card'>
                        <div className='service-card-top'>
                            <div className='service-card-icon' style={{color: "#FF4747"}}>
                                <MdOutlineBusinessCenter/>
                            </div>
                            <div className='service-card-header'>
                                Business Services
                            </div>
                        </div>
                        <div className='service-card-content'>
                            We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.
                        </div>
                    </div>
                    </Col>
                    <Col xl='3' lg='6' className='my-2'>
                    <div className='service-card'>
                        <div className='service-card-top'>
                            <div className='service-card-icon' style={{color: "#FF6813"}}>
                                <HiOutlineGlobeAlt/>
                            </div>
                            <div className='service-card-header'>
                                Shipping & Logistics
                            </div>
                        </div>
                        <div className='service-card-content'>
                            Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.
                        </div>
                    </div>
                    </Col>
                    <Col xl='3' lg='6' className='my-2'>
                    <div className='service-card'>
                        <div className='service-card-top'>
                            <div className='service-card-icon' style={{color: "#47A7FF"}}>
                                <Ri24HoursFill/>
                            </div>
                            <div className='service-card-header'>
                                24/7 Support
                            </div>
                        </div>
                        <div className='service-card-content'>
                            Receive support from our experts all over the world at every stage of the process, 24/7.
                        </div>
                    </div>
                    </Col>
                </Row>
            </Row>   
        </Container>
            <div className='res-space'>
            </div>
            <div className='help-button'><BsChatRightDots/></div>
            <div className="sticky-image-wrapper">
                <img src={waves} alt='waves'/>
             </div>
    </div>
  )
}

export default Home