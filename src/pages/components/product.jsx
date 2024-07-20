import React from 'react';
import { Link } from 'react-router-dom';
import ButtonDetail from './ButtonDetail';


const Product = ({ item, index }) => {
return(
<div className="product">
    <Link to={`/recipe/${index}`} state={{ item }}>
        <div  className="image__box">
        <img className='image_card_recipe' src={item.image} alt={item.recipe_title} />
            <div className="image__box-mask"><div>Detail</div></div>
        </div>
        <div className="product__description">
            <h2 className="product__title">{item.recipe_title}</h2>
            <div className="product__subtitle">{item.recipe_description.substring(0, 60) + "....."}</div>
            <ButtonDetail />
        </div>
    </Link>
</div>)

};

export default Product;