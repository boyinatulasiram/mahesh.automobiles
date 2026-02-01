import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useLayoutEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

// Prime Products Imports
import HoseShield from './pages/HoseShield';
import MiningVentilationSystem from './pages/MiningVentilationSystem';
import Tortek from './pages/Tortek';
import Safeplast from './pages/Safeplast';
import RamIndustries from './pages/RamIndustries';
import FireProduct from './pages/FireProduct';
import UniversalElectrode from './pages/UniversalElectrode';
import Deutz from './pages/Deutz';
import VehicleSeat from './pages/VehicleSeat';
import Spal from './pages/Spal';
import WindowGlass from './pages/WindowGlass';

// Other Products Imports
import UndergroundMiningSpare from './pages/UndergroundMiningSpare';
import RoofSupportSystem from './pages/RoofSupportSystem';
import DevelopmentWork from './pages/DevelopmentWork';
import ToolsHardware from './pages/ToolsHardware';
import SafetyProducts from './pages/SafetyProducts';
import WeldingAccessories from './pages/WeldingAccessories';
import RepairingWorks from './pages/RepairingWorks';
import BlastingCable from './pages/BlastingCable';
import HdpePipe from './pages/HdpePipe';
import Unbrako from './pages/Unbrako';
import Batteries from './pages/Batteries';
import RubberSpares from './pages/RubberSpares';

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />

            {/* Prime Products Routes */}
            <Route path="/hose-shield" element={<HoseShield />} />
            <Route path="/mining-ventilation-system" element={<MiningVentilationSystem />} />
            <Route path="/tortek" element={<Tortek />} />
            <Route path="/safeplast" element={<Safeplast />} />
            <Route path="/ram-industries" element={<RamIndustries />} />
            <Route path="/fire-product" element={<FireProduct />} />
            <Route path="/universal-electrode" element={<UniversalElectrode />} />
            <Route path="/deutz" element={<Deutz />} />
            <Route path="/vehicle-seat" element={<VehicleSeat />} />
            <Route path="/spal" element={<Spal />} />
            <Route path="/window-glass" element={<WindowGlass />} />

            {/* Other Products Routes */}
            <Route path="/underground-mining-spare" element={<UndergroundMiningSpare />} />
            <Route path="/roof-support-system" element={<RoofSupportSystem />} />
            <Route path="/development-work" element={<DevelopmentWork />} />
            <Route path="/tools-hardware" element={<ToolsHardware />} />
            <Route path="/safety-products" element={<SafetyProducts />} />
            <Route path="/welding-accessories" element={<WeldingAccessories />} />
            <Route path="/repairing-works" element={<RepairingWorks />} />
            <Route path="/blasting-cable" element={<BlastingCable />} />
            <Route path="/hdpe-pipe" element={<HdpePipe />} />
            <Route path="/unbrako" element={<Unbrako />} />
            <Route path="/batteries" element={<Batteries />} />
            <Route path="/rubber-spares" element={<RubberSpares />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
