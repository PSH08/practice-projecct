import { Link } from 'react-router-dom';

function content() {
  return (
    <>
      <div className='head_cont'>
        <div className='mid_cont'>
          <img src='https://img.allthatboots.com/edimg2/xP7TXc.jpg' alt='adidas' />
        </div>
      </div>
      <div className='head_menu'>
        <div className='container'>
          <ul>
            <li>
              <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/updated_gender_women_dt_tcm215-636701.jpg' alt='women' />
              <p>WOMEN</p>
            </li>
            <li>
              <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/updated_gender_men_dt_tcm215-636698.jpg' alt='men' />
              <p>MEN</p>
            </li>
            <li>
              <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/updated_gender_kids_dt_tcm215-636695.jpg' alt='kid' />
              <p>KIDS</p>
            </li>
          </ul>
        </div>
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
            <div className='price'>129,000 원</div>
            <h5>캠퍼스 80 엑스라지</h5>
            <p>남성 originals</p>
            <p>new</p>
          </li>
          <li>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/e5993c61f5204454bb62adc500fd99f0_9366/80_Purple_GW3247_01_standard.jpg' alt='adidas' />
            <div className='price'>129,000 원</div>
            <h5>캠퍼스 80 엑스라지</h5>
            <p>남성 originals</p>
            <p>new</p>
          </li>
          <li>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/a059b39c93d3411c9ae9ad6500f69a2d_9366/Silver_GY1121_01_standard.jpg' alt='adidas' />
            <div className='price'>129,000 원</div>
            <h5>아스티어</h5>
            <p>Women originals</p>
          </li>
          <li>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ad49da472664c5cba85ad7100995f72_9366/White_GV8272_01_standard.jpg' alt='adidas' />
            <div className='price'>129,000 원</div>
            <h5>아스티어</h5>
            <p>Women originals</p>
          </li>
          <li>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/127bbf0361774b69aabead6400ede354_9366/White_GY1122_01_standard.jpg' alt='adidas' />
            <div className='price'>129,000 원</div>
            <h5>아스티어</h5>
            <p>Women originals</p>
          </li>
          <li>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/0732efb5d8504d4bb73cad7c00a2a88a_9366/CAMPUS_80s_Blue_GX9405_01_standard.jpg' alt='adidas' />
            <div className='price'>129,000 원</div>
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
              <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/APP_main_ADIDASAPP_TEASER_carosel_kr_202202_tcm215-851151.jpg' alt='adidas' />
              <h5>ADIDAS APP 런칭</h5>
              <p>아디다스 공식 앱 런칭! 지금 바로 다운로드 하고 다양한 혜택을 만나보세요.</p>
              <Link to="#"><div>앱 다운로드 하기</div></Link>
            </div>
            <div className='cont_card'>
              <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/valentines_day_teaser-card-d_tcm215-845625.jpg' alt='adidas' />
              <h5>Give Love Get Love</h5>
              <p>발렌타인 컬렉션으로 사랑도 표현하고 10만원 바우처 기회도 잡으세요</p>
              <Link to="#"><div>지금 구매하기</div></Link>
            </div>
            <div className='cont_card'>
              <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/harden6-CAROUSEL-d_tcm215-845646.jpg' alt='adidas' />
              <h5>HARDEN VOL. 6</h5>
              <p>제임스 하든의 행운의 HARDEN VOL 6, 지금 바로 만나 보세요</p>
              <Link to="#"><div>지금 구매하기</div></Link>
            </div>
            <div className='cont_card'>
              <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/koKR/Images/ss22-Parley-Mission-carouse-d_tcm215-851145.png' alt='adidas' />
              <h5>ADIDAS X PARLEY</h5>
              <p>나의 선택, 바다의 색깔을 바꾸다.</p>
              <Link to="#"><div>지금 구매하기</div></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='best_content'>
        <div className='container'>
          <h1>베스트셀러</h1>
          <ul className='product1'>
            <li>
              <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ee7596cb94f4e429bc9abfb00ddc199_9366/FV9760_01_standard.jpg' alt='adidas' />
              <div className='price'>129,000 원</div>
              <h5>오즈위고 TR W</h5>
              <p>Originals</p>
            </li>
            <li>
              <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/17fc867b5e4a4a489535ac6300bad9bb_9366/FY5961_01_standard.jpg' alt='adidas' />
              <div className='price'>129,000 원</div>
              <h5>플루이드플로우2.0</h5>
              <p>Sportswear</p>
            </li>
            <li>
              <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc9a4fa8c3dc4ce0a036aaaa014778f8_9366/FI3033_01_standard.jpg' alt='adidas' />
              <div className='price'>129,000 원</div>
              <h5>골드 슈즈 백</h5>
              <p>Performance</p>
            </li>
            <li>
              <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/86ce261639454dc99402a8030006de8a_9366/S21489_03_standard.jpg' alt='adidas' />
              <div className='price'>129,000 원</div>
              <h5>솔리드 크루삭</h5>
              <p>Originals</p>
            </li>
            <li>
              <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/85e3b8b43f314661a942abca00920ade_9366/H32391_21_model.jpg' alt='adidas' />
              <div className='price'>129,000 원</div>
              <h5>페이스 커버 3P 미디엄/라지</h5>
              <p>Sportswear</p>
            </li>
            <li>
              <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/787f10e6b4a14eaaba90abfb014b8893_9366/GQ6885_01_standard.jpg' alt='adidas' />
              <div className='price'>129,000 원</div>
              <h5>브레이디드 스트레치 벨트</h5>
              <p>Performance</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default content 