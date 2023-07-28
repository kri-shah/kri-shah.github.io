import React from 'react';
import '../App.css' 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TypingAnimation from './TypingAnimation';
import samplePDF1 from "./Krish_Shah_Resume.pdf";

function About() {
  const text = "About Me";
  const text2 = "Skills and Expierences";
    const [showSecondTyping, setShowSecondTyping] = React.useState(false);
    
    // Function to set showSecondTyping state to true after 3 seconds
    React.useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShowSecondTyping(true);
      }, 1900); // Delay of 3 seconds 
      
      // Clean up function to clear the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array to run this effect only once on mount
  
  return (
    <body id = "Abt">
      <body id = "Abt1">
        <div class="fade-in-image">
          <img src={require('./Krish.png')} alt="Pic of me"/> 
        </div>
      </body>
      
      <body id = "Abt2">
        <br></br>
        <div class="fade-in-image">
          <TypingAnimation text={text} level="h1" />

          <p1 id="pa">
            Hi, I'm Krish Shah! I'm a full-stack developer and AI 
            undergraduate researcher from the University of Connecticut. I am a rising sophomore studying 
            Computer Science and Engineering.

          </p1>
          <br/>
          <div id="abtme2"> 
            <div id="sne">
              {showSecondTyping && <TypingAnimation text={text2} level="h1" />}
            </div>
            <p1 id="pa2">
              I have experience using several languages and technologies and am most familiar with Python, Java, C++, 
              HTML, JavaScript, ReactJS, and CSS. Here are a few of my expierences:

            </p1>
          </div>

          </div>
        <br></br>
        <div class="fade-in-image">
        <div id="CA"> 
        <Carousel>
        <div id="slide1">
              <div id="pic4">
                <p></p>
              </div>
              <div id="txt1">
                <br></br>
                <h id="text1size"> Volunteer for Engineers Without Borders</h>
                <p id="t1s">
                -Collaborated with engineers and environmental experts to analyze data and develop strategies to enhance environmental sustainability in Hartford, CT.
                <br></br> <br></br> 
                -Conducted comprehensive research to gather relevant data, employing statistical methods and visualization tools to interpret and present findings effectively.

                </p>
              </div>
            </div>

            <div id="slide1">
              <div id="pic2">
                <p></p>
              </div>
              <div id="txt1">
                <br></br>
                <h id="text1size">Robotics Programmer for FROST Robotics</h>
                <p id="t1s">-Program combat robots using Robot Operating System and C++.
                  <br></br> 
                  <br></br> 
                  -Collaborate closely with mechanical and electrical engineers to integrate software and hardware components seamlessly, resulting in highly efficient and reliable combat robots.
                  <br></br><br></br> 
                  -Conduct thorough testing and debugging of robot software to ensure optimal battle performance, responsiveness, and precision.

                </p>
              </div>
            </div>
            
            
            <div id="slide1">
              <div id="pic1">
                <p></p>
              </div>
              <div id="txt1">
                <br></br>
                <h id="text1size"> Volunteer for America Reads</h>
                <p id="t1s">
                  -Tutored third-grade students at Willington Elementary School (2023) and tutored fifth-grader students (2022) at 
                  <br></br> <br></br> 
                  -North Windham Elementary School on reading comprehension and algebra skills.</p>
              </div>
            </div>
            
            <div id="slide1">
              <div id="pic3">
                <p></p>
              </div>
              <div id="txt1">
                <br></br>
                <h id="text1size"> Crew Member for Dunkin' </h>
                <p id="t1s">                    
                  -Oversee inventory for wide-ranging product catalog using Excel
                  <br/><br/>
                  -Closely monitor cash handling and balancing registers to ensure proper cash flow distribution
                  <br/><br/>
                  -Collaborate with team members to ensure smooth operations during peak hours, contributing to improved customer satisfaction and increased sales.

                </p>
              </div>   
            </div>
          </Carousel>
          
          
          </div>
          <a id="resume2" href={samplePDF1} target="_blank" rel="noreferrer">Click here or above for my full resume!</a>
        </div>
        
        
        
      
      </body>
      
    </body>
  );
}

export default About;