import React from "react";
import './assets/CSS/Login.css';
import { Link } from "react-router-dom";

const Login =()=>{

  const handleSubmit = (event) => {
		event.preventDefault()
	
	}


    return(
        <form onsubmit={handleSubmit}>
  <div className="login">
    <h1>Đăng nhập</h1>
    <p>Vui lòng nhập thông tin tài khoản</p>
    <hr />
    <label htmlFor="username"><b>Tên đăng nhập</b></label>
    <input type="text" placeholder="Mời nhập tên tài khoản" name="username" id="username" />
    <label htmlFor="password"><b>Mật khẩu</b></label>
    <input type="password" placeholder="******" name="password" id="password" />
    <hr />
    <button type="submit" className="submit">Đăng nhập</button>
  </div>
  <div className="register-login">
    <p>Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>.</p>
  </div>
</form>

    );
};

export default Login;