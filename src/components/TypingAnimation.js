import React, { useState, useEffect } from "react";
import '../App.css' 

const TypingAnimation = ({ text, level }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(displayedText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [displayedText, currentIndex, text]);

  useEffect(() => {
    const cursorIntervalId = setInterval(() => {
      setShowCursor(!showCursor);
    }, 500);

    return () => clearInterval(cursorIntervalId);
  }, [showCursor]);

  const TextComponent = level || "p";

  return (
    <TextComponent>
      {displayedText}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </TextComponent>
  );
};

export default TypingAnimation;
