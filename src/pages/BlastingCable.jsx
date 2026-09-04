import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlastingCable = () => {
    return (
        <>
        <SEO
            title="Blasting Cable | Mining Blasting Supplies | Mahesh Automobiles"
            description="Mahesh Automobiles supplies blasting cable and mining blasting accessories for mining applications in Gulabpura, Bhilwara, Rajasthan."
            keywords={[
                "Mahesh Automobiles",
                "blasting cable",
                "blasting cable supplier",
                "mining blasting cable",
                "blasting cable Gulabpura",
                "blasting cable Bhilwara",
                "mining supplies Gulabpura",
                "mining supplies Bhilwara",
                "mining equipment Bhilwara",
                "mining equipment Gulabpura"
            ]}
        />
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">Blasting Cable</h1>
            <Row>
                <Col md={12}>
                    <h3>Complete underground blasting solution</h3>
                    <p className="lead">
                        Safety-compliant blasting cables for underground mining operations. Designed for reliability and
                        secure signal transmission in critical blasting applications.
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default BlastingCable;
