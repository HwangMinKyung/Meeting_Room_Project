import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { saveUserInfo } from '../dummy/store';
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

function Login(props) {

  // store.js에 저장해 둔 임시 데이터 가져오기
  let userInfo = useSelector((state) => state.user);
  let dispath = useDispatch();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [inputCheck , setInputCheck ] = useState({name : '', email : ''})


  const setChange = (e, targetInfo) => {
    const { target: { value } } = e;
    targetInfo === "email" ? setUserEmail(value) : setUserName(value);
  }

  const checkUser = (userData) => {
    const msg = {name : '', email : ''}
    const regExp = /[ㄱ-ㅎ ㅏ-ㅣ 가-힣]/g;
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    let result = true;

    if(userData['name'] === ""){
      msg['name'] = "입력해주세요."
      result = false;
    }
    else if(!regExp.test(userData['name'])) {
      msg['name'] = "확인해주세요."
      result = false;
    }

    if(userData['email'] === ""){
      msg['email'] = "입력해주세요."
      result = false;
    }
    else if(!emailRegEx.test(userData['email'])) {
      msg['email'] = "확인해주세요."
      result = false;
    }
    
    setInputCheck({...msg})
    
    return result
  }

  const onLogin = (event) => {
    event.preventDefault();

    let userData = { name: userName , email : userEmail };
    let result = checkUser(userData)

    userInfo.forEach(ele => {
      if (userData.email === ele.email && userData.name === ele.name) {
        dispath(saveUserInfo(ele));
        localStorage.setItem('userInfo', ele.name)
        props.navi(ele.role+"/1")
      }
    })
    // if(result) {
    //   axios.post('/user/signin', userData)
    //   .then(response => {
    //     if(response.status === "200") {
    //       localStorage.setItem("success_token", response.headers.Authorized);
          
    //       let role = response.data.role;
    //       if(role === "1") {
    //         props.navi("/stud")
    //       }
    //     }
    //   })
    //   .catch((error)=>{
        
    //   })
    // }
  }
 
  return (
    <div className='login-form-wrap'>
      <div className="login-form">
        <div className="login-heading">
          <Link className="login-heading__logo" to="#">
            <Header />
          </Link>
          <h5 className="login-heading__info">코딩허브 서비스 이용을 위해 로그인 해주세요.</h5>
        </div>
        <div className="login-content">
          <form onSubmit={onLogin}>
            <div className="login-content__name">
              <label htmlFor='userName'>이름</label>
              <input className="login-name-input" type="text" id="userName" placeholder='이름을 입력하세요' onChange={(e) => setChange(e, "name")}></input>
              {inputCheck['name'] !== "" ? <span>{`이름을 ${inputCheck['name']}`}</span> : '' }
            </div>
            <div className="login-content__email">
              <label htmlFor='userEmail'>이메일</label>
              <input className="login-email-input" type="text" id="userEmail" placeholder='이메일을 입력하세요' onChange={(e) => setChange(e, "email")}></input>
              {inputCheck['email'] !== "" ? <span>{`이메일을 ${inputCheck['email']}`}</span> : ''}
            </div>
            <button className="login-active-button" type="submit">로그인</button>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Login;