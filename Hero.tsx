import React from 'react';
import './Hero.css'; // Assuming you have a separate CSS file for Hero component styles

const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to My Portfolio</h1>
                <p className="hero-description">I am a passionate developer with a knack for creating stunning web experiences.</p>
                <a href="#projects" className="cta-button">View My Work</a>
            </div>
            <div className="hero-3d-animation">
                {/* Placeholder for 3D animation or model */}
            </div>
        </div>
    );
};

export default Hero;