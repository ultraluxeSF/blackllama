import React from 'react'
import data from '../data';
import Product from '../components/Product';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import TshirtsScreen from './TshirtsScreen';


export default function HomeScreen() {
  return (  
      <div>
            <section className="sec1">
        <a href="#"><button className="bigbutton">All Designs</button></a>
        <a href="#"><button className="bigbutton">T-Shirts</button></a>
        <a href="#"><button className="bigbutton">Hoodies</button></a>
        <a href="#"><button className="bigbutton">Phone Cases</button></a>
        <a href="#"><button className="bigbutton">Stickers</button></a>
        <a href="#"><button className="bigbutton">Posters</button></a>
        <a href="#"><button className="bigbutton">Home Goods</button></a>
        </section>
        <section id="banner">
        <div className="banner-container">
            <figure className="slide">
            <img src="https://images.pexels.com/photos/3311533/pexels-photo-3311533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
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
        </table>
        </section>

    </div>

  );
}
