import React from "react";
import SearchIcon from "../Img/cil_search.png";
import { NavLink } from "react-router-dom";
import Vector from "../Img/Vector.png";
import '../Style/NavBar.css'

export default function NavBar({arrLink}) {
  return (
    <div className="NavBar">
        {arrLink.map((val,i)=>{
            return(
                <NavLink key={i} to={val.url}>{val.txt}</NavLink>
            );
        })}
    <NavLink to="/search">
        <img src={SearchIcon} alt=""/>
      </NavLink>
      <NavLink to="/cart">
        <img src={Vector} alt=""/>
      </NavLink>
      {/*
      <NavLink to="/">
        <img src={Vector} alt=""/>
      </NavLink> */}
    </div>
  );
}
