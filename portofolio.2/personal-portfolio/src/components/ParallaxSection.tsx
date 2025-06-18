import React from 'react';
import './ParallaxSection.css';

const ParallaxSection: React.FC = () => {
    return (
        <div className="parallax-container">
            <div className="parallax-layer layer-back"></div>
            <div className="parallax-layer layer-base">
                <h1>Welcome to My Portfolio</h1>
                <p>Scroll down to explore my work and experiences.</p>
            </div>
            <div className="parallax-layer layer-front"></div>
        </div>
    );
};

export default ParallaxSection;