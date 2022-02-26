import {FaUser,FaHeart,FaShoppingBag} from "react-icons/fa"

function HeadTop() {
  return (
    <>
      <div className='header_menu'>
        <div className='head_container'>
          <ul>
            <li>도움말</li>
            <li>반품</li>
            <li>주문조회</li>
            <li>아디클럽 가입하기</li>
            <li>아디클럽</li>
            <li>로그인</li>
          </ul>
        </div>
      </div>
    </>
  )
}
function HeadBot() {
  return(
    <>
      <div className='header'>
        <div className='header_cont'>
          <div>
            <img className='header_logo' src='https://www.adidas.co.kr/glass/react/5152538/assets/img/icon-adidas-logo.svg' alt='adidas' />
          </div>
          <ul>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>SPORTS</li>
            <li>BRANDS</li>
            <li>OUTLET</li>
          </ul>
          <ul>
            <li><FaUser size={20} /></li>
            <li><FaHeart  size={20}/></li>
            <li><FaShoppingBag size={20} /></li>
          </ul>
        </div>
      </div>
    </>
  )
}


function head() {
  return (
    <>
      <HeadTop />
      <HeadBot />
    </>
  )
}
export default head