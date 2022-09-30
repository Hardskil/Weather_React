import React from 'react';
// import { Link } from "react-router-dom"
// import culonPng from "../Img/productsImg/culon.jpg";
// import braceletPng from "../Img/productsImg/braclet.jpg";
import "../Style/Product.css";
import ProductItem from './ProdcutItem';

// import Search from '../Page/Search';


function Product({value, productType}) {
    if ( !value || value.length == 0){
        return(
            <h2 className='no-founds-text'>Ничего не найдено</h2>
        )
    }
    return (
            <div className='product'>
                <h2 className='block-title'>{productType}</h2>
                <ProductItem value={value}></ProductItem>
            </div>
    );
}

export default Product;