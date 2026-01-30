import React from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaBullseye, FaEye } from 'react-icons/fa';
import klSomaniImg from '../assets/kl_somani.jpg';
import shivamSomaniImg from '../assets/shivam_somani.jpg';
import missionImg from '../assets/aboutus_mission.png';
import whoWeAreImg from '../assets/about_who_we_are.jpg';
import visionImg from '../assets/about_vision.jpg';
import pushpendraJoshiImg from '../assets/pushpendra_joshi.jpeg';
import rohitMewaraImg from '../assets/rohit_mewara.jpeg';
import gopalSenImg from '../assets/gopal_sen.jpeg';

const About = () => {
    return (
        <>
            {/* Hero / Intro Section */}
            <div className="bg-light section-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0 animate-fade-in-up">
                            <Image src={whoWeAreImg} fluid rounded className="shadow-lg" />
                        </Col>
                        <Col lg={6} className="animate-fade-in-up delay-100 ps-lg-5">
                            <h2 className="display-5 fw-bold mb-4 text-primary-custom">Who We Are</h2>
                            <p className="lead text-muted mb-4">
                                Mahesh Automobiles has been a trusted name in the mining industry for over 50 years, delivering reliable mining equipment and safety solutions to operations across the region. With decades of hands-on industry experience, we have built long-standing relationships with our customers by consistently providing quality products, dependable service, and practical solutions that meet real on-ground mining needs. Our reputation is defined by customer satisfaction, trust, and long-term partnerships.
                            </p>
                            <p className="mb-4">
                                Our commitment goes beyond just selling products; we build lasting relationships by ensuring our clients
                                receive the best operational support and durable components.
                            </p>
                            <Link to="/contact">
                                <Button className="btn-custom px-4 rounded-pill">Contact Us</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Mission & Vision */}
            <Container className="section-padding">
                <div className="text-center mb-5 animate-fade-in">
                    <h2 className="mb-3">Our Core Values</h2>
                    <div className="mx-auto bg-warning" style={{ height: '3px', width: '80px' }}></div>
                </div>
                <Row className="g-4 align-items-stretch">
                    <Col md={6} className="animate-fade-in-up delay-100">
                        <Card className="h-100 border-0 shadow-sm bg-primary-custom text-white p-4 card-hover">
                            <Card.Body className="text-center">
                                <div className="mb-4 text-accent fs-1">
                                    <Image src={missionImg} fluid rounded className="shadow-lg" />
                                </div>
                                <Card.Title className="fw-bold fs-3 text-black mb-3">Our Mission</Card.Title>
                                <Card.Text className="text-black-50 fs-5">
                                    To supply reliable, durable, and industry-compliant mining and safety equipment<br />
                                    To prioritize safety, quality, and customer satisfaction in everything we deliver<br />
                                    To build long-term relationships based on trust, transparency, and consistent service<br />
                                    To continuously adapt and improve in line with evolving mining standards and technologies<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="animate-fade-in-up delay-200">
                        <Card className="h-100 border-0 shadow-sm bg-white p-4 card-hover">
                            <Card.Body className="text-center">
                                <Image src={visionImg} fluid rounded className="shadow-lg" />

                                <Card.Title className="fw-bold fs-3 text-primary-custom mb-3">Our Vision</Card.Title>
                                <Card.Text className="text-muted fs-5">
                                    To be a leading and trusted partner in the mining industry by enabling safer, more efficient, and sustainable mining operations through high-quality equipment and safety solutions.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Founders Section */}
            <div className="bg-light section-padding">
                <Container>
                    <div className="text-center mb-5 animate-fade-in">
                        <h2 className="mb-3">Our Leadership</h2>
                        <div className="mx-auto bg-warning" style={{ height: '3px', width: '80px' }}></div>
                        <p className="mt-3 text-muted">The visionaries driving our success.</p>
                    </div>
                    {/* CEO section */}
                    <Row className="justify-content-center g-5">
                        <Col md={4} className="text-center animate-fade-in-up delay-100">
                            <div className="bg-white p-4 rounded shadow-sm card-hover h-100">
                                <div className="mb-4">
                                    <Image src={klSomaniImg} roundedCircle thumbnail className="shadow-sm" style={{ width: '180px', height: '180px', objectFit: 'cover' }} />
                                </div>
                                <h4 className="fw-bold text-primary-custom">KL Somani</h4>
                                <h6 className="text-accent mb-3">CEO</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center g-5 mt-2">
                        <Col md={4} className="text-center animate-fade-in-up delay-200">
                            <div className="bg-white p-4 rounded shadow-sm card-hover h-100">
                                <div className="mb-4">
                                    <Image src={pushpendraJoshiImg} roundedCircle thumbnail className="shadow-sm" style={{ width: '180px', height: '180px', objectFit: 'cover' }} />
                                </div>
                                <h4 className="fw-bold text-primary-custom">Pushpendra Joshi</h4>
                                <h6 className="text-accent mb-3">Manager</h6>
                            </div>
                        </Col>
                        <Col md={4} className="text-center animate-fade-in-up delay-200">
                            <div className="bg-white p-4 rounded shadow-sm card-hover h-100">
                                <div className="mb-4">
                                    <Image src={rohitMewaraImg} roundedCircle thumbnail className="shadow-sm" style={{ width: '180px', height: '180px', objectFit: 'cover' }} />
                                </div>
                                <h4 className="fw-bold text-primary-custom">Rohit Mewara</h4>
                                <h6 className="text-accent mb-3">Manager</h6>
                            </div>
                        </Col> <Col md={4} className="text-center animate-fade-in-up delay-200">
                            <div className="bg-white p-4 rounded shadow-sm card-hover h-100">
                                <div className="mb-4">
                                    <Image src={gopalSenImg} roundedCircle thumbnail className="shadow-sm" style={{ width: '180px', height: '180px', objectFit: 'cover' }} />
                                </div>
                                <h4 className="fw-bold text-primary-custom">Gopal Sen</h4>
                                <h6 className="text-accent mb-3">Manager</h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;
