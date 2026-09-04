import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCogs, FaUsers, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { FadeContent, CircularText } from '../components/TextAnimations';
import MiningBackground from '../components/MiningBackground';
import SEO from '../components/SEO';

import heroBg from '../assets/hero_bg_mining.jpg';
import hoseShieldImg from '../assets/products/hose_shield.jpg';
import toolsHardwareImg from '../assets/products/tools_hardware.png';
import tortekImg from '../assets/products/tortek.png';

const Home = () => {
    return (
        <>
            
           <SEO
                title="Mahesh Automobiles | Auto Parts & Mining Equipment in Gulabpura, Bhilwara"
                description="Mahesh Automobiles is an auto parts and mining equipment supplier in Gulabpura, Bhilwara, Rajasthan, offering HEMM parts, mining spares, fasteners, power tools, hoses, safety products and industrial equipment."
                keywords={[
                    "Mahesh Automobiles",
                    "Mahesh Automobiles Gulabpura",
                    "Auto parts shop in Gulabpura",
                    "Auto parts in Bhilwara",
                    "Mining equipment in Gulabpura",
                    "Mining equipment in Bhilwara",
                    "Mining equipment supplier",
                    "HEMM parts",
                    "Mining spares",
                    "Fasteners",
                    "Power tools",
                    "Hose protection",
                    "Safety equipment"
                ]}
            />
            {/* Hero Section */}
            <div className="hero-section mb-5 position-relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroBg})` }}>
                <MiningBackground particleCount={30} />

                {/* Rotating Badge
                <div className="position-absolute top-0 end-0 p-4 d-none d-md-block" style={{ zIndex: 10 }}>
                    <CircularText text="QUALITY MINING SOLUTIONS  •  EST. 1970  •  " color="#f39c12" radius={60} fontSize="0.8rem" />
                </div> */}

                <Container className="py-5 position-relative" style={{ zIndex: 2 }}>
                    <Row className="justify-content-center">
                        <Col lg={10} className="text-center">
                            <FadeContent blur={true} duration={1.2}>
                                <h1 className="display-3 fw-bold mb-4">Powering Mining Operations</h1>
                            </FadeContent>
                            <FadeContent blur={true} duration={1.2} delay={0.2}>
                                <p className="lead mb-5 fs-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                    Mining equipment, HEMM parts and safety solutions for mining and industrial applications in Gulabpura, Bhilwara, Rajasthan.
                                </p>
                            </FadeContent>
                            <FadeContent blur={true} duration={1} delay={0.4}>
                                <div className="d-flex justify-content-center gap-3">
                                    <Link to="/contact">
                                        <Button size="lg" className="btn-custom rounded-pill">Get in Touch</Button>
                                    </Link>
                                    <Link to="/about">
                                        <Button size="lg" className="btn-outline-light-custom rounded-pill">Know About Us</Button>
                                    </Link>
                                </div>
                            </FadeContent>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Major Products Section */}
            <Container className="section-padding">
                <div className="text-center mb-5">
                    <h2 className="mb-3">Major Products</h2>
                    <div className="mx-auto bg-warning" style={{ height: '3px', width: '80px' }}></div>
                </div>

                <Row className="g-4 justify-content-center">
                    {/* Product 1 - Hose Shield */}
                    <Col md={4} className="animate-fade-in-up delay-100">
                        <Link to="/hose-shield">
                            <Card className="h-100 card-hover border-0 shadow-sm">
                                <Card.Img variant="top" src={hoseShieldImg} style={{ height: '220px', objectFit: 'contain', width: 'auto', margin: '0 auto', display: 'block' }} />
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-bold text-dark">Hose Shield</Card.Title>
                                    <Card.Text className="text-muted">
                                        Complete Hose Protection Solution
                                    </Card.Text>
                                    <Button variant="link" className="text-accent text-decoration-none">View Details <FaArrowRight /></Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                    {/* Product 2 - Tools and Hardware */}
                    <Col md={4} className="animate-fade-in-up delay-200">
                        <Link to="/tools-hardware">
                            <Card className="h-100 card-hover border-0 shadow-sm">
                                <Card.Img variant="top" src={toolsHardwareImg} style={{ height: '220px', objectFit: 'contain', width: 'auto', margin: '0 auto', display: 'block' }} />
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-bold text-dark">Tools and Hardware</Card.Title>
                                    <Card.Text className="text-muted">
                                        Taparia, Stanley, Dewalt, Makita, Ingco, Bosch etc
                                    </Card.Text>
                                    <Button variant="link" className="text-accent text-decoration-none">View Details <FaArrowRight /></Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                    {/* Product 3 - Tortek */}
                    <Col md={4} className="animate-fade-in-up delay-300">
                        <Link to="/tortek">
                            <Card className="h-100 card-hover border-0 shadow-sm">
                                <Card.Img variant="top" src={tortekImg} style={{ height: '220px', objectFit: 'contain', width: 'auto', margin: '0 auto', display: 'block' }} />
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-bold text-dark">Tortek</Card.Title>
                                    <Card.Text className="text-muted">
                                        Complete wire and cable solution
                                    </Card.Text>
                                    <Button variant="link" className="text-accent text-decoration-none">View Details <FaArrowRight /></Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>


            {/* More Info Section */}
            <div className="bg-light section-padding">
                <Container>
                    <div className="text-center mb-5 animate-fade-in">
                        <h2 className="mb-3">Explore More</h2>
                        <div className="mx-auto bg-warning" style={{ height: '3px', width: '80px' }}></div>
                    </div>

                    <Row className="g-4 text-center">
                        <Col md={4} className="animate-fade-in-up delay-100">
                            <div className="p-4 bg-white rounded shadow-sm h-100 card-hover">
                                <div className="mb-3 text-accent fs-1"><FaCogs /></div>
                                <h3 className="h4 fa-bold">Our Products</h3>
                                <p className="text-muted small">Discover our wide range of automotive and mining solutions.</p>
                                <Link to="/products" className="btn btn-outline-dark btn-sm rounded-pill px-4">Browse All</Link>
                            </div>
                        </Col>
                        <Col md={4} className="animate-fade-in-up delay-200">
                            <div className="p-4 bg-white rounded shadow-sm h-100 card-hover">
                                <div className="mb-3 text-accent fs-1"><FaUsers /></div>
                                <h3 className="h4 fa-bold">Our Clients</h3>
                                <p className="text-muted small">See the industry leaders who trust us with their business.</p>
                                <Link to="/clients" className="btn btn-outline-dark btn-sm rounded-pill px-4">View Clients</Link>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="p-4 bg-white rounded shadow-sm h-100 card-hover">
                                <div className="mb-3 text-accent fs-1"><FaPhoneAlt /></div>
                                <h3>Contact Us</h3>
                                <p className="text-muted">Get in touch with our team for support and inquiries.</p>
                                <Link to="/contact" className="btn btn-outline-dark btn-sm rounded-pill px-4">Get in Touch</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;
