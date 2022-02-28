import Header from './Header'
import Footer from './Footer'

function Login() {
  return(
    <>
      <Header />
      <div className='main_login'>
        <div className='login_container'>
          <div>
            <h3>로그인</h3>
            <p>비밀번호를 잊으셨나요?</p>
            <div>
              <input placeholder='이메일*' />
              <input placeholder='패스워드*' />
              <input type="checkbox" />
              <p>로그인상태를 유지할래요</p>
              <button>로그인</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Login