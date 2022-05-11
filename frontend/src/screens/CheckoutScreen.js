import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { savePaymentDetails } from '../actions/cartActions';

export default function CheckoutScreen(props) {
    const productId = props.match.params.id;

    const cart = useSelector(state => state.cart); //save data on refresh and upon returning to this screen
    const { paymentDetails } = cart;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    const [email, setEmail] = useState(paymentDetails.email);
    const [fullName, setFullName] = useState(paymentDetails.fullName);
    const [cardNo, setCardNo] = useState(paymentDetails.cardNo);
    const [address, setAddress] = useState(paymentDetails.address);
    const [city, setCity] = useState(paymentDetails.city);
    const [postalCode, setPostalCode] = useState(paymentDetails.postalCode);
    const [cardMMYY, setCardMMYY] = useState(paymentDetails.cardMMYY);
    const [cardCVC, setCardCVC] = useState(paymentDetails.cardCVC);

    const dispatch = useDispatch();


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentDetails({ email, cardNo, cardMMYY, cardCVC, fullName, address, city, postalCode }))
        props.history.push('/payment')
        //dispatch save info
    }


    return (
        <div className='paymentDetails'>
            <div className='summaryOrderSec'>
                <h1 className='pd-title'>Summary Order</h1>
                <p className='misc-info'>Check what you are ordering as well as order method</p>

                <div className='summaryOrderSecBox'>
                    <div className='chosen-products'>

                    </div>
                </div>
            </div>

            {/* RIGHT SIDE START */}

            <div className='paymentDetailsSec'>
                <h1 className='pd-title'>Payment Details</h1>
                <p className='misc-info'>Complete your purchase by providing your payment details</p>

                <div className='paymentsDetailsSecBox'>
                    <form className='form' onSubmit={submitHandler}>
                        <div>
                            <h2 className='input-title'>Email Address</h2>
                            <input type='text'
                                id='email'
                                placeholder='Email Address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required></input>
                        </div>
                        <div>
                            <h2 className='input-title'>Card Details</h2>
                            <div className='card-details-div'>
                                <input className='cardNo-input' type='text'
                                    id='cardNo'
                                    placeholder='Card Number'
                                    value={cardNo}
                                    onChange={(e) => setCardNo(e.target.value)}
                                    required></input>
                                <input className='cardMMYY-input' type='text'
                                    id='cardMMYY'
                                    placeholder='MM/YY'
                                    value={cardMMYY}
                                    onChange={(e) => setCardMMYY(e.target.value)}
                                    required></input>
                                <input className='cardCVC-input' type='text'
                                    id='cardCVC'
                                    placeholder='CVC'
                                    value={cardCVC}
                                    onChange={(e) => setCardCVC(e.target.value)}
                                    required></input>
                            </div>
                        </div>
                        <div>
                            <h2 className='input-title'>Card Holder</h2>
                            <input type='text'
                                id='fullName'
                                placeholder='Card Holder Full Name'
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required></input>
                        </div>
                        <div>
                            <h2 className='input-title'>Billing Address</h2>
                            <input className='address-input' type='text'
                                id='address'
                                placeholder='Address Line'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required></input>
                        </div>
                        <div className='city-postal-div'>
                            <input className='city-input' type='text'
                                id='city'
                                placeholder='City'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required></input>
                            <input className='postal-input' type='text'
                                id='postalCode'
                                placeholder='Postal Code'
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required></input>

                        </div>
                        <div>


                        </div>
                        <div>
                            <button className='proceed-to-payment-btn' type='submit'>Proceed to Payment</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
