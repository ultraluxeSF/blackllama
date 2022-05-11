import React, { useEffect } from 'react'
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';


export default function HomeScreen() {
    //hook states
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const { loading, error, product } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [])

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

                    <section id="banner">
                        <div className="banner-container">
                            <figure className="slide">
                                <img src='https://i.imgur.com/w8VkWlg.jpg' />
                            </figure>
                        </div>
                    </section><section className="products">

                        <span className="productstitle">Featured T-Shirts</span>
                        <a href={`/category/T-shirt`} className="browseall">All designs &gt;</a>


                        <table className="maintable">


                            {product.slice(0, 5).map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}

                            <p className='featuredtext'><span className="productstitle">Featured Hoodies</span>
                                <a href={`/category/Hoodie`} className="browseall">All designs &gt;</a></p>

                            {product.slice(5, 10).map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}

                            <p className='featuredtext'><span className="productstitle">Featured Phone Cases</span>
                                <a href={`/category/Case`} className="browseall">All designs &gt;</a></p>

                            {product.slice(10, 15).map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}

                            <p className='featuredtext'><span className="productstitle">Featured Pins</span>
                                <a href={`/category/Pin`} className="browseall">All designs &gt;</a></p>

                            {product.slice(15, 20).map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}

                            <p className='featuredtext'><span className="productstitle">Featured Posters</span>
                                <a href={`/category/Poster`} className="browseall">All designs &gt;</a></p>

                            {product.slice(20, 25).map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}

                            <p className='featuredtext'><span className="productstitle">Featured Mugs</span>
                                <a href={`/category/Mug`} className="browseall">All designs &gt;</a></p>

                            {product.slice(25, 30).map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}
                        </table>
                    </section></>
            )}
        </div>
    );
}
