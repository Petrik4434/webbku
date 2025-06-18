import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Tech Company',
            date: '2021 - Present',
            description: 'Developing innovative software solutions and collaborating with cross-functional teams.'
        },
        {
            title: 'Web Developer',
            company: 'Creative Agency',
            date: '2019 - 2021',
            description: 'Designed and implemented user-friendly websites and applications.'
        },
        {
            title: 'Intern',
            company: 'Startup Inc.',
            date: '2018',
            description: 'Assisted in the development of web applications and gained hands-on experience in coding.'
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <h2>Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <h3>{exp.title}</h3>
                        <h4>{exp.company}</h4>
                        <span>{exp.date}</span>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;