import React from 'react';
import ButtonDetail from './buttonDetail';
import recImage from '../../assets/catalog/torte_catalog_1.jpg'


const Product = () => (
<div className="product">
    <a  className="image__box" href="single.html">
        <img src={recImage} alt="" />
        <div className="image__box-mask"><div>Detail</div></div>
    </a>
    <div className="product__description">
        <h2 className="product__title"><a href="single.html">Canella cheesecake</a></h2>
        <div className="product__subtitle">Celebration</div>
        <ButtonDetail />
    </div>
</div>

);

export default Product;