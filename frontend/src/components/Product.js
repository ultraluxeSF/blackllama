import React, {useEffect, useState} from 'react'
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function Product(props) {
    const {product} = props;
  return (
    <tr key={product._id} className="bestdeals">
            <a href={`/product/${product.name}`} className="tr-link"> 
          <td>
            {/* setting dynamic url for the image according to its ID */}
            <img src={product.image} alt={product.name} className="bestdeals-img"></img>
            <figcaption className="deal-caption">{product.name}</figcaption>
            <figcaption className="price">${product.price}</figcaption>
            <figcaption className="author"><span className="designerspan">Designer: </span><a href={`/user/${product.designer}`} className="designer">{product.designer}
            </a></figcaption>
          </td>
          </a>
        </tr>
  );
}
