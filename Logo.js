import React from 'react';
// import Tilt from 'react-tilt'; 
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br1 " options={{ max : 155 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa2">
          <img style={{paddingTop: '20px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;