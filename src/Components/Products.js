import React, { useEffect, useState } from 'react'
import '../Style/products.css'
import ProductItem from './ProductItem'
import Database from "../Database/Select"
import { useSearchParams } from 'react-router-dom'

function Products() {
    let [search, setSearch] = useSearchParams();
    let [result, setResult] = useState();

    useEffect(()=>{
        let data = Database(search.get("typeProduct"))
        let pref = {
            company: search.get("company"),
            gender: search.get("gender"),
            material: search.get("material"),
            start: search.get("priceStart"),
            finish: search.get("priceEnd"),
        }
        
        setResult(data.filter((item)=>{
            if(item.company === pref.company && item.gender === pref.gender && item.material === pref.material && item.price >= pref.start && item.price <= pref.finish){
                return item
            }
        }))
    }, [search])
    return (
        <div className='products'>
            <ProductItem products={result} />
        </div>
    )
}

export default Products
