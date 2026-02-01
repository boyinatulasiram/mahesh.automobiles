import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Import local assets
import productsHeroBg from '../assets/products_hero_bg.jpg';
import hoseShieldImg from '../assets/products/hose_shield.jpg';
import tecknoweldImg from '../assets/products/tecknoweld.png';
import ventilationImg from '../assets/products/ventilation.png';
import tortekImg from '../assets/products/tortek.png';
import safeplastImg from '../assets/products/safeplast.png';
import ramGearImg from '../assets/products/ram_gear.png';
import grozImg from '../assets/products/groz.png';
import ferreterroImg from '../assets/products/ferreterro.png';
import samoaImg from '../assets/products/samoa.png';
import fireInsulationImg from '../assets/products/fire_insulation.png';
import fireFrameImg from '../assets/products/fire_frame.png';
import universalImg from '../assets/products/universal.png';
import deutzImg from '../assets/products/deutz.png';
import vehicleSeatsImg from '../assets/products/vehicle_seats.png';
import spalImg from '../assets/products/spal.png';
import windowGlassImg from '../assets/products/window_glass.png';

import undergroundMiningImg from '../assets/products/underground_mining_spare.png';
import roofSupportImg from '../assets/products/roof_support_system.png';
import toolsHardwareImg from '../assets/products/tools_hardware.png';
import safetyProductsImg from '../assets/products/safety_products.png';
import weldingAccessoriesImg from '../assets/products/welding_accessories.png';
import developmentWorkImg from '../assets/products/development_work.png';
import repairingWorksImg from '../assets/products/repairing_works.png';
import blastingCableImg from '../assets/products/blasting_cable.png';
import hdpePipeImg from '../assets/products/hdpe_pipe.png';
import unbrakoImg from '../assets/products/unbrako_fastener.png';
import batteriesImg from '../assets/products/batteries.png';
import rubberSparesImg from '../assets/products/rubber_spares.png';

