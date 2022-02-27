import { Link } from 'react-router-dom';

function ContentTop() {
  return(
    <>
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
    </>
  )
}
export default ContentTop