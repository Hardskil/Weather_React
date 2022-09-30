import React from 'react';
import Product from '../Components/Product';
import Database from "../Database/Select";
function ProductsComponent() {
    return ( 
        <div>
            {/* {JSON.stringify(data)} */}
           
            <Product value={Database("Culons")} productType='Кулоны'></Product>
            <Product value={Database("Bracelets")} productType='Браслеты'></Product>
        </div>
    );
}

export default ProductsComponent;