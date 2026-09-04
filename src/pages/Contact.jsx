import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaUserTie, FaUser } from 'react-icons/fa';
import contactBg from '../assets/contact_bg.jpg';
import SEO from '../components/SEO';

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const name = formData.get('user_name');
        const phone = formData.get('user_phone');
        const email = formData.get('user_email');
        const message = formData.get('message');

        const subject = `Contact Request from ${name}`;
        const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        window.location.href = `mailto:maheshautogpa@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        e.target.reset();
    };

    return (
        <>
            <SEO
                title="Contact Mahesh Automobiles | Gulabpura, Bhilwara"
                description="Contact Mahesh Automobiles in Gulabpura, Bhilwara, Rajasthan for auto parts, mining equipment, HEMM parts, industrial spares, fasteners, power tools, hoses and safety products."
                keywords={[
                    "Contact Mahesh Automobiles",
                    "Mahesh Automobiles Gulabpura",
                    "Mahesh Automobiles Bhilwara",
                    "Mahesh Automobiles contact",
                    "auto parts shop Gulabpura",
                    "auto parts shop Bhilwara",
                    "mining equipment Gulabpura",
                    "mining equipment Bhilwara",
                    "mining equipment supplier Bhilwara",
                    "industrial supplier Gulabpura",
                    "auto parts supplier Bhilwara",
                    "mining spares supplier Rajasthan"
                ]}
            />
            <div className="text-white py-5 text-center" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${contactBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <Container className="py-5">
                    <h1 className="fw-bold">Contact Us</h1>
                    <p className="lead text-white-50">We are here to help. Reach out to us today.</p>
                </Container>
            </div>

            <Container className="section-padding">
                <Row className="g-5">
                    {/* Contact Info */}
                    <Col lg={5}>
                        <h3 className="mb-4 text-primary-custom">Get In Touch</h3>
                        <div className="d-flex mb-4">
                            <div className="me-3 text-accent fs-4"><FaMapMarkerAlt /></div>
                            <div>
                                <h5 className="fw-bold">Head Office</h5>
                                <p className="text-muted">Mahesh Automobiles, Banwari Chouraha, Gulabpura, Bhilwara - 311021<br />
                                    Rajasthan, India</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="me-3 text-accent fs-4"><FaEnvelope /></div>
                            <div>
                                <h5 className="fw-bold">Email</h5>
                                <p className="text-muted">maheshautogpa@gmail.com</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="me-3 text-accent fs-4"><FaUserTie /></div>
                            <div>
                                <h5 className="fw-bold mb-1">KL Somani <span className="text-muted fs-6">(CEO)</span></h5>
                                <p className="text-muted mb-1">
                                    <FaPhone className="me-2" /> +91 90014 60794
                                </p>
                                <p className="text-muted mb-0">
                                    <FaEnvelope className="me-2" /> maheshautogpa@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="me-3 text-accent fs-4"><FaUser /></div>
                            <div>
                                <h5 className="fw-bold mb-1">Shivam Somani <span className="text-muted fs-6">(Manager)</span></h5>
                                <p className="text-muted mb-1">
                                    <FaPhone className="me-2" /> +91 90792 58920
                                </p>
                                <p className="text-muted mb-0">
                                    <FaEnvelope className="me-2" /> somani2025shivam@gmail.com
                                </p>
                            </div>
                        </div>



                        <div className="d-flex mb-4">
                            <div className="me-3 text-success fs-2"><FaWhatsapp /></div>
                            <div>
                                <h5 className="fw-bold">WhatsApp</h5>
                                <p className="text-muted">Chat with us directly</p>
                                <a href="https://wa.me/7378085645" target="_blank" rel="noreferrer" className="btn btn-outline-success btn-sm rounded-pill px-4">Chat Now</a>
                            </div>
                        </div>
                    </Col>

                    {/* Contact Form */}
                    <Col lg={7}>
                        <Card className="border-0 shadow-lg p-4">
                            <Card.Body>
                                <h3 className="mb-4">Send us a Message</h3>
                                <Form ref={form} onSubmit={handleSubmit}>
                                    <Row className="g-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Your Name</Form.Label>
                                                <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control type="tel" name="user_phone" placeholder="+91 98765..." required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group>
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="email" name="user_email" placeholder="email@example.com" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group>
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control as="textarea" name="message" rows={4} placeholder="Tell us about your requirements..." required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Button type="submit" className="btn-custom w-100 py-2 mt-2">
                                                Send Message
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Map */}
                <div className="mt-5 pt-4">
                    <h3 className="mb-4">Find Us Here</h3>

                    <div className="ratio ratio-21x9 rounded overflow-hidden shadow">
                        <iframe
                            src="https://www.google.com/maps?q=Mahesh+Automobiles,+Banwari+Chouraha,+Gulabpura,+Bhilwara,+Rajasthan+311021&output=embed"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mahesh Automobiles Location"
                        ></iframe>
                    </div>

                    <p className="text-muted mt-3">
                        📍 Mahesh Automobiles, Banwari Chouraha, Gulabpura, Bhilwara – 311021, Rajasthan, India
                    </p>
                </div>

            </Container>
        </>
    );
};

export default Contact;
