import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <ul className='profile'>
          <div class='footer-link-items'>
          <h2>Harry Zhou</h2>
            <Link to='/harry' target="_blank">LinkedIn Profile <i class="fab fa-linkedin"></i></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Christopher Williams</h2>
            <Link to='/chris' target="_blank">LinkedIn Profile <i class="fab fa-linkedin"></i></Link>
          </div>
          </ul>
        </div>
        <div className='footer-link-wrapper'>
          <ul className='profile'>
          <div class='footer-link-items'>
            <h2>Nathan Shangkala</h2>
            <Link to='/nath' target="_blank">LinkedIn Profile <i class="fab fa-linkedin"></i></Link>
          </div>
          <div class='footer-link-items'>
          <h2>Nghi Le</h2>
            <Link to='/nghi' target="_blank">LinkedIn Profile <i class="fab fa-linkedin"></i></Link>
          </div>
          </ul>
        </div>
        <div className='footer-link-wrapper'>
          <ul className= 'prfile'>
          <div class='footer-link-items'>
          <h2>Zack Houghton</h2>
            <Link to='/zack' target="_blank">LinkedIn Profile <i class="fab fa-linkedin"></i></Link>
          </div>
          <div class='footer-link-items'>
          <h2>Ling Li</h2>
            <Link to='/ling' target="_blank">LinkedIn Profile <i class="fab fa-linkedin"></i></Link>
          </div>
          </ul>
          <ul className= 'prfile'>
          <div class='footer-link-items'>
            <h2>Kaushik Vishwanath</h2>
            <Link to='/kaushik' target="_blank">LinkedIn Profile <i class="fab fa-linkedin"></i></Link>
          </div>
          </ul>
        </div>
      </div>
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
    </div>
  );
}

export default Footer;
