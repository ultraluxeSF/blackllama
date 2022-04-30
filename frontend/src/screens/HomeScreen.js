import React, { useEffect, useState } from 'react'
//import data from '../data';
import Product from '../components/Product';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector } from 'react-redux';


export default function HomeScreen() {
    //hook states
    const [tshirts, setTshirts] = useState([]);
    const [hoodies, setHoodies] = useState([]);
    const [cases, setCases] = useState([]);
    const [pins, setPins] = useState([]);
    const [posters, setPosters] = useState([]);
    const [mugs, setMugs] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // const productList = useSelector( state => state.productList);
    // const {loading, error, tshirts} = productList;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/tshirts');
                setLoading(false);
                setTshirts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/hoodies');
                setLoading(false);
                setHoodies(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/cases');
                setLoading(false);
                setCases(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/pins');
                setLoading(false);
                setPins(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/posters');
                setLoading(false);
                setPosters(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/mugs');
                setLoading(false);
                setMugs(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <><section className="sec1">
                    <a href="#" className='catlinks'>All Designs</a>
                    <a href="#" className='catlinks'>T-Shirts</a>
                    <a href="#" className='catlinks'>Hoodies</a>
                    <a href="#" className='catlinks'>Phone Cases</a>
                    <a href="#" className='catlinks'>Stickers</a>
                    <a href="#" className='catlinks'>Posters</a>
                    <a href="#" className='catlinks'>Home Goods</a>
                </section><section id="banner">
                        <div className="banner-container">
                            <figure className="slide">
                                <img src='https://i.imgur.com/w8VkWlg.jpg' />
                            </figure>
                        </div>
                    </section><section className="products">

                        <span className="productstitle">Featured T-Shirts</span>
                        <a href={`/category/tshirts`} className="browseall">All designs &gt;</a>


                        <table className="maintable">


                            {tshirts.slice(0, 6).map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}

                            <p className='featuredtext'><span className="productstitle">Featured Hoodies</span>
                                <a href={`/category/hoodies`} className="browseall">All designs &gt;</a></p>

                            {hoodies.slice(0, 6).map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}

                            <p className='featuredtext'><span className="productstitle">Featured Phone Cases</span>
                                <a href={`/category/cases`} className="browseall">All designs &gt;</a></p>

                            {cases.slice(0, 6).map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}

                            <p className='featuredtext'><span className="productstitle">Featured Pins</span>
                                <a href={`/category/stickers`} className="browseall">All designs &gt;</a></p>

                            {pins.slice(0, 6).map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}

                            <p className='featuredtext'><span className="productstitle">Featured Posters</span>
                                <a href={`/category/posters`} className="browseall">All designs &gt;</a></p>

                            {posters.slice(0, 6).map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}

                            <p className='featuredtext'><span className="productstitle">Featured Mugs</span>
                                <a href={`/category/mugs`} className="browseall">All designs &gt;</a></p>

                            {mugs.slice(0, 6).map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}
                        </table>
                    </section></>
            )}
        </div>
    );
}
