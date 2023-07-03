import React, { useEffect } from "react";
import Drink from "./Drink";
import { useLocation } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
const Detail = () => {
  const { state } = useLocation();
  useEffect(()=>{
    const handleScroll = () => {
        const position = document.documentElement.scrollTop;
        console.log("scrolling position: ", position);
    }
        document.addEventListener("scroll", handleScroll)
    return () => {
        document.removeEventListener("scroll", handleScroll)
    }
  });
  return (
    <>
      <Header />
      <hr />
      <div style={{ display: "flex", flexDirection: "row", marginTop: 50 }}>
        <img
          style={{
            height: 450,
            width: 450,
            marginLeft: 300,
            marginRight: 50,
            marginBottom: 100,
            marginTop: 35,
          }}
          src={state.anh}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>
            {state.tendouong}
          </p>
          <p style={{ fontSize: 18, marginBottom: 10, color: "gray" }}>
            {state.giatien}
          </p>
        </div>
      </div>

      <div style={{ marginLeft: 300 }}>
        <p style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>
          Sản phẩm bán chạy
        </p>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <Drink
            anh="https://cong-news.appwifi.com/wp-content/uploads/2023/02/tra%CC%80-su%CC%9B%CC%83a-tha%CC%A3ch-tra%CC%80-1.jpg"
            tendouong="TRÀ SỮA THẠCH TRÀ"
            giatien="55,000 Đ"
          />
          <Drink
            anh="https://cong-news.appwifi.com/wp-content/uploads/2023/02/sa%CC%80i-go%CC%80n-ta%CC%86%CC%81c-xi%CC%81-muo%CC%A3%CC%82i.jpg"
            tendouong="SÀI GÒN TẮC XÍ MUỘI"
            giatien="45.000 Đ"
          />
          <Drink
            anh="https://cong-news.appwifi.com/wp-content/uploads/2023/02/du%CC%9Ba-ha%CC%82%CC%81u.jpg"
            tendouong="Dưa Hấu"
            giatien="65.000 Đ"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Detail;
