import React from 'react';
import './Projects.css';
import TypingAnimation from './TypingAnimation';

import portfolioImg from '../port.png';
import compresssImg from '../zip.jpeg';
import mmaiImg from '../cnn.png';
import dvrImg from '../dvr.jpeg';
import SCImg from '../Seam Carving.png'
import OKCImg from '../OKC.png'
const projects = [
  {
    name: 'MMAI',
    description: 'Developed a full-stack machine learning web application by training a predictive model for MMA fight outcomes, achieving a 70% accuracy',
    technologies: 'TensorFlow, Keras, Scikit-learn, Flask, JavaScript, HTML/CSS',
    githubLink: 'https://github.com/kri-shah/MMAI',
    image: mmaiImg
  },
  {
    name: 'Multithreaded DVR Protocol',
    description: 'Implemented a multithreaded DVR simulation in C with pthreads, incorporating dynamic network topology changes for realism',
    technologies: 'C, POSIX Threads, Networks',
    githubLink: 'https://github.com/kri-shah/C-Projects',
    image: dvrImg
  },
  {
    name: 'Data Compression /Decompression Tool',
    description: 'Engineered a high-efficiency tool using advanced algorithms such as Huffman coding, Burrows-Wheeler Transform, and Move-to-Front coding',
    technologies: 'Python, Heapq, Radix Sort',
    githubLink: 'https://github.com/kri-shah/Data-Compression-Decompression-Tool',
    image: compresssImg
  },
  {
    name: 'Portfolio Website',
    description: 'Utilized React.js, HTML, CSS, and JavaScript to build an interactive showcase of professional accomplishments, projects, and skills',
    technologies: 'React.js, Node.js, JavaScript, HTML/CSS',
    githubLink: 'https://github.com/kri-shah/kri-shah.github.io',
    image: portfolioImg
  },
  {
    name: 'Seam Carving',
    description: 'Utilized Python and dynamic programming to develop and implement an algorithm for intelligent image resizing to remove vertical seams of similar pixels, minimizing image artifacts',
    technologies: 'Python, Numpy, Imagematrix, Matplotlib (Benchmarking)',
    githubLink: 'https://github.com/kri-shah/Seam-Caving',
    image: SCImg
  },
  {
    name: 'Basketball Database',
    description: 'Designed a PostgreSQL database schema for Oklahoma City Thunder statistics, utilizing Python scripts and established data consistency and integrity by implementing foreign keys within the database',
    technologies: 'SQL, PostgreSQL, Python, Psycopg2',
    githubLink: 'https://github.com/kri-shah/',
    image: OKCImg
  }
  
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.name} className="project-image" />
    <h2>{project.name}</h2>
    <p>{project.description}</p>
    <h3>{project.technologies}</h3>
    <a id="github" href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
      <img src={require('../github.png')} alt="GitHub" className="github-icon" />
    </a>
  </div>
);

const App = () => (
  <div className="App">
    <header className="App-header">
    <TypingAnimation text="Projects" level="h1" />
    </header>

    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
);

export default App;
