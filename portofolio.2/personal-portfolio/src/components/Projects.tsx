import React from 'react';

const projectsData = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        imageUrl: '/assets/project1.jpg',
        link: 'https://project-one.com'
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        imageUrl: '/assets/project2.jpg',
        link: 'https://project-two.com'
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three.',
        imageUrl: '/assets/project3.jpg',
        link: 'https://project-three.com'
    }
];

const Projects: React.FC = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="projects-gallery">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <div className="project-image" style={{ backgroundImage: `url(${project.imageUrl})` }}>
                                <div className="project-hover">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;