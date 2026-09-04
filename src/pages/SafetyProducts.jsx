import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SafetyProducts = () => {
    return (
        <>
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">Safety Products</h1>
            <Row>
                <Col md={12}>
                    <h3>Complete safety solution</h3>
                    <p className="lead">
                        Your safety is our priority. We offer a comprehensive range of personal protective equipment (PPE)
                        and safety gear for mining and industrial environments.
                    </p>
                </Col>
            </Row>
        </Container>
        <SEO
            title="Safety Products & Equipment | 3M | Mahesh Automobiles"
            description="Mahesh Automobiles supplies industrial safety products in Gulabpura and Bhilwara, including safety goggles, 3M safety products, beacon lights and other safety equipment."
            keywords={[
                "safety products Gulabpura",
                "safety equipment Gulabpura",
                "safety equipment Bhilwara",
                "industrial safety equipment",
                "safety goggles",
                "3M safety products",
                "3M safety equipment",
                "beacon light",
                "mining safety equipment",
                "Mahesh Automobiles"
            ]}
        />
        </>
    );
};

export default SafetyProducts;
