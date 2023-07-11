import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import TypingAnimation from './TypingAnimation';

function Contact() {
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');

  useEffect(() => {
    console.log('Message 1:', message);
  }, [message]);

  useEffect(() => {
    console.log('Message 2:', message2);
  }, [message2]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const messageValue = message;
      const message2Value = message2;
  
      // Simulate sending the messages to the server
      await axios.post('/api/save-message', { message: messageValue });
      await axios.post('/api/save-message', { message: message2Value });
  
      // Reset the forms
      setMessage('');
      setMessage2('');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const text = "Send me a message!";
  return (
    <div id="Contact">
      <TypingAnimation text={text} level="h1" />
      
      
      
      <div id="Email">
      <p1>Email Address: </p1>
      
      <form onSubmit={handleSubmit}>
        <textarea
          id="TextBox2"
          value={message2}
          onChange={(e) => setMessage2(e.target.value)}
          placeholder="Server currently down :("
          rows={4}
          cols={50}
        ></textarea>
        </form>
        </div>

        
        <p1>Your message: </p1>
        <form onSubmit={handleSubmit}>
        <textarea
          id="TextBox"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Server currently down :("
          rows={4}
          cols={50}
        ></textarea>
        <br />
        <button id="send" type="submit">Send</button>
      </form>
      <br/>
      <div id="Contacttxt">
        <p></p>

      </div>
      
      <div id="OtherContacts">
       

        <a id="GitHub" href={'https://github.com/kri-shah'} target="_blank" rel="noreferrer">GitHub</a>        
        <a id="Link" href={'https://www.linkedin.com/in/krish-shah-045680227/'} target="_blank" rel="noreferrer">Linkedin</a>
        <a id="EmailMe" href={"mailto: krishdshah0@gmail.com"} target="_blank" rel="noreferrer">Email</a>

        
      </div>
    </div>
  );
}

export default Contact;
