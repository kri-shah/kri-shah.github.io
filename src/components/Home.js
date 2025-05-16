import React from 'react';
import TypingAnimation from './TypingAnimation';
import './Home.css' 

function Home() {
  const text = "Hi I'm Krish!";
  const text2 = "I'm a SWE Intern, Analyst, and Undergrad @ UConn!";
  
  // State to keep track of when to show the second TypingAnimation component
  const [showSecondTyping, setShowSecondTyping] = React.useState(false);
  
  // Function to set showSecondTyping state to true after 3 seconds
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSecondTyping(true);
    }, 2000); // Delay of 3 seconds 
    
    // Clean up function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run this effect only once on mount
  
  return (
    
    <div className="HomePage">
      <TypingAnimation text={text} level="h5" />
        
      {showSecondTyping && <TypingAnimation text={text2} level="p1" />}
    </div>
    
    
   

  );
}

export default Home;
