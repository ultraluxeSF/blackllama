//import react from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './search';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';
import CheckoutScreen from './screens/CheckoutScreen';


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
              <span className="cart" id='cartbtn'></span></Link></li>
            <li><Link to="/myprofile">INorkulov<span className="avatar"></span></Link></li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={HomeScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/checkout/:id?" component={CheckoutScreen}></Route>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
