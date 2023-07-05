import React from "react";
import { Link } from "react-router-dom";

const Content = ()=> {
    return(
        <div>
  <div className="container">
    <Link to='/story'>
    <img src="https://cong-news.appwifi.com/wp-content/uploads/2019/01/banner1.jpg" alt="" style={{width: '100%'}} />
    <div className="overlay">
      <div className="text">CÂU CHUYỆN CỘNG</div>
    </div>
    </Link>
  </div>
  <br />
  <div className="container2" style={{display: 'flex'}}>
    <img src="https://cong-news.appwifi.com/wp-content/uploads/2019/05/11copy.jpg" style={{width: '50%', marginRight: '2%'}} />
    <div className="middle">
      <div className="text">PHA CHẾ</div>
    </div>
    <img src="https://cong-news.appwifi.com/wp-content/uploads/2020/07/Thu%CC%9B%CC%A3c-%C4%91o%CC%9Bn-copy.jpg" style={{width: '48%'}} />
    <div className="middle">
      <div className="text">THỰC ĐƠN</div>
    </div>
  </div>
  <br />
  <div className="card">
    <div className="main-content">
      <Link to='/tin'><img src="https://cong-news.appwifi.com/wp-content/uploads/2019/05/Pha-Che.jpg" alt="" /></Link>
    </div>
    <div className="overlay-content">
      <p>
        <u>TIN TỨC NỔI BẬT</u> <span>"Lao động hăng say, tình hay sẽ đến"
          <br />
          Cộng chúc bạn một ngày mới thật nhiều năng lượng để hoàn thành công việc thật tốt!</span>
      </p>
    </div>
  </div>
  <br />
  <div className="card2">
    <img src="https://cong-news.appwifi.com/wp-content/uploads/2019/06/tuyen-Dung-2.jpg" alt="" width="100%" />
    <div className="overlay-text">
      <p><u>TUYỂN DỤNG</u></p>
      <br />
      <br />
      Gia nhập gia đình Cộng ngay hôm nay.
      <br />
      Đọc thông tin tại đây để biết thêm chi tiết.
      <br />
      Cộng nhiệt liệt chào mừng.
    </div>
  </div>
  <br />
  <br />
</div>

    );
};

export default Content;