import React from 'react';
import data from '../data';


export default function TshirtsScreen(props) {
  
  //match the id of the clicked t-shirt from the data
  const tshirt = data.tshirts.find((x) => x.name === props.match.params.name);
  const hoodie = data.hoodies.find((x) => x.name === props.match.params.name);
  const cases = data.cases.find((x) => x.name === props.match.params.name);
  const pin = data.pins.find((x) => x.name === props.match.params.name);
  const poster = data.posters.find((x) => x.name === props.match.params.name);
  const mug = data.mugs.find((x) => x.name === props.match.params.name);


//Return T-Shirt info
  if(!hoodie && !cases && !pin && !poster && !mug){
    return (
    <div className='leftside'>
      <img className='largeimg' src={tshirt.image} alt={tshirt.name} ></img>
    </div>
    ) 
  }
//Return Hoodie info
  else if(!tshirt && !cases && !pin && !poster && !mug){
    return (
      <div className='leftside'>
        <img className='largeimg' src={hoodie.image} alt={hoodie.name} ></img>
      </div>
      ) 
  }
//Return Phone Case info
  else if(!tshirt && !hoodie && !pin && !poster && !mug){
    return (
      <div className='leftside'>
        <img className='largeimg' src={cases.image} alt={cases.name} ></img>
      </div>
      ) 
  }
//Return Pin info
  else if(!tshirt && !cases && !hoodie && !poster && !mug){
    return (
      <div className='leftside'>
        <img className='largeimg' src={pin.image} alt={pin.name} ></img>
      </div>
      ) 
  }
//Return Poster info
else if(!tshirt && !cases && !hoodie && !pin && !mug){
  return (
    <div className='leftside'>
      <img className='largeimg' src={poster.image} alt={poster.name} ></img>
    </div>
    ) 
}
//Return Mug info
else if(!tshirt && !cases && !hoodie && !poster && !pin){
  return (
    <div className='leftside'>
      <img className='largeimg' src={mug.image} alt={mug.name} ></img>
    </div>
    ) 
}
  return (
    <>
    <div className='leftside'>
      <img className='largeimg' src={tshirt.image} alt={tshirt.name} ></img>
    </div>
    </>
    
  )

}
