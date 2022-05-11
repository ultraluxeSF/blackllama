import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';
import { Link } from 'react-router-dom';
//import { useState } from 'react/cjs/react.production.min';



export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1)
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  }

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <section className="sec1">
            <Link to="#" className='catlinks'>All Designs</Link>
            <Link to="#" className='catlinks'>T-Shirts</Link>
            <Link to="#" className='catlinks'>Hoodies</Link>
            <Link to="#" className='catlinks'>Phone Cases</Link>
            <Link to="#" className='catlinks'>Stickers</Link>
            <Link to="#" className='catlinks'>Posters</Link>
            <Link to="#" className='catlinks'>Home Goods</Link>
          </section>

          <div className='productpageinfocontainer'>
            <div className='leftside'>
              <img className='largeimg' src={product.image} alt={product.name} ></img>
            </div>
            <div className='rightside'>
              <h1 className='prodtitle'>{product.name}</h1>
              <p className='prodcategory'>{product.category}</p>
              <p className='prodspectitle'><span className="designerspan">Designer: </span><a href={`/user/${product.designer}`} className="proddesigner">{product.designer}</a></p>

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

              <p className='prodspectitle'>Availability: {product.countInStock > 0 ?
                (<span className='instock'>In Stock</span>) :
                (<span className='outofstock'>Out of Stock</span>)}
                {product.countInStock > 0 ?
                  (<span className='stockcount'>{product.countInStock}<span className='availabletext'> in stock</span></span>) :
                  (<></>)}
              </p>

              <p className='discountedprodprice'>${(product.price * .75).toFixed(2)}<sup className='discountamount'>25% OFF</sup><span className='prodprice'> ${product.price}</span></p>
              {product.countInStock > 0 ? (
                <>
                  <li>
                    <div className=''>
                      <div className='selqty'>Select Quantity <select value={qty} onChange={e => setQty(e.target.value)}>
                        {
                          [...Array(product.countInStock).keys()].map(x => (
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                          ))
                        }
                      </select></div>
                    </div>
                  </li>
                  <button onClick={addToCartHandler} className='add-to-cart' tabindex="3">Add to cart</button>
                </>) : (<button className='add-to-cart-outofstock' tabindex="3">Add to cart</button>)}
              {product.countInStock > 0 ? (<></>) :
                (<p className='checkotherstext'>
                  Hey! Seems this product is out of stock. But don't worry, we have other <a href={`/category/${product.category}`} className='coolstufflink'>cool stuff</a> to check out!</p>)}
            </div>
          </div>
          <section className="products">
            <span className="productstitle">More Featured Designs</span>
            <a href={`/category/tshirts`} className="browseall">All designs &gt;</a>

            <table className="maintable">

              <Product key={product._id} product={product}></Product>
              <Product key={product._id} product={product}></Product>
              <Product key={product._id} product={product}></Product>
              <Product key={product._id} product={product}></Product>
              <Product key={product._id} product={product}></Product>

            </table>

          </section>
        </>
      )}
    </div>);
}
