import { React, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import "../Style/SaleItem.css"
function SaleItem({ sales }) {
    const [cookie, setCookie, removeCookie] = useCookies();
    useEffect(() => {
        console.log(cookie);
    }, [cookie]);
    if (sales) {
        return (
            <div className="product-block">
                {sales.map((sale, i) => {
                    return (
                        <div className="product-card" key={i} >
                            <div className="card-img" alt="">
                                <img src={sale.src} />
                            </div>
                            <div className="card-info">
                                <h3 to="#" className='card-title'>{sale.title}</h3>
                                <div className="price-block">
                                    <span className='old-price'>{sale.oldPrice}$</span>Новая цена: <span className='new-price'>{sale.newPrice}$</span>
                                </div>
                                <span className='card-type'>{sale.gender}</span>
                                <p className='card-desc'>{sale.material}</p>
                                <p>{sale.company}</p>
                                {sale.id}
                                <input type="number" id="AmountInput" />
                                <button onClick={() => {console.log(sale.id);setCookie('product' + i, [sale.title, sale.newPrice,sale.src, sale.id]) }}>Send</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default SaleItem;