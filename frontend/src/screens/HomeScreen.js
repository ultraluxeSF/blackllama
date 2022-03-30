import React from 'react'
import data from '../data';
import Product from '../components/Product';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import TshirtsScreen from './TshirtsScreen';


export default function HomeScreen() {
  return (  
      <div>
            <section className="sec1">
        <a href="#" className='catlinks'>All Designs</a>
        <a href="#" className='catlinks'>T-Shirts</a>
        <a href="#" className='catlinks'>Hoodies</a>
        <a href="#" className='catlinks'>Phone Cases</a>
        <a href="#" className='catlinks'>Stickers</a>
        <a href="#" className='catlinks'>Posters</a>
        <a href="#" className='catlinks'>Home Goods</a>
        </section>
        <section id="banner">
        <div className="banner-container">
            <figure className="slide">
            <img src='https://i.imgur.com/w8VkWlg.jpg'/>
            </figure>
        </div>
        </section>
        <section className="products">

        <span className="productstitle">Featured T-Shirts</span>
        <a href={`/category/tshirts`} className="browseall">All designs &gt;</a>
        <BrowserRouter>

        <Switch>
          <Route path="/product/:category" component={TshirtsScreen}></Route>
        </Switch>
        </BrowserRouter>

        <table className="maintable">
            {data.tshirts.map((product) => (
                <Product key={product._id} product={product}></Product>
            ))}
        <p className='featuredtext'><span className="productstitle">Featured Hoodies</span>
        <a href={`/category/hoodies`} className="browseall">All designs &gt;</a></p>

            {data.hoodies.map((product) => (
                <Product key={product._id} product={product}></Product>
            ))}

        <p className='featuredtext'><span className="productstitle">Featured Phone Cases</span>
        <a href={`/category/cases`} className="browseall">All designs &gt;</a></p>

            {data.cases.map((product) => (
                <Product key={product._id} product={product}></Product>
            ))}

        <p className='featuredtext'><span className="productstitle">Featured Pins</span>
        <a href={`/category/stickers`} className="browseall">All designs &gt;</a></p>

            {data.pins.map((product) => (
                <Product key={product._id} product={product}></Product>
            ))}

        <p className='featuredtext'><span className="productstitle">Featured Posters</span>
        <a href={`/category/posters`} className="browseall">All designs &gt;</a></p>

            {data.posters.map((product) => (
                <Product key={product._id} product={product}></Product>
            ))}

        <p className='featuredtext'><span className="productstitle">Featured Mugs</span>
        <a href={`/category/mugs`} className="browseall">All designs &gt;</a></p>

            {data.mugs.map((product) => (
                <Product key={product._id} product={product}></Product>
            ))}
        </table>
        </section>

    </div>

  );
}
