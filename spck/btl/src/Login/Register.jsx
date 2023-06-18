import React, { useState } from "react";
import './assets/CSS/Register.css';
import { Link } from "react-router-dom";

const Register=()=>{

  const handleSubmit = (event) => {
		event.preventDefault()

	}

  const [listUser, setListUser] = useState([
    {
      userName: 'admin',
      password: 'admin123',
      password2: 'admin123',
    }

  ])

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');


  const handleAddUser =()=>{
    const newUser = {
      userName: userName,
      password: password,
      password2: password2,
    };

    // const a= userName != '' ? '':alert("Yêu cầu nhập tên đăng nhập!");
    // const b = password.length >6 '' : alert("Cần nhập ít nhất 6 ký tự");
    if(userName == ''){
      alert('Yêu cầu nhập tên đăng nhập!');
      return false;
    } else if(password.length < 6){
      alert('Cần nhập ít nhất 6 ký tự!');
      return false;
    } else if(password2 != password){
      alert('cần nhập lại chính xác mật khẩu đã nhập!');
      return false;
    } else{
      alert('Bạn đã lập tài khoản thành công!');
    }

    setListUser([...listUser, newUser]);

  };  



    return(
        <form action method="POST" onsubmit={handleSubmit}>
  <div className="register">
    <h1>Đăng ký</h1>
    <p>Vui lòng điền thông tin để đăng ký</p>
    <hr />

    <label htmlFor="username"><b>Tên đăng nhập</b></label>
    <input value={userName} onChange={(event)=>setUserName(event.target.value)}  type="text" placeholder="Mời nhập tên tài khoản" name="username" id="username" />

    <label htmlFor="password"><b>Mật khẩu</b></label>
    <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="******" name="password" id="password" />

    <label htmlFor="password-repeat"><b>Nhập lại mật khẩu</b></label>
    <input value={password2} onChange={(event)=>setPassword2(event.target.value)} type="password" placeholder="******" name="password-repeat" id="password-repeat" />

    <hr />
    <p>Để tạo tài khoản vui lòng đồng ý với điều khoản của chúng tôi <a href="#">Terms &amp; Privacy</a>.</p>
    <Link to='/'><button onClick={handleAddUser} type="submit" className="submit">Đăng ký</button></Link>
  </div>
  <div className="register login">
    <p>Bạn đã có tài khoản rồi? <Link to="/login">Đăng nhập</Link>.</p>
</div>
  
  
</form>
    );
};

export default Register;