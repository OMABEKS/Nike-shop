import React from 'react';
import '../Cards.css'
import CardItem from '../CardItem'




function Product() {
  return (
    <div className='cards'>
      <h1>Men's Trainers & Shoes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e1b2266-e664-4ddc-ae5e-511453bb5b6b/air-max-270-g-golf-shoe-gTpCFg.png'
              text='ExploNike Air Max 270 G'
              label='$220'
              path='/products'
            />
            
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoe-CBDjT0.png'
              text='Nike Blazer Mid 77 Vintage'
              label='$140'
              path='/products'
            />
          </ul>


          <ul className='cards__items'>
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b0f19679-22d7-4b73-9408-34fc05141a8d/jordan-max-aura-3-shoe-PJ01hP.png'
              text='Jordan Max Aura 3'
              label='$170'
              path='/products'
            />
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/69a820fe-9ac4-417f-a0b9-b4f44a408281/air-force-1-low-07-shoes-kGqrWx.png'
              text='Nike Air Force 1 Low 07'
              label='$210'
              path='/products'
            />
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b45a0b64-77ad-424a-bec7-7bbb47b2a4ad/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-KG0Sn9.png'
              text='Nike Pegasus Trail 3 GORE-TEX'
              label='$230'
              path='/products'
            />
          </ul>



          <ul className='cards__items'>
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3d8a220a-9a07-4f31-a6c0-9396d3f14686/custom-nike-vapor-edge-pro-by-you.png'
              text='Nike a Phantom GT Academy By You'
              label='%160'
              path='/products'
            />
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e361b068-3970-4609-b29d-6f0f09f129a1/air-zoom-alphafly-next-road-racing-shoes-mGK8M0.png'
              text='Nike Air Zoom Alphafly NEXT %'
              label='$299.99'
              path='/products'
            />
            <CardItem
              src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3270b875-2d46-4000-ab1d-e72864df223a/air-jordan-1-mid-shoes-cQ5Jpt.png'
              text='Air Jordan 1 Mid'
              label='$160'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}




export default Product;