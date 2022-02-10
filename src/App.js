import './App.css';
import React from 'react';
import { FaRegUser,FaBars,FaSearch,FaShoppingBag, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Link } from 'react-router-dom';


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
          <div>WoMen</div>
          <div>Men</div>
          <div>KiDS</div>
        </div>
      </div>
      <div className='new_product'>
        <ul className='new_name'>
          <li>
            <h1>신상품</h1>
          </li>
          <li>
            <Link to="/"><div>전체보기</div></Link>
          </li>
        </ul>
        <div className='product1'>
          <button><FaChevronLeft size={60} /></button>
          <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/Beige_FX6029_01_standard.jpg' alt='adidas' />
          <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/Beige_FX6029_01_standard.jpg' alt='adidas' />
          <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/Beige_FX6029_01_standard.jpg' alt='adidas' />
          <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/Beige_FX6029_01_standard.jpg' alt='adidas' />
          <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/Beige_FX6029_01_standard.jpg' alt='adidas' />
          <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/Beige_FX6029_01_standard.jpg' alt='adidas' />
          <button><FaChevronRight size={60} /></button>
        </div>
      </div>
    </>
  );
}

export default App;
