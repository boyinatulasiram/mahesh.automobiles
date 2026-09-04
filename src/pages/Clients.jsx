import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SEO from '../components/SEO';

import hindustanZinc from '../assets/clients/hindustan_zinc.png';
import client1 from '../assets/clients/sandvik_2.png';
import client2 from '../assets/clients/gainwell_3.png';
import client3 from '../assets/clients/epiroc_4.png';
import client4 from '../assets/clients/norment_5.png';
import client5 from '../assets/clients/ghh_6.png';
import client6 from '../assets/clients/relaint_7.png';
import client7 from '../assets/clients/conceptual_drilling_8.png';
import client8 from '../assets/clients/sk_khetan_9.png';
import client9 from '../assets/clients/voltas_10.png';
import client10 from '../assets/clients/group_r_11.png';
import client11 from '../assets/clients/blob_0e2322f_12.png';
import client12 from '../assets/clients/shree_cement__1__13.png';


const Clients = () => {
    const clients = [
        { id: 0, img: hindustanZinc, name: "HINDUSTAN ZINC LIMITED (HZL)" },
        { id: 1, name: "Sandvik Mining and Rock Technology India Private Limited", img: client1 },
        { id: 2, name: "Gainwell Commosales Private Limited", img: client2 },
        { id: 3, name: "Epiroc India Private Limited", img: client3 },
        { id: 4, name: "Normet India Private Limited", img: client4 },
        { id: 5, name: "GHH India Mining and Tunneling Equipment Private Limited", img: client5 },
        { id: 6, name: "Reliant Drilling Private Limited", img: client6 },
        { id: 7, name: "Conceptual Drilling", img: client7 },
        { id: 8, name: "S.K Khetan Infraproject Private Limited", img: client8 },
        {
            id: 9, name: `
Voltas Private Limited`, img: client9
        },
        { id: 10, name: "GroupR Mining and Exploration India Limited", img: client10 },

    ];
    const CementClients = [
        { id: 0, name: "Ultratech Cements", img: client11 },
        { id: 1, name: "Shree Cements", img: client12 }
    ];

    return (
        <>
        <SEO
            title="Our Clients | Mahesh Automobiles | Mining & Industrial Supplier"
            description="Explore the industries and clients served by Mahesh Automobiles, a supplier of mining equipment, auto parts, industrial spares and safety products in Gulabpura, Bhilwara, Rajasthan."
            keywords={[
                "Mahesh Automobiles clients",
                "Mahesh Automobiles Gulabpura",
                "Mahesh Automobiles Bhilwara",
                "mining equipment supplier Bhilwara",
                "mining equipment supplier Gulabpura",
                "industrial supplier Bhilwara",
                "mining spares supplier",
                "auto parts supplier Bhilwara",
                "industrial equipment supplier Rajasthan",
                "mining industry supplier Rajasthan"
            ]}
        />
        <div className="clients-page">
            <div className="bg-light py-5 text-center mb-5">
                <Container>
                    <h1 className="fw-bold section-title" style={{ color: '#2c3e50' }}>Our Trusted Clients</h1>
                    <p className="lead text-muted">Partnering with industry leaders to deliver success.</p>
                </Container>
            </div>

            <Container className="pb-5">
                <Row className="g-4 justify-content-center">
                    {clients.map((client) => (
                        <Col md={3} sm={4} xs={6} key={client.id}>
                            <Card className="h-100 border-0 shadow-sm client-card" style={{ transition: 'transform 0.3s' }}>
                                <div className="p-4 d-flex align-items-center justify-content-center" style={{ height: '180px', backgroundColor: '#fff' }}>
                                    <Card.Img
                                        variant="top"
                                        src={client.img}
                                        alt={client.name}
                                        style={{ maxHeight: '100%', maxWidth: '100%', width: 'auto', height: 'auto', objectFit: 'contain' }}
                                    />
                                </div>
                                <Card.Body className="text-center bg-light py-2">
                                    <small className="fw-bold text-secondary">{client.name}</small>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container className="pb-5">
                <Row className="g-4 justify-content-center">
                    <h3 className="fw-bold section-title justify-content-center text-center" style={{ color: '#2c3e50' }}>CEMENT INDUSTRIES CLIENTS</h3>
                    {CementClients.map((CementClients) => (
                        <Col md={3} sm={4} xs={6} key={CementClients.id}>
                            <Card className="h-100 border-0 shadow-sm client-card" style={{ transition: 'transform 0.3s' }}>
                                <div className="p-4 d-flex align-items-center justify-content-center" style={{ height: '180px', backgroundColor: '#fff' }}>
                                    <Card.Img
                                        variant="top"
                                        src={CementClients.img}
                                        alt={CementClients.name}
                                        style={{ maxHeight: '100%', maxWidth: '100%', width: 'auto', height: 'auto', objectFit: 'contain' }}
                                    />
                                </div>
                                <Card.Body className="text-center bg-light py-2">
                                    <small className="fw-bold text-secondary">{CementClients.name}</small>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <style>
                {`
                .client-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
                }
                `}
            </style>
        </div>
        </>
    );
};

export default Clients;
