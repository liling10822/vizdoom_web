import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import '../../../src/components/Footer.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            VizdoomBot <i class="fas fa-viruses"/>
            </Link>
          </div>
          <small class='website-rights'>VizdoomBot © 2021</small>
          
        </div>
      </section>
 
    </>
  );
}

export default Home;