import React, { useEffect, useState } from 'react'
// import data from '../data';
import Product from '../components/Product';
import axios from 'axios';



export default function ProductScreen(props) {
  //match the id of the clicked t-shirt from the data
  // const tshirt = tshirts.find((x) => x.name === props.match.params.name);
  // const hoodie = hoodies.find((x) => x.name === props.match.params.name);
  // const cases = casess.find((x) => x.name === props.match.params.name);
  // const pin = pins.find((x) => x.name === props.match.params.name);
  // const poster = posters.find((x) => x.name === props.match.params.name);
  // const mug = mugs.find((x) => x.name === props.match.params.name);
  const productName = props.match.params.name;
  const [tshirts, setTshirts] = useState([]);
  const [hoodies, setHoodies] = useState([]);
  const [casess, setCases] = useState([]);
  const [pins, setPins] = useState([]);
  const [posters, setPosters] = useState([]);
  const [mugs, setMugs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/tshirts');
      setTshirts(data);
      // const t = {data.find((x) => x.name === props.match.params.name)
    }
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/hoodies');
      setHoodies(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/cases');
      setCases(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/pins');
      setPins(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/posters');
      setPosters(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/mugs');
      setMugs(data);
    }
    fetchData();
  }, []);


  //Return T-Shirt info
  // if(tshirts){
  if (!hoodies && !casess && !pins && !posters && !mugs) {
    return (

      <>
        <div className='productpageinfocontainer'>
          <div className='leftside'>
            <img className='largeimg' src={tshirts.image} alt={tshirts.name} ></img>
          </div>
          <div className='rightside'>
            <h1 className='prodtitle'>{tshirts.name}</h1>
            <p className='prodcategory'>{tshirts.category}</p>
            <p className='prodspectitle'><span className="designerspan">Designer: </span><a href={`/user/${tshirts.designer}`} className="proddesigner">{tshirts.designer}</a></p>

            <p className='prodspectitle'>Sizes:</p>
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
            {/* Stock check */}
            <p className='prodspectitle'>Availability: {tshirts.countInStock > 0 ?
              (<span className='instock'>In Stock</span>) :
              (<span className='outofstock'>Out of Stock</span>)}
              {tshirts.countInStock > 0 ?
                (<span className='stockcount'>{tshirts.countInStock}<span className='availabletext'> in stock</span></span>) :
                (<></>)}
            </p>
            {/* Stock check end */}
            <p className='discountedprodprice'>${(tshirts.price * .75).toFixed(2)}<sup className='discountamount'>25% OFF</sup><span className='prodprice'> ${tshirts.price}</span></p>
            {tshirts.countInStock > 0 ? (<button className='add-to-cart' tabindex="3">Add to cart</button>) : (<button className='add-to-cart-outofstock' tabindex="3">Add to cart</button>)}
            {tshirts.countInStock > 0 ? (<></>) :
              (<p className='checkotherstext'>
                Hey! Seems this product is out of stock. But don't worry, we have other <a href="/category/tshirts" className='coolstufflink'>cool stuff</a> to check out!</p>)}
          </div>
        </div>
        {/* FEATURED PRODUCTS BELOW V */}
        <section className="products">
          <span className="productstitle">More Featured Designs</span>
          <a href={`/category/tshirts`} className="browseall">All designs &gt;</a>

          <table className="maintable">
            {tshirts.slice(3, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
            {hoodies.slice(4, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
            {pins.slice(4, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
            {posters.slice(3, 4).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </table>
        </section>

      </>

    )

  }

  // //Return Hoodie info
  // else if(!tshirts && !casess && !pins && !posters && !mugs){
  //   return (
  //     <div className='leftside'>
  //       <img className='largeimg' src={hoodies.image} alt={hoodies.name} ></img>
  //     </div>
  //     ) 
  // }

  // //Return Phone Case info
  // else if(!tshirts && !hoodies && !pins && !posters && !mugs){
  //   return (
  //     <div className='leftside'>
  //       <img className='largeimg' src={casess.image} alt={casess.name} ></img>
  //     </div>
  //     ) 
  // }

  // //Return Pin info
  // else if(!tshirts && !casess && !hoodies && !posters && !mugs){
  //   return (
  //     <div className='leftside'>
  //       <img className='largeimg' src={pins.image} alt={pins.name} ></img>
  //     </div>
  //     ) 
  // }

  // //Return Poster info
  // else if(!tshirts && !casess && !hoodies && !pins && !mugs){
  // return (
  //   <div className='leftside'>
  //     <img className='largeimg' src={posters.image} alt={posters.name} ></img>
  //   </div>
  //   ) 
  // }

  // //Return Mug info
  // else if(!tshirts && !casess && !hoodies && !posters && !pins){
  // return (
  //   <div className='leftside'>
  //     <img className='largeimg' src={mugs.image} alt={mugs.name} ></img>
  //   </div>
  //   ) 
  // }
  return (
    <>
      <div>Ooops! Product not found :(</div>
    </>

  )

};
