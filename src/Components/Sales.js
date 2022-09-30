import React from 'react';
import info  from"../sales.json"
import SaleItem from './SaleItem';
function SalesComponent() {
    return ( 
        <div>
            <SaleItem sales={info}/>
        </div>
     );
}

export default SalesComponent;