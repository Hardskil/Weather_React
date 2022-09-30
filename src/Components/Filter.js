import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BowlingMan from "../Img/searchPageImg/PebblePeopleAvatar.png";
function Filter() {
    const [search, setSearch] = useSearchParams()
    const [typeProduct, setTypeProduct] = useState();
    const [priceStart, setPriceStart] = useState();
    const [priceEnd, setPriceEnd] = useState();
    const [material, setMaterial] = useState();
    const [company, setCompany] = useState();
    const [gender, setGender] = useState();
    function sendParams(e) {
        e.preventDefault();
        console.log(typeProduct);
        console.log(material);
        setSearch({ typeProduct, priceStart, priceEnd, material, company, gender });
    }
    return (
        <div className='Filter'>
            <div className='filter-img'>
                <img src={BowlingMan} alt="" />
            </div>
            <form className="form">
                <select onChange={(e) => { setTypeProduct(e.target.value) }}>
                    <option>Выбирите тип продукта</option>
                    <option value="Rings">Кольца</option>
                    <option value="Bracelets"> Браслеты</option>
                    <option value="Culons">Кулоны</option>
                </select>
                <div className="priceBlock">
                    <p>Выберите ценовой диапозон</p>
                    <input className="" type="number" placeholder="От" onChange={(e) => { setPriceStart(e.target.value) }} />
                    <input className="" type="number" placeholder="До" onChange={(e) => { setPriceEnd(e.target.value) }} />
                </div>
                <select onChange={(e) => { setMaterial(e.target.value) }}>
                    <option>Выбирите материал</option>
                    <option value="Золото">Золото</option>
                    <option value="Платина"> Платина</option>
                    <option value="Серебро">Серебро</option>
                </select>
                <div className="filter-company">
                    <label for="SokolovCompany" className='company-pick'>Sokolov</label>
                    <input onChange={(e) => { setCompany(e.target.value) }} type="radio" name="companyName" id="SokolovCompany" value="Sokolov" />
                    <label for="SkilCompany" className='company-pick'>SKLV</label>
                    <input onChange={(e) => { setCompany(e.target.value) }} type="radio" name="companyName" id="SkilCompany" value="SKLV"/>
                    <label for="SokolovDiamondsCompany" className='company-pick'>Sokolov Diamonds</label>
                    <input onChange={(e) => { setCompany(e.target.value) }} type="radio" name="companyName" id="SokolovDiamondsCompany"  value="Sokolov Diamonds"/>
                </div>
                <select className='filter-gender' onChange={(e) => { setGender(e.target.value) }}>
                    <option value="для всех">для всех</option>
                    <option value="для мужчин">для мужчин</option>
                    <option value="для женщин">для женщин</option>
                </select>
                <button onClick={sendParams}>send</button>
            </form>
        </div>
    );
}

export default Filter;