import React, { useState } from 'react';
import '../Projects.css';
import TypingAnimation from './TypingAnimation';

function Projects() {
  const text = "Here are a few of my projects!";
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const [isHovered4, setIsHovered4] = useState(false);

  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  return (
    <div id="ProjPage"> 
      <br/>
      <TypingAnimation text={text} level="h4" />
    
      <div id="projects-container">
        <a
          id="proj1"
          href="https://github.com/kri-shah/kri-shah.github.io"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div id="proj1img"></div>
          <h5>Portfolio Website</h5>
          <p1>Personal portfolio website built using ReactJS, HTML, CSS, and JavaScript, Node.js</p1>
        </a>
        <a
          id="proj2"
          href="https://github.com/kri-shah/Hill-Code"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <div id="proj2img"></div>
          <h3>Hill Cipher</h3>
          <p1>C++ implementation of the Hill cipher: a polygraphic substitution cipher based on linear algebra.</p1>
        </a>
        <a
          id="proj3"
          href="https://github.com/kri-shah/Honors-Project"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <div id="proj3img"></div>
          <h3>"Are You the One"</h3>
          <p1>Emulates different playing algorithms for MTV's hit show "Are You the One."</p1>
        </a>
        <a
          id="proj4"
          href="https://github.com/kri-shah/Hill-Code"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
        >
          <div id="proj4img"></div>
          <h3>Sequence Detector</h3>
          <p1>A sequence detector built using shift registers. Output goes high for 0001 or 1110.</p1>
        </a>
      </div>
      <br/><br/><br/><br/>
      <div id="OC"> 
        <a id="GitHub2" href={'https://github.com/kri-shah'} target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div id="gittxt1" style={{ display: isHovered ? 'block' : 'none' }}>
        <p1>Click to view the Github!</p1>
      </div>
      
      <div id="gittxt2" style={{ display: isHovered2 ? 'block' : 'none' }}>
        <p1>Click to view the Github!</p1>
      </div>
      

      <div id="gittxt3" style={{ display: isHovered3 ? 'block' : 'none' }}>
        <p1>Click to view the Github!</p1>
      </div>

      <div id="gittxt4" style={{ display: isHovered4 ? 'block' : 'none' }}>
        <p1>Click to view the Github!</p1>
      </div>

  
    </div>
  );
}

export default Projects;
