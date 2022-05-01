//import react from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './search';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className="navleft">
          <a href="/" className="logo"></a>
          <form className="search-container" >
            <input id="search-box" type="text" className="search-box" name="q" />
            <label for="search-box">Search here..<span className="search-icon"></span></label>
            <input type="submit" id="search-submit" />
          </form>
        </div>
        <div className="navright">
          <ul className="navbtns">
            <li><a href="/favorites">Favorites<span className="heart"></span></a></li>
            <li><a href="/cart">Cart<span className="cart"></span></a></li>
            <li><a href="/myprofile">INorkulov<span className="avatar"></span></a></li>
          </ul>
        </div>
      </nav>
      <section className="sec1">
        <a href="#" className='catlinks'>All Designs</a>
        <a href="#" className='catlinks'>T-Shirts</a>
        <a href="#" className='catlinks'>Hoodies</a>
        <a href="#" className='catlinks'>Phone Cases</a>
        <a href="#" className='catlinks'>Stickers</a>
        <a href="#" className='catlinks'>Posters</a>
        <a href="#" className='catlinks'>Home Goods</a>
      </section>
      <Switch>
        <Route exact path="/" component={HomeScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
