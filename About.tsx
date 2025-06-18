import React from 'react';
import './About.css'; // Assuming you have a separate CSS file for styling

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                    I am a passionate developer with experience in building modern web applications.
                    My journey in technology has equipped me with a diverse skill set, including
                    front-end and back-end development, as well as a keen interest in 3D graphics and
                    interactive design.
                </p>
                <div className="about-3d-model">
                    {/* Placeholder for 3D model or animation */}
                    <h3>3D Model/Animation Here</h3>
                </div>
                <div className="about-summary">
                    <h3>Professional Experience</h3>
                    <ul>
                        <li>Company A - Role (Year - Year)</li>
                        <li>Company B - Role (Year - Year)</li>
                        <li>Company C - Role (Year - Year)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;