import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Batteries = () => {
    return (<>
        <SEO
            title="Industrial & Automotive Batteries | Mahesh Automobiles | Gulabpura, Bhilwara"
            description="Mahesh Automobiles supplies automotive and industrial batteries in Gulabpura, Bhilwara, Rajasthan, serving mining, commercial vehicle and industrial requirements."
            keywords={[
                "Mahesh Automobiles",
                "batteries Gulabpura",
                "battery shop Gulabpura",
                "automotive batteries Gulabpura",
                "automotive batteries Bhilwara",
                "industrial batteries Bhilwara",
                "industrial batteries Gulabpura",
                "mining batteries",
                "vehicle batteries",
                "automobile batteries",
                "battery supplier Bhilwara"
            ]}
        />
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">Batteries</h1>
            <Row>
                <Col md={12}>
                    <h3>Complete equipment battery solution</h3>
                    <p className="lead">
                        Power your equipment with our reliable battery solutions. We offer batteries for various
                        mining vehicles and industrial machinery, ensuring consistent performance.
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    );
};
export default Batteries;
