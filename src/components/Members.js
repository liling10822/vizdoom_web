import React from 'react';
import './Members.css';
import MembersItem from './MembersItem';
function Members() {
  return (
    <div className='cards'>
      <div className='members__container'>
          
        <div className='members__wrapper'>
          <ul className='members__items'>
          
            <MembersItem
              src="/images/monster.png"
              text='Zack Houghton'
              label='zack'
              path='/zack'
            />
            
            <MembersItem
            src="/images/monster2.png"
            text='Christopher Williams'
            label='chris'
            path='/chris'
          />
            <MembersItem
              src='/images/monster1.png'
              text='Kaushik Vishwanath'
              label='kaushik'
              path='/kaushik'
            />
          </ul>
          <ul className='members__items'>
            <MembersItem
              src='/images/monster3.png'
              text='Nathan Shangkala'
              label='nath'
              path='/nath'
            />
            <MembersItem
              src="/images/monster4.png"
              text='Harry Zhou'
              label='harry'
              path='/harry'
            />
            
            
            <MembersItem
              src='/images/monster5.png'
              text='Nghi Le'
              label='nghi'
              path='/nghi'
            />
            <MembersItem
              src='/images/monster6.png'
              text='Ling Li'
              label='ling'
              path='/ling'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Members;
