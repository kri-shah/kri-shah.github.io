import { Link } from 'react-router-dom';
import '../App.css';
import samplePDF1 from "./Krish_Shah_Resume.pdf";

function Header() { 
  return (
    <nav>
      <ul style={{ background: '#203166', display: 'flex', justifyContent: 'space-between', padding: '0 20px', }}> 
      <li style={{ listStyle: 'none', margin: '0', marginRight: 'auto'}}>
          <Link to="/">Home</Link>
        </li>


       

        <li style={{ listStyle: 'none', margin: '0' }}>
          <Link to="/project">Projects</Link>
        </li>
        <li style={{ listStyle: 'none', margin: '0'}}>
          <a href={samplePDF1} target="_blank" rel="noreferrer">Resume</a>
        </li>
        <li style={{ listStyle: 'none', margin: '0'}}>
          
          <Link to="/contact">Contact</Link>
        </li>
        <li style={{ listStyle: 'none', margin: '0' }}>
          <Link to="/about">About</Link>
        </li>
        

       
       
       
      </ul>
    </nav>
  );
}

export default Header;
