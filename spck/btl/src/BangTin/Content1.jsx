import React from "react";
import { Link } from "react-router-dom";

const Content1=()=>{
    return(
        <>
        <div id="wrapper">
  <section className="section single-wrapper">
    <div className="container">
      
      <div className="row">
        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
          <div className="page-wrapper">
            <h3>MỪNG CỘNG MỚI TẠI 36/2 NGUYỄN GIA TRÍ Q.BÌNH THẠNH TP.HCM
            </h3>
            <div className="post-sharing">
              <ul className="list-inline">
                <li><a href="#" className="fb-button btn btn-primary"><i className="fa fa-facebook" /> <span className="down-mobile">Share on Facebook</span></a></li>
                <li><a href="#" className="tw-button btn btn-primary"><i className="fa fa-twitter" /> <span className="down-mobile">Tweet on Twitter</span></a></li>
              </ul>
              <div className="blog-content">  
                <p className="pp">
                  Ngày cuối cùng của tháng 5, cũng là ngày chào đón cửa hàng thứ 18 tại thành phố mang tên Bác, TP Hồ Chí Minh 🇻🇳 Chào đón những vị khách đầu tiên ghé thăm quán.
                </p>
                <img src="https://cong-news.appwifi.com/wp-content/uploads/2023/06/DSC8640.jpg" alt="" className="img-fluid img-fullwidth" />
                <div className="pp">
                  <p>Bạn Cộng với mặt tiền cực dễ tìm có địa chỉ tại: 36/2 - 36/4 Nguyễn Gia Trí, phường 25, quận Bình Thạnh, TP Hồ Chí Minh 
                  </p>
                  <img src="https://cong-news.appwifi.com/wp-content/uploads/2023/06/DSC8618.jpg" alt="" className="img-fluid img-fullwidth" />
                  <p>Điều đặc biệt là anh bạn Cộng này được lấy cảm hứng từ Xưởng rang xay cà phê, các chi tiết trong quán được chăm chút tỉ mỉ để tái hiện một không gian xưởng rang xay cà phê một cách chân thực nhất nhằm đem đến cho mọi người nhiều cảm xúc tích cực, vui vẻ nhất.
                    Hãy tới trải nghiệm Cộng mới, và nhận những món quà trong tuần lễ khai trương bạn nhé.
                  </p>
                  <br />
                  <br />
                  <p>Địa chỉ: Cộng Cà Phê - 36/2 - 36/4 Nguyễn Gia Trí, phường 25, quận Bình Thạnh, TP Hồ Chí Minh.
                  </p>
                </div>{/* end pp */}
              </div>{/* end content */}
              <div className="custombox clearfix">
                <h4 className="small-title">Có thể bạn sẽ thích</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tin.html" title>
                          <img src="https://cong-news.appwifi.com/wp-content/uploads/2023/05/MicrosoftTeams-image-8.png" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span className />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta">
                        <h4><a href="tin.html" title>TRÀ SHAN TUYẾT CỔ THỤ - HỘP GIẤY MỚI, TIỆN LỢI HƠN!
                          </a></h4>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                  <div className="col-lg-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <Link to="/tin" title>
                          <img src="https://cong-news.appwifi.com/wp-content/uploads/2023/04/web-thumbnail-01-1.png" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span className />
                          </div>{/* end hover */}
                        </Link>
                      </div>{/* end media */}
                      <div className="blog-meta">
                        <h4><Link to="/tin" title>HOAN HÔ CỘNG CÓ VINA - CÀ PHÊ "TA", PHA KIỂU "TÂY"
                          </Link></h4>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                </div>{/* end row */}
              </div>{/* end custom-box */}
              <hr className="invis1" />
            </div>{/* end page-wrapper */}
          </div>{/* end col */}
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
              <div className="widget">
                <div className="banner-spot clearfix">
                  <div className="banner-img">
                    <img src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/272253136_1329492604185797_8085365758257353013_n.jpg?_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=eFd0x08aUbcAX-Mg-Wq&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCLh_pC3Ry4_ORNdRQZqammlbtlXPmuXjBVnXb2UTqiYg&oe=649368B9" alt="" className="img-fluid" />
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
                      <img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/347615815_2401991033312231_5589671789769048144_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=774dER8O0NsAX-5XCc3&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBV1H_WFaM98xzA2yUFDQ7Oxm6dYUQvKVhXKLrJ6JJywg&oe=649353E2" alt="" className="img-fluid" />
                    </div>{/* end banner-img */}
                  </div>{/* end banner */}
                </div>{/* end widget */}
              </div>{/* end sidebar */}
            </div>{/* end col */}
          </div>{/* end row */}
        </div>{/* end container */}
      </div></div></section>
  
</div>{/* end wrapper */}
        </>
    );
};

export default Content1;