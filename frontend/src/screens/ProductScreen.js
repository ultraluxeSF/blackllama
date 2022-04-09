import React from 'react';
import data from '../data';
import Product from '../components/Product';



export default function ProductScreen(props) {
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
    
  <>
  <div className='productpageinfocontainer'>
    <div className='leftside'>
      <img className='largeimg' src={tshirt.image} alt={tshirt.name} ></img>
    </div>
    <div className='rightside'>
      <h1 className='prodtitle'>{tshirt.name}</h1>
      <p className='prodcategory'>{tshirt.category}</p>
      <p className='prodspectitle'><span className="designerspan">Designer: </span><a href={`/user/${tshirt.designer}`} className="proddesigner">{tshirt.designer}</a></p>

      <p className='prodspectitle'>Available sizes:</p>
      <div className='sizes-container'>
        <div className='size-tangle1' tabindex="2">S</div>
        <div className='size-tangle' tabindex="2">M</div>
        <div className='size-tangle' tabindex="2">L</div>
        <div className='size-tangle' tabindex="2">XL</div>
      </div>
      <div className='sizes-container2'>
        <div className='size-tangle1' tabindex="2">2XL</div>
        <div className='size-tangle' tabindex="2">3XL</div>
        <div className='size-tangle' tabindex="2">4XL</div>
        <div className='size-tangle' tabindex="2">5XL</div>
      </div>
      <p className='discountedprodprice'>${(tshirt.price*.75).toFixed(2)}<sup className='discountamount'>25% OFF</sup><span className='prodprice'> ${tshirt.price}</span></p>
    <button className='add-to-cart' tabindex="3">Add to cart</button>
    </div>
  </div>

        <section className="products">
        <span className="productstitle">More Featured Designs</span>
        <a href={`/category/tshirts`} className="browseall">All designs &gt;</a>

          <table className="maintable">
              {data.tshirts.slice(3, 6).map((product) => (
                  <Product key={product._id} product={product}></Product>
              ))}
              {data.hoodies.slice(4, 6).map((product) => (
                  <Product key={product._id} product={product}></Product>
              ))}
              {data.pins.slice(4, 6).map((product) => (
                  <Product key={product._id} product={product}></Product>
              ))}
              {data.posters.slice(3, 4).map((product) => (
                  <Product key={product._id} product={product}></Product>
              ))}
          </table>
        </section>

  </>
  
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
  <div>Ooops! Product not found :(</div>
  </>
  
)

};
