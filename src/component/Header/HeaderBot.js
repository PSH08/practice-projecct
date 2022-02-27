import {FaUser,FaHeart,FaShoppingBag} from "react-icons/fa"

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
export default HeadBot