import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import './css/bootstrap.css';
import './css/colors.css';
// import './style.css';
import './css/responsive.css';
import './css/version/tech.css';

const TinTuc = ()=>{
    return(
        <>
        <Header/>

        <div id="wrapper">
    
  {/* card */}
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
          <div className="page-wrapper">
            <div className="blog-top clearfix">
              <h4 className="pull-left">BẢNG TIN CỘNG <a href="#"><i className="fa fa-rss" /></a></h4>
            </div>{/* end blog-top */}
            <div className="blog-list clearfix">
              <div className="blog-box row">
                <div className="col-md-4">
                  <div className="post-media">
                    <a href="tin.html" title>
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2023/06/DSC8640.jpg" alt="" className="img-fluid" />
                      <div className="hovereffect" />
                    </a>
                  </div>{/* end media */}
                </div>{/* end col */}
                <div className="blog-meta big-meta col-md-8">
                  <h4><a href="tin.html" title>MỪNG CỘNG MỚI TẠI 36/2 NGUYỄN GIA TRÍ Q.BÌNH THẠNH TP.HCM
                    </a></h4>
                  <p>Hân hoan - háo hức - hồ hởi vì Cộng - Nguyễn Gia Trí đã chính thức khai trương rồi!
                  </p>
                  <small><a>17 Tháng Sáu, 2023</a></small>
                  <small><a>by Cộng</a></small>
                  <small><a><i className="fa fa-eye" /> 1114</a></small>
                </div>{/* end meta */}
              </div>{/* end blog-box */}
              <hr className="invis" />
              <div className="blog-box row">
                <div className="col-md-4">
                  <div className="post-media">
                    <a href="tin.html" title>
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2023/05/MicrosoftTeams-image-8.png" alt="" className="img-fluid" />
                      <div className="hovereffect" />
                    </a>
                  </div>{/* end media */}
                </div>{/* end col */}
                <div className="blog-meta big-meta col-md-8">
                  <h4><a href="tin.html" title>TRÀ SHAN TUYẾT CỔ THỤ - HỘP GIẤY MỚI, TIỆN LỢI HƠN!
                    </a></h4>
                  <p>Trà Cổ Thụ - phiên bản hộp giấy tiện lợi mới, rất thích hợp để làm quà và sử dụng hàng ngày. Mỗi tách trà cổ thụ là một nét thanh tao của từng lá trà, hương thơm thanh khiết, vị chát dịu êm và hậu vị ngọt lành sâu lắng.
                    <small><a>17 Tháng Sáu, 2023</a></small>
                    <small><a />by Cộng</small>
                    <small><a><i className="fa fa-eye" /> 4412</a></small>
                  </p></div>{/* end meta */}
              </div>{/* end blog-box */}
              <hr className="invis" />
              <div className="blog-box row">
                <div className="col-md-4">
                  <div className="post-media">
                    <a href="tin.html" title>
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2023/05/banner-web-01.png" alt="" className="img-fluid" />
                      <div className="hovereffect" />
                    </a>
                  </div>{/* end media */}
                </div>{/* end col */}
                <div className="blog-meta big-meta col-md-8">
                  <h4><a href="tin.html" title>BÌNH GIỮ NHIỆT HỒNG PHIÊN BẢN MỚI - NAY ĐÃ CÓ MẶT TRÊN TOÀN QUỐC!
                    </a></h4>
                  <p>Bình Giữ Nhiệt Hồng chính thức lên kệ tại tất cả các cửa hàng Cộng Cà Phê trên toàn quốc, anh chị em bạn bè thân hữu còn chờ gì mà không cùng nhau ghé Cộng gần nhất và rước ngay "em" bình mới toanh về nhà!
                  </p>
                  <small><a href="tin.html" title>17 Tháng Sáu, 2023</a></small>
                  <small><a />/&gt;</small>
                  <small><a href="tin.html" title><i className="fa fa-eye" /> 2313</a></small>
                </div>{/* end meta */}
              </div>{/* end blog-box */}
              <hr className="invis" />
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="banner-spot clearfix">
                    <div className="banner-img">
                      <img src="https://img.jamja.vn/jamja-prod/cong-nguyen-van-huyen.jpg?cache=1" alt="" className="img-fluid" />
                    </div>{/* end banner-img */}
                  </div>{/* end banner */}
                </div>{/* end col */}
              </div>{/* end row */}
              <hr className="invis" />
              <div className="blog-box row">
                <div className="col-md-4">
                  <div className="post-media">
                    <a href="/app-cong" title>
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2023/04/web-thumbnail-01-1.png" alt="" className="img-fluid" />
                      <div className="hovereffect" />
                    </a>
                  </div>{/* end media */}
                </div>{/* end col */}
                <div className="blog-meta big-meta col-md-8">
                  <h4><a href="tin.html" title>HOAN HÔ CỘNG CÓ VINA - CÀ PHÊ "TA", PHA KIỂU "TÂY"
                    </a></h4>
                  <p>Nhóm Cà phê Vina - sử dụng hạt Robusta Việt Nam, ủ bằng phin truyền thống, pha chế theo “kiểu Tây”, mang hương vị nhẹ nhàng mà vẫn đủ tỉnh táo, tạo nên những đồ uống mang đậm tinh thần và văn hoá “kiểu Cộng”.
                  </p>
                  <small><a href="tin.html" title>17 Tháng Sáu, 2023</a></small>
                  <small><a />/&gt;</small>
                  <small><a href="tin.html" title><i className="fa fa-eye" /> 4441</a></small>
                </div>{/* end meta */}
              </div>{/* end blog-box */}
              <hr className="invis" />
              <div className="blog-box row">
                <div className="col-md-4">
                  <div className="post-media">
                    <a href="tin.html" title>
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2023/03/IMG_22931-1.jpg" alt="" className="img-fluid" />
                      <div className="hovereffect" />
                    </a>
                  </div>{/* end media */}
                </div>{/* end col */}
                <div className="blog-meta big-meta col-md-8">
                  <h4><a href="tin.html" title>CỘNG CÀ PHÊ - 32 ĐIỆN BIÊN PHỦ MỞ RỘNG DIỆN TÍCH VỚI KHÔNG GIAN MỚI
                    </a></h4>
                  <p>Ngày 07/03/2023 vừa qua, Cộng - 32 Điện Biên Phủ đã chính thức có thêm không gian mới là khối nhà kề bên với 2 tầng rộng rãi, xanh mát, giữ trọn vẹn nét mộc mạc và bình yên nơi góc phố quen thuộc.
                  </p>
                  <small><a href="tin.html" title>17 Tháng Sáu, 2023</a></small>
                  <small><a>by Cộng</a></small>
                  <small><a href="tin.html" title><i className="fa fa-eye" /> 33312</a></small>
                </div>{/* end meta */}
              </div>{/* end blog-box */}
              <hr className="invis" />
              <div className="blog-box row">
                <div className="col-md-4">
                  <div className="post-media">
                    <a href="tin.html" title>
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2023/03/IMG_0977-1.jpg" alt="" className="img-fluid" />
                      <div className="hovereffect" />
                    </a>
                  </div>{/* end media */}
                </div>{/* end col */}
                <div className="blog-meta big-meta col-md-8">
                  <h4><a href="tin.html" title>CỘNG CÀ PHÊ - 79 NGỌC HỒI, HÀ NỘI - ĐÁNH DẤU CỬA HÀNG THỨ 61 TRÊN TOÀN QUỐC
                    </a></h4>
                  <p>Ngày 10/02/2023, Cộng Cà Phê hân hoan khai trương cửa hàng Cộng - 79 Ngọc Hồi, Hoàng Mai, Hà Nội. Đây cũng là cửa hàng ghi dấu mốc thứ 61 của hệ thống Cộng Cà Phê trên toàn quốc!
                  </p>
                  <small><a href="tin.html" title>17 Tháng Sáu, 2023</a></small>
                  <small><a>by Cộng</a></small>
                  <small><a href="tin.html" title><i className="fa fa-eye" /> 33312</a></small>
                </div>{/* end meta */}
              </div>{/* end blog-box */}
              <hr className="invis" />
              <div className="blog-box row">
                <div className="col-md-4">
                  <div className="post-media">
                    <a href="tin.html" title>
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2022/12/MicrosoftTeams-image.png" alt="" className="img-fluid" />
                      <div className="hovereffect" />
                    </a>
                  </div>{/* end media */}
                </div>{/* end col */}
                <div className="blog-meta big-meta col-md-8">
                  <h4><a href="tin.html" title>ĐÔNG NÀY, CỘNG BÁN MỘT CHÚT... DỊU DÀNG, ÊM ẤM
                    </a></h4>
                  <p>Cộng đã ấp ủ có thể tạo ra một hương vị vừa đủ ấm áp cho những ngày trở gió, vừa đủ mềm mại, nhẹ nhàng, để bạn cảm được chút bay bổng khi trải nghiệm. Và thế là 02 món Trà Sữa của Bộ sưu tập Đồ uống mùa đông năm nay ra đời...
                  </p>
                  <small><a href="tin.html" title>17 Tháng Sáu, 2023</a></small>
                  <small><a>by Cộng</a></small>
                  <small><a href="tin.html" title><i className="fa fa-eye" /> 4412</a></small>
                </div>{/* end meta */}
              </div>{/* end blog-box */}
              <hr className="invis" />
              <div className="blog-box row">
                <div className="col-md-4">
                  <div className="post-media">
                    <a href="tin.html" title>
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2022/11/MicrosoftTeams-image-7.png" alt="" className="img-fluid" />
                      <div className="hovereffect" />
                    </a>
                  </div>{/* end media */}
                </div>{/* end col */}
                <div className="blog-meta big-meta col-md-8">
                  <h4><a href="tin.html" title>TUYỂN DỤNG CHUYÊN VIÊN NHÂN SỰ TỔNG HỢP
                    </a></h4>
                  <p>Cộng Cà Phê chiêu mộ vị trí Chuyên viên Nhân sự tổng hợp, một nhân tố đa nhiệm và năng động, giúp chúng tôi phụ trách việc giám sát hoạt động của phòng hành chính nhân sự.
                  </p>
                  <small><a href="tin.html" title>15 Tháng Sáu, 2023</a></small>
                  <small><a>by Cộng</a></small>
                  <small><a href="tin.html" title><i className="fa fa-eye" /> 44123</a></small>
                </div>{/* end meta */}
              </div>{/* end blog-box */}
              <hr className="invis" />
              <div className="blog-box row">
                <div className="col-md-4">
                  <div className="post-media">
                    <a href="tin.html" title>
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2022/10/tro%CC%9B%CC%A3-ly%CC%81-kinh-doanh-web_Tk-web_Tk-web.png" alt="" className="img-fluid" />
                      <div className="hovereffect" />
                    </a>
                  </div>{/* end media */}
                </div>{/* end col */}
                <div className="blog-meta big-meta col-md-8">
                  <h4><a href="tin.html" title>TUYỂN DỤNG TRỢ LÝ KINH DOANH
                    </a></h4>
                  <p>Cộng Cà Phê tuyển dụng Trợ Lý Kinh Doanh, phối hợp và tham gia hỗ trợ hoạt động bán hàng, cùng chúng tôi đạt được mục tiêu và phát triển, vươn xa hơn nữa.
                  </p>
                  <small><a href="tin.html" title>15 Tháng Sáu, 2023</a></small>
                  <small><a>by Cộng</a></small>
                  <small><a href="tin.html" title><i className="fa fa-eye" /> 2214</a></small>
                </div>{/* end meta */}
              </div>{/* end blog-box */}
              <hr className="invis" />
              <div className="blog-box row">
                <div className="col-md-4">
                  <div className="post-media">
                    <a href="tin.html" title>
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2022/10/Untitled-4-01-3.png" alt="" className="img-fluid" />
                      <div className="hovereffect" />
                    </a>
                  </div>{/* end media */}
                </div>{/* end col */}
                <div className="blog-meta big-meta col-md-8">
                  <h4><a href="tin.html" title>CỘNG CÀ PHÊ: KHAO "TIỆC ƯU ĐÃI" MỪNG "XINH" NHẬT 15 NĂM
                    </a></h4>
                  <p>Bạn ơi, Cộng đang khao “tiệc ưu đãi” cùng nhiều quà to, mừng “xinh” nhật 15 tuổi vui phơi phới này!
                  </p>
                  <small><a href="tin.html" title>15 Tháng Sáu, 2023</a></small>
                  <small><a a>by Cộng</a></small>
                  <small><a href="tin.html" title><i className="fa fa-eye" /> 3331</a></small>
                </div>{/* end meta */}
              </div>{/* end blog-box */}
            </div>{/* end blog-list */}
          </div>{/* end page-wrapper */}
          <hr className="invis" />
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-start">
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>{/* end col */}
          </div>{/* end row */}
        </div>{/* end col */}
        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
          <div className="sidebar">
            <div className="widget">
              <div className="banner-spot clearfix">
                <div className="banner-img">
                  <img src="https://static.ybox.vn/2019/12/4/1575519382406-21728627_10155163308469005_5888090380038063385_o.jpg" alt="" className="img-fluid" />
                </div>{/* end banner-img */}
              </div>{/* end banner */}
            </div>{/* end widget */}
            <div className="widget">
              <div className="widget">
                <h2 className="widget-title">Follow Us</h2>
                <div className="row text-center">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <a href="#" className="social-button facebook-button">
                      <i className="fa fa-facebook" />
                      <p>27k</p>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <a href="#" className="social-button twitter-button">
                      <i className="fa fa-twitter" />
                      <p>98k</p>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <a href="#" className="social-button google-button">
                      <i className="fa fa-google-plus" />
                      <p>17k</p>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <a href="#" className="social-button youtube-button">
                      <i className="fa fa-youtube" />
                      <p>22k</p>
                    </a>
                  </div>
                </div>
              </div>{/* end widget */}
              <div className="widget">
                <div className="banner-spot clearfix">
                  <div className="banner-img">
                    <img src="https://toplist.vn/images/800px/cong-ca-phe-vincom-thai-nguyen-527597.jpg" alt="" className="img-fluid" />
                  </div>{/* end banner-img */}
                </div>{/* end banner */}
              </div>{/* end widget */}
            </div>{/* end sidebar */}
          </div>{/* end col */}
        </div>{/* end row */}
      </div>{/* end container */}
    </div></section>
</div>
<Footer/>
        </>
    );
};

export default TinTuc;