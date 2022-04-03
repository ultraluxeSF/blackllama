import react from 'react';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
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
          <input id="search-box" type="text" className="search-box" name="q"/>
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
    <Switch>
        <Route exact path="/" component={HomeScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
    </Switch>
    

    

    
      {/* If path is exactly like in the url, then render the command below */}

    </BrowserRouter>
    );
}

export default App;
