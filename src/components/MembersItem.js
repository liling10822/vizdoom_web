import React from 'react';
import { Link } from 'react-router-dom';

function MembersItem(props) {
  return (
    <>
      <li className='members__item'>
        <Link className='members__item__link' target="_blank" to={props.path}>
          <figure className='members__item__pic-wrap' data-category={props.label}>
            <img
              className='members__item__img'
              alt='scenario map'
              src={props.src}
            />
          </figure>
          <div className='members__item__info'>
            <h5 className='members__item__text'>{props.text} 
            <h6 className='members_item_profile'>LinkedIn Profile <i class="fab fa-linkedin" ></i></h6>
            </h5>
          </div> 
        </Link>
      </li>
    </>
  );
}

export default MembersItem;
