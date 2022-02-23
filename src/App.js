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
        <ul className='main_content'>
          <li>
            <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/updated_gender_women_dt_tcm215-636701.jpg' alt='women' className='menu' />
            <h3>Women</h3>
          </li>
          <li>
            <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/updated_gender_men_dt_tcm215-636698.jpg' alt='men' className='menu' />
            <h3>Men</h3>
          </li>
          <li>
            <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/updated_gender_kids_dt_tcm215-636695.jpg' alt='kid' className='menu' />
            <h3>Kids</h3>
          </li>
        </ul>
      </div>
      <div className='new_product'>
        <div className='container'>
        <ul className='new_name'>
          <li>
            <h1>신상품</h1>
          </li>
          <li>
            <Link to="/"><div>전체보기</div></Link>
          </li>
        </ul>
        <ul className='product1'>
          <li>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a637399ce124376b155adc500ff0339_9366/80_Brown_GW3248_01_standard.jpg' alt='adidas' />
            <h5>캠퍼스 80 엑스라지</h5>
            <p>남성 originals</p>
            <p>new</p>
          </li>
          <li>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/e5993c61f5204454bb62adc500fd99f0_9366/80_Purple_GW3247_01_standard.jpg' alt='adidas' />
            <h5>캠퍼스 80 엑스라지</h5>
            <p>남성 originals</p>
            <p>new</p>
          </li>
          <li>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/a059b39c93d3411c9ae9ad6500f69a2d_9366/Silver_GY1121_01_standard.jpg' alt='adidas' />
            <h5>아스티어</h5>
            <p>Women originals</p>
          </li>
          <li>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ad49da472664c5cba85ad7100995f72_9366/White_GV8272_01_standard.jpg' alt='adidas' />
            <h5>아스티어</h5>
            <p>Women originals</p>
          </li>
          <li>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/127bbf0361774b69aabead6400ede354_9366/White_GY1122_01_standard.jpg' alt='adidas' />
            <h5>아스티어</h5>
            <p>Women originals</p>
          </li>
          <li>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/0732efb5d8504d4bb73cad7c00a2a88a_9366/CAMPUS_80s_Blue_GX9405_01_standard.jpg' alt='adidas' />
            <h5>CAMPUS 80s</h5>
            <p>남성 Lifestyle</p>
            <p>new</p>
          </li>
        </ul>
        </div>
      </div>
      <div className='product_menu'>
        <div className='container'>
          <div className='content1'>
            <div className='cont_card'>
              <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/valentines_day_teaser-card-d_tcm215-845625.jpg' alt='adidas' />
              <h5>Give Love Get Love</h5>
              <p>발렌타인 컬렉션으로 사랑도 표현하고 10만원 바우처 기회도 잡으세요</p>
              <Link to="#"><div>지금 구매하기</div></Link>
            </div>
            <div className='cont_card'>
              <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/valentines_day_teaser-card-d_tcm215-845625.jpg' alt='adidas' />
              <h5>Give Love Get Love</h5>
              <p>발렌타인 컬렉션으로 사랑도 표현하고 10만원 바우처 기회도 잡으세요</p>
              <Link to="#"><div>지금 구매하기</div></Link>
            </div>
            <div className='cont_card'>
              <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/kids-classic-ss22-lego-launch-hp-teaser-carousel-juniors-d_tcm215-793742.jpg' alt='adidas' />
              <h5>Imagine Your World</h5>
              <p>놀자! 상상한 대로. 아디다스 레고⊙ 클래식과 함께</p>
              <Link to="#"><div>지금 구매하기</div></Link>
            </div>
            <div className='cont_card'>
              <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/originals-ss22-blue-version-jan-launch-catlp-teaser-carousel_tcm215-818530.jpg' alt='adidas' />
              <h5>Blue Version</h5>
              <p>아이다스 오리지널스,그 표현의 정점을 만나다.</p>
              <Link to="#"><div>지금 구매하기</div></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='best_content'>
        <h1>베스트셀러</h1>
        {/* <div className='best_product'>
          <button><FaChevronLeft size={60} /></button>
          <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/Beige_FX6029_01_standard.jpg' alt='adidas' />
          <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/Beige_FX6029_01_standard.jpg' alt='adidas' />
          <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/Beige_FX6029_01_standard.jpg' alt='adidas' />
          <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/Beige_FX6029_01_standard.jpg' alt='adidas' />
          <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/Beige_FX6029_01_standard.jpg' alt='adidas' />
          <button><FaChevronRight size={60} /></button>
        </div> */}
      </div>
      <div className='text_content'>
        <div className='content'>
          <div className='text1'>
            <p></p>
          </div>
          <div className='text2'>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
