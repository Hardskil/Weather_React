import React, { useEffect, useState } from 'react';
import "../Style/form.css";
import Filter from '../Components/Filter'
import Product from '../Components/Product';
import Database from "../Database/Select";
import { useSearchParams } from 'react-router-dom';

function Search() {
    const [Search, setSearch] = useSearchParams();
    const [result, setResult] = useState();
    const [type, setType] = useState();
    useEffect(() => {

        // console.log(Search.get("typeProduct"));
        let type = Search.get("typeProduct");
        let ArrData = Database(Search.get("typeProduct"));
        let pref = {
            company: Search.get("company"),
            gender: Search.get("gender"),
            material: Search.get("material"),
            start: Search.get("priceStart"),
            finish: Search.get("priceEnd"),
        }
        // setResult(ArrData)
        if (ArrData){

            setResult(ArrData.filter((item)=>{
                if(item.company.toUpperCase() === pref.company.toUpperCase() && item.gender.toUpperCase() === pref.gender.toUpperCase() && item.material.toUpperCase() === pref.material.toUpperCase()){
                    return item
                }
            }))
            console.log(result);
        } 
        setType(type);
    },[Search])
    return (
        <div className='Search'>
            <Filter></Filter>
            <Product value={result} productType={type} />
        </div>
    );
}

export default Search;