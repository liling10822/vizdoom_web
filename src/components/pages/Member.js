import React from 'react';
import '../../App.css';
import '../../../src/components/Footer.css';
import Members from '../Members';
import { Link } from 'react-router-dom';

export default function Member() {
  return (
    <>
    <h1 className='members' color = 'white'></h1>;
      <Members />
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
