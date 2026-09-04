import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords = [], url }) => {
    // Core keywords to include on every page
    const location = useLocation();
    const metaUrl =
        url || `https://www.maheshautomobile.com${location.pathname}`;
    const coreKeywords = [
        "Mahesh Automobiles",
        "Mahesh Auto",
        "Authorized Dealer",
        "Gulabpura",
        "Bhilwara",
        "Rajasthan",
        "India",
        "Banwari Chouraha",
        "Mining Solutions",
        "Automobile Spares",
        "Industrial Supplies",
        "KL Somani",
        "Shivam Somani"
    ];

    // Combine prop keywords with core keywords and deduplicate
    const allKeywords = [...new Set([...keywords, ...coreKeywords])].join(", ");

    const siteTitle ="Mahesh Automobiles | Auto Parts & Mining Equipment in Gulabpura, Bhilwara";
    const metaTitle = title ? `${title} | Mahesh Automobiles` : siteTitle;
    const metaDescription = description || "Mahesh Automobiles is an auto parts and mining equipment supplier in Gulabpura, Bhilwara, Rajasthan, offering mining spares, HEMM parts, industrial equipment, fasteners, power tools, hoses and safety products.";
    //const metaUrl = url || "https://www.maheshautomobile.com/";
    const siteImage = "https://www.maheshautomobile.com/assets/logo.png"; // Assuming a logo exists or we will use a default

    // JSON-LD Structured Data for LocalBusiness
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Mahesh Automobiles",
        "image": siteImage,
        "telephone": "+91 90014 60794",
        "email": "maheshautogpa@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Banwari Chouraha",
            "addressLocality": "Gulabpura",
            "addressRegion": "Rajasthan",
            "postalCode": "311021",
            "addressCountry": "IN"
        },
        "url": "https://www.maheshautomobile.com/",
        "founder": [
            {
                "@type": "Person",
                "name": "KL Somani",
                "jobTitle": "CEO"
            },
            {
                "@type": "Person",
                "name": "Shivam Somani",
                "jobTitle": "Manager"
            }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.9080", // Approximate coordinates for Gulabpura
            "longitude": "74.6567"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
        }
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={allKeywords} />
            <link rel="canonical" href={metaUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={metaTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={siteImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
