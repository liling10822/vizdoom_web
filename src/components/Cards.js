import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
function Cards() {
  return (
    <div className='cards'>
      <h1>Final Project Resources</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          
            <CardItem
              src="/images/img1.jpg"
              text='Technical Paper for VizdoomBot'
              label='Technical Paper'
              path='/TD'
            />
            <CardItem
              src='/images/img2.jpg'
              text='EDD for final project'
              label='EDD'
              path='/EDD'
            />
            <CardItem
              src='/images/img3.jpg'
              text='Explore on GitHub'
              label='GitHub'
              path='/github'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
