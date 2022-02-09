import './App.css';
import React from 'react';
import { FaRegUser,FaBars,FaSearch,FaShoppingBag } from "react-icons/fa"

function Click() {
  console.log("hello")
}

function App() {
  return (
    <>
      <div className='header'>
        <div className='header_bar'>
          <FaBars size="40" />
        </div>
        <div>
          <img className='header_logo' src='https://www.adidas.co.kr/glass/react/5152538/assets/img/icon-adidas-logo.svg' alt='adidas' />
        </div>
        <div className='header_icons'>
          <FaRegUser size="40" className='icon' />
          <FaSearch size="40" className='icon' />
          <FaShoppingBag size="40" className='icon' />
        </div>
      </div>
      <div className='content'>
        <div className='cont_img'>
          <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/updated_gender_women_dt_tcm215-636701.jpg' alt='women' className='menu' />
          <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/updated_gender_men_dt_tcm215-636698.jpg' alt='men' className='menu' />
          <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/updated_gender_kids_dt_tcm215-636695.jpg' alt='kid' className='menu' />
        </div>
        <div className='img_text'>
          <div onClick={Click}>WoMen</div>
          <div>Men</div>
          <div>KiDS</div>
        </div>
      </div>
    </>
  );
}

export default App;
