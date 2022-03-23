import data from './data';
import switchSlide from './slideshow';
import './slideshow';
import './search';
import Slideshow from './slides';
import Product from './components/Product';

function App() {
  return (
    <><nav>
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
    <section className="sec1">
      <a href="#"><button className="bigbutton">All Designs</button></a>
      <a href="#"><button className="bigbutton">T-Shirts</button></a>
      <a href="#"><button className="bigbutton">Hoodies</button></a>
      <a href="#"><button className="bigbutton">Phone Cases</button></a>
      <a href="#"><button className="bigbutton">Stickers</button></a>
      <a href="#"><button className="bigbutton">Posters</button></a>
      <a href="#"><button className="bigbutton">Home Goods</button></a>
    </section>

    <section id="slideshow">
      <div className="slideshow-container">
        <figure className="slide fade">
          <img src="https://images.pexels.com/photos/3311533/pexels-photo-3311533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
        </figure>
        {/* <figure className="slide fade">
          <img src="https://images.pexels.com/photos/2318068/pexels-photo-2318068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
        </figure>
        <figure className="slide fade">
          <img src="https://images.pexels.com/photos/925743/pexels-photo-925743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
        </figure> */}
      </div>
      <div className="dots">
        <span className="dot" onClick="showSlide(1)"></span>
        <span className="dot" onClick="showSlide(2)"></span>
        <span className="dot" onClick="showSlide(3)"></span>
      </div>
    </section>

    

    <section className="products">
      <h1 className="productstitle">T-Shirts</h1>
      <table className="maintable">
        {data.products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
        
        



      </table>

    </section>
    </>
  );
}

export default App;
