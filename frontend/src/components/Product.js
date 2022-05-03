import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function Product(props) {
  const { product } = props;
  return (
    <tr key={product._id} className="bestdeals">
      <Link to={`/product/${product._id}`} className="tr-link">
        <td>
          {/* setting dynamic url for the image according to its ID */}
          <img src={product.image} alt={product.name} className="bestdeals-img"></img>
          <figcaption className="deal-caption">{product.name}</figcaption>
          <figcaption className="price">${product.price}</figcaption>
          <figcaption className="author"><span className="designerspan">Designer: </span><Link to={`/user/${product.designer}`} className="designer">{product.designer}
          </Link></figcaption>
        </td>
      </Link>
    </tr>
  );
}
