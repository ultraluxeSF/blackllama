//import react from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './search';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';


function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <nav>
        <div className="navleft">
          <Link to="/" className="logo"></Link>
          <form className="search-container" >
            <input id="search-box" type="text" className="search-box" name="q" />
            <label for="search-box">Search here..<span className="search-icon"></span></label>
            <input type="submit" id="search-submit" />
          </form>
        </div>
        <div className="navright">
          <ul className="navbtns">
            <li ><Link to="/favorites">Favorites<span className="heart"></span></Link></li>
            <li className='cartnavbtn'><Link to="/cart/">Cart
              {
                cartItems.length > 0 && (
                  <span className='badge'>{cartItems.length}</span>
                )
              }
              <span className="cart"></span></Link></li>
            <li><Link to="/myprofile">INorkulov<span className="avatar"></span></Link></li>
          </ul>
        </div>
      </nav>
      <section className="sec1">
        <Link to="#" className='catlinks'>All Designs</Link>
        <Link to="#" className='catlinks'>T-Shirts</Link>
        <Link to="#" className='catlinks'>Hoodies</Link>
        <Link to="#" className='catlinks'>Phone Cases</Link>
        <Link to="#" className='catlinks'>Stickers</Link>
        <Link to="#" className='catlinks'>Posters</Link>
        <Link to="#" className='catlinks'>Home Goods</Link>
      </section>
      <Switch>
        <Route exact path="/" component={HomeScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/cart/:id?" component={CartScreen}></Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
