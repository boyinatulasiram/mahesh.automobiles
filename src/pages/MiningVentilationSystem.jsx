import React from 'react';
import ProductGallery from '../components/ProductGallery';

import img1 from '../assets/products/mining_ventilation/underground_ventilation_fan_1.png';
import img2 from '../assets/products/mining_ventilation/energy_saving_ventilation_fan_3.png';
import img3 from '../assets/products/mining_ventilation/energy_saving_ventilation_fan_3.png';
import img4 from '../assets/products/mining_ventilation/complete_ducting_system_4.png';
import img5 from '../assets/products/mining_ventilation/energy_saving_ventilation_fan_5.png';


const MiningVentilationSystem = () => {
  const products = [
    { title: "Underground Ventilation Fan", 
      description: `
       "Mining ventilation is defined as a combined system of shafting, ducting, and a well-designed combination of fans. Mine ventilation is a basic need for Mining industries.

Mining ventilation fans are used to supply adequate oxygen for the workforce and dilute and exhaust dangerous gasses in the underground mine.",
       `,
       img: img1 },
    { title: "Energy Saving Ventilation Fan",
       description: `ventilation solution for tunneling and underground mining operations, including system design and installation of fan stations and ducting. Our Serpent Ventilation System has been tried and tested in hundreds of underground installations. The system is composed of highly efficient, low-noise fans and durable PVC-coated ventilation ducting. Our experts can help you design and install low-cost ventilation to reduce your energy consumption by up to 15-20% and to help reduce carbon dioxide. And with our Serpent Automatic, which adjusts the fan speed, you will have an automatic ventilation control.`,
       img: img2 },
    { title: "Energy Saving Ventilation Fan", 
      description: `Industrial duct systems are used for supply or exhaust, are under positive or negative pressure, are of heavy or light duty construction, convey clean and dirty airstreams, are constructed of metal, plastic, or fabric materials, and are assembled together with flanges, clamps, slip fit, or welding.  Duct systems include straight lengths or sections of duct, transitions, elbows, and bends, enlargements or contractions, hoods, discharge stacks, and hangers or supports.`, 
      img: img5 }
  ];

  return (
    <>
    <SEO
        title="Mining Ventilation Systems | Mining Equipment | Mahesh Automobiles"
        description="Mahesh Automobiles supplies mining ventilation systems and equipment for mining applications in Gulabpura, Bhilwara, Rajasthan."
        keywords={[
            "mining ventilation system",
            "mining ventilation equipment",
            "underground mining ventilation",
            "mining ventilation Gulabpura",
            "mining ventilation Bhilwara",
            "mining equipment Gulabpura",
            "mining equipment Bhilwara",
            "underground mining equipment",
            "Mahesh Automobiles"
        ]}
    />
    <ProductGallery 
      title="MINING VENTILATION SYSTEMS" 
      products={products} 
    />
    </>
  );
};

export default MiningVentilationSystem;
