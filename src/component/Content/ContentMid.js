
import { Link } from 'react-router-dom';

function ContentMid() {
  return(
    <>
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
    </>
  )
}
export default ContentMid
