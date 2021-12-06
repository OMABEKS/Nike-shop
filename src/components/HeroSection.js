import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src="https://images.pexels.com/photos/1876876/pexels-photo-1876876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      <h1>JUST DO IT</h1>

      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;