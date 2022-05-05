import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])
    const removeFromCartHandler = (id) => {
        //delete action
        dispatch(removeFromCart(id))
    }
    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }
    return (
        <div className='cart-listproducts'>
            <div className='col-1'>
                <h1 className='productstitle'>Shopping Cart</h1>
                {cartItems.length === 0 ? <MessageBox>
                    Your cart is empty <Link to="/" className='emptycartLink'>Browse products</Link>
                </MessageBox>
                    :
                    (
                        <ul>
                            {
                                cartItems.map((item) => (
                                    <li key={item.product}>

                                        <div className='row'>
                                            <div className='inlinerow'><div>
                                                <Link to={`/product/${item.product}`}><img className='cartImg' src={item.image} alt={item.name} ></img></Link>

                                            </div>


                                                <div className='col2'>
                                                    <div className='cartProdName'>
                                                        <Link to={`/product/${item.product}`} className='cartProdLink'>{item.name}</Link>
                                                    </div>
                                                    <div className='cartselectqty'>
                                                        <select value={item.qty} onChange={e => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                            {
                                                                [...Array(item.countInStock).keys()].map(x => (
                                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>

                                                    <div className='cartItemPrice'>${item.price}</div>
                                                </div></div>


                                            <div className='removeBtnArea'><div>
                                                <button type='button' onClick={() => removeFromCartHandler(item.product)} className='removeBtn'>Remove from cart</button>
                                            </div></div>
                                        </div>

                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
            <div className='col-2'><ul>
                <li>
                    <h1 className='yourcart'>Your Cart</h1>
                    <h2 className='carttotalPriceTitle'>
                        Total Price: <span className='carttotalPrice'>${cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)}</span>
                    </h2>
                    <h3 className='carttotalItems'>Total Items: {cartItems.reduce((a, c) => a + c.qty, 0)}</h3>
                </li>
                <li>
                    <button type='button' onClick={checkoutHandler} className='checkoutbtn' disabled={cartItems.length === 0}>
                        Proceed to Checkout
                    </button>
                </li>
            </ul>
            </div>
        </div>
    )
}
