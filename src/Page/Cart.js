// import { render } from '@testing-library/react';
import React from 'react';
import { Cookies, useCookies } from 'react-cookie';
import "../Style/Cart.css"
let arrProduct = [];
function Cart() {
    const [cookie, setCookie, removeCookie] = useCookies();
    arrProduct.push(cookie);
    if (Object.keys(arrProduct[0]).length == 0 || arrProduct.length == 0) {
        return (
            <div className='Cart'>
                <h3 className='cart-title'>Корзина</h3>
                <p className='empty-card_description'>Ваша корзина пуста</p>
            </div>
        )
    } else {
        return (
            <div className="Cart">
                <h3 className='cart-title'>Ваша корзина</h3>
                <div className='cart-cards'>
                    {Object.entries(cookie).map((item, i) => {
                        return (
                            <div className='cart-card' key={i}>
                                <div className='img-block'>
                                    <img className='image' src={item[1][2]} />
                                </div>
                                <h3 className='card-description'> Название: {item[1][0]}</h3>
                                <p className='card-price'>Цена {item[1][1]}</p>
                                <button className='delete-btn' onClick={() => { removeCookie(item[i]); console.log(2); }}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Cart;