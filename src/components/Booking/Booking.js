import React from 'react'

//importing react-bootstrap components
import { Col, Container, Row } from 'react-bootstrap'

//importing navbar
import NavElement from '../Header/Index'

import { Stepper } from 'react-form-stepper'

//importing react-icons
import {TbBuildingBank} from  'react-icons/tb'
import {GiCommercialAirplane, GiWeightScale} from 'react-icons/gi'
import {GrInbox} from 'react-icons/gr'
import {AiFillStar} from 'react-icons/ai'
import { BsChatRightDots } from 'react-icons/bs'

//importing images used in the js
import sellerImg from '../../media/seller.png'
import insuranceImg from '../../media/xcover.png'

//importing local css
import './Booking.css'

//importing react-helmet for dynamic routing
import { Helmet } from 'react-helmet'

function Booking() {
  return (
    <div>
        <Container>
            <Helmet>
                <title>Shipmate | Booking</title>
            </Helmet>
            <NavElement/>
            <Row className='stepper-wrapper'>
              <Stepper
              steps={[{ label: 'Search' }, { label: 'Recommended services' }, { label: 'Results' }, { label: 'Booking' }]}
              activeStep={3}
              styleConfig={{completedBgColor:'#D3B0FF', activeBgColor:'#D3B0FF', inactiveTextColor:'#868686', inactiveBgColor:'#868686'}}
              />  
            </Row>
            <Row>
              <Col xxl='8'>
                <Row className='booking-summary'>
                  <div className='booking-summary-header'>Booking Summary</div>
                  <Row>
                    <Col xs='auto' className='summary-destination'>
                      <Row className='summary-icon'><TbBuildingBank/></Row>
                      <Row className='summary-location'>Delhi,</Row>
                      <Row className='summary-location'>110003 India</Row>
                    </Col>
                    <Col>
                      <div className='summary-plane-text'>Express</div>
                      <div className='summary-plane-icon'><GiCommercialAirplane/></div>
                      <hr />
                    </Col>
                    <Col xs='auto' className='summary-destination'>
                      <Row className='summary-icon'><TbBuildingBank/></Row>
                      <Row className='summary-location'>Shanghai,</Row>
                      <Row className='summary-location'>200080, China</Row>
                    </Col>
                  </Row>
                </Row>
                <Row className='my-2 weight'>
                  <Col className='total-weight' md="auto">
                    <Row className='total-weight-text'>Total Weight/Volume</Row>
                    <Row className='total-weight-icon'><GiWeightScale/></Row>
                    <Row className='total-weight-subtext'>114.21KG</Row>
                  </Col>
                  <Col className='load-pallet mx-4'>
                    <Row className='load-header'>
                      Load
                    </Row>
                    <Row>
                      <Col xs='5' className='load-quan'>1X</Col>
                      <Col xs='auto'>
                        <div className='pallet-icon'><GrInbox/></div>
                        <div className='pallet-marking'>Pallets</div>
                        <div className='pallet-dimen'>230 X 140 X  120 CM</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className='seller py-2' md='5'>
                    <Row className='seller-header'>Seller:<span>Primetime Worldwide</span></Row>
                    <Row xs='12' className='seller-img'>
                      <img 
                      src={sellerImg}
                      alt="seller"
                      style={{width:"141px", height:"40px"}}
                      />
                    </Row>
                  </Col>
                  <Col className='insurance py-2 mx-4'>
                    <Row className='insurance-header'>Insurance:<span>Xcover.com</span></Row>
                    <Row xs='12' className='insurance-img'>
                      <img 
                      src={insuranceImg}
                      alt="seller"
                      style={{width:"300px"}}
                      />
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col className='price-box p-4'>
                <Row>
                  <Col xs='auto' className='price-box-header'>Price details</Col>
                  <Col md='2' className='price-box-badge'><AiFillStar/>Know shipper</Col>
                </Row>
                <Row>
                  <Col className='price-box-text-left'>Seller's Quote</Col>
                  <Col className='price-box-text-right'>$ 3,659.25</Col>
                </Row>
                <hr/>
                <Row>
                  <Col className='price-box-text-left'>Duties and taxes</Col>
                  <Col className='price-box-text-right'>Not Included</Col>
                </Row>
                <Row>
                  <Col className='price-box-text-left'>Insurance</Col>
                  <Col className='price-box-text-right'>$323.40</Col>
                </Row>
                <Row>
                  <Col className='price-box-text-left' style={{fontSize:"13px", paddingTop:"0"}}>Based on the items cost</Col>
                </Row>
                <hr />
                <Row>
                  <Col className='price-box-text-left'>Add a <p>promo code</p></Col>
                </Row>
                <Row>
                  <Col className='price-box-text-left'>Platform fee</Col>
                  <Col className='price-box-text-right'>$119.48</Col>
                </Row>
                <hr/>
                <Row>
                  <Col className='price-box-total-left'>Total:</Col>
                  <Col className='price-box-total-right'>$ 4,102.13</Col>
                </Row>
                <Row className='checkout-box'>
                  <div className='checkout-button'>
                    Checkout
                  </div>
                </Row>
              </Col>
            </Row>
            <div className='help-button'><BsChatRightDots/></div>
        </Container>
    </div>
  )
}

export default Booking