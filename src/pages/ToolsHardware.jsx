import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ToolsHardware = () => {
    return (
        <>
        <SEO
            title="Power Tools & Hardware | Stanley & DeWalt | Mahesh Automobiles"
            description="Mahesh Automobiles supplies power tools and industrial hardware in Gulabpura, Bhilwara, including Stanley and DeWalt products for industrial and mining applications."
            keywords={[
                "power tools Gulabpura",
                "power tools Bhilwara",
                "industrial tools Bhilwara",
                "Stanley tools",
                "Stanley power tools",
                "DeWalt tools",
                "DeWalt power tools",
                "hardware Gulabpura",
                "industrial hardware",
                "Mahesh Automobiles"
            ]}
        />
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">Tools and Hardware</h1>
            <Row>
                <Col md={12}>
                    <h3>Taparia, Stanley, Dewalt, Makita, Ingco, Bosch etc</h3>
                    <p className="lead">
                        Authorized dealer and supplier of world-renowned tool brands. We provide a wide range of hand tools,
                        power tools, and hardware accessories for professional use.
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default ToolsHardware;
