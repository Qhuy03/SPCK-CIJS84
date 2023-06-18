import React from "react";
import './CSS/Header.css'
import { Link } from "react-router-dom";

const Header = ()=> {
    return(
        <>
        <div className="navBar">
  <nav>
    <ul className="navUl">
      <li><a href="?page=story">CÂU CHUYỆN </a></li>
      <li>
        <a href="?page=news" />
        <div className="dropdown">BẢNG TIN
          <div className="dropdown-content">
            <a href="#">App Cộng</a>
            <a href="#">Tin Tức</a>
            <a href="#">Hợp Tác</a>
            <a href="#">Đó Đây</a>
            <a href="#">Pha Chế</a>
          </div>
        </div>
      </li>
      <li><a href="?page=menu">THỰC ĐƠN </a></li>
      <li><a href="?page=home"><img className="LOGO" src="data:image/png;base64,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" alt="" width="135px" /> </a></li>
      <li><a href="?page=mauDich">
        </a><div className="dropdown"><a href="?page=mauDich">QUẦY MẬU DỊCH
          </a><div className="dropdown-content"><a href="?page=mauDich">
            </a><a href="#">Quầy Mậu Dịch</a> 
          </div>
        </div></li>
      <li><a href="?page=shop">CỬA HÀNG </a></li>
      <li><a href="?page=contact">
        </a><div className="dropdown"><a href="?page=contact">LIÊN HỆ
          </a><div className="dropdown-content"><a href="?page=contact">
            </a><a href="#">Tuyển Dụng</a>
            <a href="#">Cộng Lắng Nghe</a>
            <a href="#">Về Chúng Tôi</a></div></div></li>
      <li><Link to='/login' className="loginbtn">ĐĂNG NHẬP</Link></li>
    </ul>
  </nav>
</div>
</>
    );
}

export default Header;