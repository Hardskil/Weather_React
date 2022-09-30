import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from "react-router-dom";
import "../Style/Product.css"
function ProductItem({ value }) {
    const [cookie, setCookie, removeCookie] = useCookies();
    
    useEffect(() => {
        console.log(cookie);
    }, [cookie]);
    
    if (value) {
        return (
            <div className="product-block">
                {value.map((val, i) => {
                    return (
                        <div className="product-card" key={i} >
                            <div className="card-img" alt="">
                                <img src={val.src} />
                            </div>
                            <div className="card-info">
                                <h3 to="#" className='card-title'>{val.title}</h3>
                                <p>Price -- {val.price}</p>
                                <span className='card-type'>{val.gender}</span>
                                <p className='card-desc'>{val.material}</p>
                                <p>{val.company}</p>
                                {val.id}
                                <input type="number" id="AmountInput"/>
                                <button onClick={() => { console.log(val.id);setCookie('product' + i, [val.title, val.price,val.src, val.id]) }}>Send</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ProductItem;