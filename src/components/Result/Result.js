import React from 'react'

//importing react-bootsrap classes
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'

//importing react-stepper
import { Stepper } from 'react-form-stepper';

//importing all the icons
import { RiShipLine } from 'react-icons/ri';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { BiEditAlt } from 'react-icons/bi';
import { BsChatRightDots, BsChevronDown } from 'react-icons/bs';

//importing badge elements
import ResultCardEco from '../ResultCard/ResultCardEco';
import ResultCardBest from '../ResultCard/ResultCardBest';

//importing react-hemlet for dynamic titlte
import { Helmet } from 'react-helmet';

//importing local css
import './Result.css'

//impoting the navbar
import NavElement from '../Header/Index'

function Result() {
  return (
    <div>
        {/* using the navbar */}
        <NavElement/>
        
        {/* Dynamic title */}
        <Helmet>
            <title>Shipmate | Result</title>
        </Helmet>
        
        <Container>
            <Row className='stepper-wrapper'>
                <Stepper
                steps={[{ label: 'Search' }, { label: 'Recommended services' }, { label: 'Results' }, { label: 'Booking' }]}
                activeStep={2}
                styleConfig={{completedBgColor:'#D3B0FF', activeBgColor:'#D3B0FF', inactiveTextColor:'#868686', inactiveBgColor:'#868686'}}
                />  
            </Row>
            <Row>
                <div className='hero-input'>
                    <Row>
                        <Col sm='6' md='3'>
                            <div className='input-origin'>
                                <div className="icon"><CiLocationOn/></div>
                                <input defaultValue='Delhi, 110003' placeholder='Origin, Port, City' className="input"></input>
                            </div>
                        </Col>
                        <Col sm='6' md='3'>
                            <div className='input-arrival'>
                                <div className="icon"><CiLocationOn/></div>
                                <input defaultValue='Shanghai 200080' placeholder='Destination, Port, City' className="input"></input>
                            </div>
                        </Col>
                        <Col sm='6' md='3'>
                            <div className='input-date'>
                                <span></span><div className="icon"><MdOutlineCalendarMonth/></div>
                                <input defaultValue='13 April 2023' className="input"></input>
                            </div>
                        </Col>
                        <Col sm='4' md='2'>
                            <div className='input-load'>
                                <span></span><div className="icon"><RiShipLine/></div>
                                <input defaultValue='114.21KG - AIR' placeholder='Load' className="input"></input>
                            </div>
                        </Col>
                        <Col sm='2' md="auto">
                            <div className='input-hero-edit'>
                                <BiEditAlt/>
                            </div>
                        </Col>                    
                    </Row>
                </div>
            </Row>
        </Container>
        <hr/>
        <Container>
            <Row>
                <Col lg='3'>
                    <div className='sidepane-header'>
                        3 Top Quote <span>(6 in Total)</span>
                    </div>
                    <Row className='my-4'>
                        <Col>
                            <div className='sidepane-text'>Filters</div>
                        </Col>
                        <Col xs='auto'>
                            <div className='sidepane-icon'><BsChevronDown/></div>
                        </Col>                     
                    
                    </Row>
                    <Row className='my-4'>
                        <Col>
                            <div className='sidepane-text'>Price</div>
                        </Col>
                        <Col xs='auto'>
                            <div className='sidepane-icon'><BsChevronDown/></div>
                        </Col>                     
                    
                    </Row>
                    <Row className='my-4'>
                        <Col>
                            <div className='sidepane-text'>Modes</div>
                        </Col>
                        <Col xs='auto'>
                            <div className='sidepane-icon'><BsChevronDown/></div>
                        </Col>                     
                    
                    </Row>
                    <Row className='my-4'>
                        <Col>
                            <div className='sidepane-text'>Seller</div>
                        </Col>
                        <Col xs='auto'>
                            <div className='sidepane-icon'><BsChevronDown/></div>
                        </Col>                     
                    
                    </Row>
                </Col>
                <Col>
                    <Tabs
                    defaultActiveKey="best"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                    variant="pills"
                    >
                    <Tab eventKey="best" title="Best Value 5-5 days. $3,121">
                        <ResultCardEco />
                        <ResultCardBest />
                        <ResultCardEco />
                    </Tab>
                    <Tab eventKey="quick" title="Quickest 5-5 days. $3,121">
                        Unable to Fetch data
                    </Tab>
                    <Tab eventKey="cheap" title="Cheapest 5-5 days. $3,121">
                        Unable to Fetch data
                    </Tab>
                    </Tabs>
                </Col>
            </Row>
            <div className='help-button'><BsChatRightDots/></div>
        </Container>
    </div>
  )
}

export default Result