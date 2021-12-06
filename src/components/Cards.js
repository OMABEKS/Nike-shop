import React from 'react';
import './Cards.css';
import CardItem from './CardItem';




function Cards() {
  return (
    <div className='cards'>
      <h1>Men's Trainers & Shoes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e1b2266-e664-4ddc-ae5e-511453bb5b6b/air-max-270-g-golf-shoe-gTpCFg.png'
              text='ExploNike Air Max 270 G'
              label='About shoes'
              path='/products'
            />
            
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e1b2266-e664-4ddc-ae5e-511453bb5b6b/air-max-270-g-golf-shoe-gTpCFg.png'
              text='Nike Air Max 270 G'
              label='About shoes'
              path='/products'
            />
          </ul>


          <ul className='cards__items'>
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e1b2266-e664-4ddc-ae5e-511453bb5b6b/air-max-270-g-golf-shoe-gTpCFg.png'
              text='Nike Air Max 270 G'
              label='About shoes'
              path='/products'
            />
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e1b2266-e664-4ddc-ae5e-511453bb5b6b/air-max-270-g-golf-shoe-gTpCFg.png'
              text='Nike Air Max 270 G'
              label='About shoes'
              path='/products'
            />
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e1b2266-e664-4ddc-ae5e-511453bb5b6b/air-max-270-g-golf-shoe-gTpCFg.png'
              text='Nike Air Max 270 G'
              label='About shoes'
              path='/products'
            />
          </ul>



          <ul className='cards__items'>
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e1b2266-e664-4ddc-ae5e-511453bb5b6b/air-max-270-g-golf-shoe-gTpCFg.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='About shoes'
              path='/products'
            />
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e1b2266-e664-4ddc-ae5e-511453bb5b6b/air-max-270-g-golf-shoe-gTpCFg.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='About shoes'
              path='/products'
            />
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e1b2266-e664-4ddc-ae5e-511453bb5b6b/air-max-270-g-golf-shoe-gTpCFg.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='About shoes'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}




export default Cards;