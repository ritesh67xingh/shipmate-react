import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CiLocationOn } from 'react-icons/ci'

import frameImg from '../../media/frame.png'

import ReactStars from "react-rating-stars-component";
import { BsAirplane, BsDot } from 'react-icons/bs';

const ratingChanged = (newRating) => {
        console.log(newRating);
      };


function ResultCardEco() {
  return (
    <div>
        <div className='search-card m-3 p-4'>
                            <Row>
                                <Col>
                                    <div>
                                        <Row>
                                            <Col className='value-type-best' md="auto">
                                            <span><BsDot/></span>Best Value
                                            </Col>
                                            <Col className='express-logo' md="auto">
                                                Express
                                            </Col>
                                            <Col className='est-trip' md="auto">
                                                |&emsp;&nbsp;Est. 5 days
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='location-detail' md="auto">
                                                <CiLocationOn/>110003, Delhi
                                            </Col>
                                            <Col md="auto">
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                <div style={{ flex: 1, backgroundColor: "#565656", height: "1px", width:"60px" }} /> 
                                                <p style={{ margin: ".8rem 8px" }}><BsAirplane/></p> 
                                                <div style={{ flex: 1, backgroundColor: "#565656", height: "1px" }} />
                                                </div>
                                            </Col>
                                            <Col className='location-detail' md="auto">
                                                <CiLocationOn/>200080, Shanghai
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="auto">
                                                <img
                                                src={frameImg}
                                                alt="frame logo"
                                                 />
                                            </Col>
                                            <Col className='frame-img-text' md="auto">
                                                Primetime Worldwide
                                            </Col>
                                            <Col md="auto">
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                onChange={ratingChanged}
                                                size={24}
                                                activeColor="#9747FF"
                                            />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col className='search-card-right' xs='auto'>
                                    <div>
                                        <Row className='trip-amt'>
                                            $ 3,982.63
                                        </Row>
                                        <a href="/booking"><Row className='trip-select'>
                                            Select
                                        </Row></a>
                                        <Row className='trip-detail'>
                                            View details
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
    </div>
  )
}

export default ResultCardEco