const Products = () => {
    const primeProducts = [
        { id: 1, title: 'HOSE-SHIELD', description: 'Complete Hose Protection Solution', img: hoseShieldImg, link: '/hose-shield' },
        { id: 2, title: 'Tortek India Private LTD', description: 'complete wire and cable solution.', img: tortekImg, link: '/tortek' },
        { id: 5, title: 'Safeplast OY', description: 'Complete Hose Protection Solution', img: safeplastImg, link: '/safeplast' },
        { id: 7, title: 'Groz Engineering Tools Pvt LTD', description: 'Complete tools, lighting, and lubrication products', img: grozImg, link: 'https://www.groz-tools.com/home/', external: true },
        { id: 8, title: 'Ferreterro', description: 'complete webbing sling and material handling product.', img: ferreterroImg, link: 'https://ferreterro.com/', external: true },
        { id: 26, title: 'Unbrako Fastener', description: 'Complete fastener solution.', img: unbrakoImg, link: '/unbrako' },
        { id: 27, title: 'Batteries', description: 'Complete equipment battery solution', img: batteriesImg, link: '/batteries' },
        { id: 21, title: 'Welding Accessories', description: 'Ador, Esab, D&H, Boiler, L&T etc.', img: weldingAccessoriesImg, link: '/welding-accessories' },
        { id: 20, title: 'Safety Products', description: 'Complete safety solution', img: safetyProductsImg, link: '/safety-products' },
        { id: 19, title: 'Tools and Hardware', description: 'Taparia, Stanley, Dewalt, Makita, Ingco, Bosch etc', img: toolsHardwareImg, link: '/tools-hardware' },
        { id: 10, title: 'Fire Insulation Limited', description: 'complete fire insulation jacket and cover.', img: fireInsulationImg, link: '/fire-product' },
        { id: 11, title: 'Fire Frame', description: 'complete fire suppression system.', img: fireFrameImg, link: 'https://fireframe.in/', external: true },
        { id: 12, title: 'Universal Electrode Industry', description: 'Complete Welding solution.', img: universalImg, link: '/universal-electrode' },
        { id: 13, title: 'DEUTZ SPARE PARTS', description: 'ALL TYPE OF DEUTZS SPARE PARTS', img: deutzImg, link: '/deutz' },
        { id: 14, title: 'VEHICLE SEATS', description: 'ALL TYPES OF OPERATOR AND PASSENGER SEAT ARE AVAILABLE AND REPAIR', img: vehicleSeatsImg, link: '/vehicle-seat' },
        { id: 15, title: 'SPAL Automotive', description: 'ALL TYPES OF  AC SPARE PARTS', img: spalImg, link: '/spal' },
        { id: 3, title: 'Tecknoweld Alloys India Pvt ltd', description: 'Your partner in wear protection', img: tecknoweldImg, link: 'https://www.tecknoweld.com/', external: true },
        { id: 4, title: 'Underground Ventilation Systems', description: 'Complete Underground Ventilation solution.', img: ventilationImg, link: '/mining-ventilation-system' },
        { id: 6, title: 'RAM GEAR PRIVATE LTD', description: 'Complete Drive Technology', img: ramGearImg, link: '/ram-industries' },
        { id: 9, title: 'Samoa Spain', description: 'Complete Lubrication Equipment.', img: samoaImg, link: 'http://samoaindustrial.com/ww/en/Product/SEARCH', external: true },
        { id: 16, title: 'MINING VEHICLE WINDOW GLASS', description: 'ALL TYPES OF  TUFFEND AND LAMINATED WINDOWS GLASS', img: windowGlassImg, link: '/window-glass' },
        { id: 17, title: 'Underground Mining Spare And Consumable Parts', description: 'Complete underground mining equipment spare parts', img: undergroundMiningImg, link: '/underground-mining-spare' },
        { id: 18, title: 'Roof Support System', description: 'complete underground roof support system.', img: roofSupportImg, link: '/roof-support-system' },
        { id: 22, title: 'Development Work', description: 'Complete electrical and mechanical development', img: developmentWorkImg, link: '/development-work' },
        { id: 23, title: 'Repairing Works', description: 'Complete dewatering pump repair, electric motor repair, and rewinding work', img: repairingWorksImg, link: '/repairing-works' },
        { id: 24, title: 'Blasting Cable', description: 'Complete underground blasting solution', img: blastingCableImg, link: '/blasting-cable' },
        { id: 25, title: 'HDPE Pipe and Fittings', description: 'Complete pipes and fittings solution.', img: hdpePipeImg, link: '/hdpe-pipe' },
        { id: 28, title: 'Rubber Spares', description: 'RUBBER SHEETS AND PARTS', img: rubberSparesImg, link: '/rubber-spares' },
    ];


    return (
        <>
            <SEO
                title="Our Products"
                description="Explore our wide range of products including mining ventilation systems, hose shields, wire & cables, safety products, and more."
                keywords={["Mining Products", "Industrial Spares", "Hose Shield", "Ventilation", "Wire and Cables"]}
            />
            <div className="text-white py-5 text-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${productsHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 0' }}>
                <Container>
                    <h1 className="fw-bold display-4">Our Products</h1>
                    <p className="lead text-white-50 fs-4">Engineered for durability and performance.</p>
                </Container>
            </div>

            {/* Prime Products */}
            <Container className="section-padding" id="prime-products">
                <h3 className="mb-4 border-start border-5 border-warning ps-3">Prime Products</h3>
                <Row className="g-4">
                    {primeProducts.map((product) => (
                        <Col md={4} key={product.id}>
                            <Card className="h-100 card-hover shadow-sm overflow-hidden">
                                <div className="position-relative">
                                    <Card.Img variant="top" src={product.img} style={{ height: '250px', objectFit: 'contain', width: 'auto', margin: '0 auto', display: 'block' }} />
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold text-truncate" title={product.title}>{product.title}</Card.Title>
                                    <Card.Text className="text-muted small">
                                        {product.description}
                                    </Card.Text>
                                    {product.external ? (
                                        <a href={product.link} target="_blank" rel="noopener noreferrer" className="stretched-link text-accent fw-bold text-decoration-none">
                                            Visit Website &rarr;
                                        </a>
                                    ) : (
                                        <Link to={product.link} className="stretched-link text-accent fw-bold text-decoration-none">
                                            Learn More &rarr;
                                        </Link>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Products;
