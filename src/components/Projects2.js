import React from 'react';
import styled from 'styled-components';

const Projects2 = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A cool web application built with React and Node.js',
      image: 'https://via.placeholder.com/300x200',
      githubUrl: 'https://github.com/yourusername/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'An iOS app developed using Swift and CoreData',
      image: 'https://via.placeholder.com/300x200',
      githubUrl: 'https://github.com/yourusername/project2',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A machine learning model for image classification',
      image: 'https://via.placeholder.com/300x200',
      githubUrl: 'https://github.com/yourusername/project3',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'A responsive website for a local business',
      image: 'https://via.placeholder.com/300x200',
      githubUrl: 'https://github.com/yourusername/project4',
    },
  ];

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <ProjectsWrapper>
      <Title>My Projects</Title>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => handleProjectClick(project.githubUrl)}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

export default Projects2;
