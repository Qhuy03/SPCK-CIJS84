import React, { useEffect, useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Drink from "./Drink";
const Content = () => {
  const [listDrink, setListDrink] = useState([]);

  const handleFilterData = (type) => {
    console.log(type);
  };

  useEffect(() => {
    fetch("https://6485ce35a795d24810b7566f.mockapi.io/api/v1/Drink")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setListDrink(data);
      });
  }, []);

  return (
    
    
    <>
    <Header/>
      <hr />
      <div
        className="content1000"
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 10,
          height: 6100,
        }}
      >
        <div className="content_left" style={{ width: "34%" }}>
          <div style={{ marginLeft: 250, marginTop: 50, position: 'sticky', top:'50px' }}>
            <p
              style={{
                fontSize: 14,
                color: "gray",
                marginLeft: 20,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleFilterData("Type 1")}
            >
              <a href="#type1">Đặc Biệt</a>
            </p>
            <p
              style={{
                fontSize: 14,
                color: "gray",
                marginLeft: 20,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleFilterData("Type 2")}
            >
              <a href="#type2">Cà Phê Ta</a>
            </p>
            <p
              style={{
                fontSize: 14,
                color: "gray",
                marginLeft: 20,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleFilterData("Type 3")}
            >
             <a href="#type3">Sinh Tố Cộng Đổi Mới</a> 
            </p>
            <p
              style={{
                fontSize: 14,
                color: "gray",
                marginLeft: 20,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleFilterData("Type 4")}
            >
             <a href="#type4">Đồ Địa Phương</a>  
            </p>
            <p
              style={{
                fontSize: 14,
                color: "gray",
                marginLeft: 20,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleFilterData("Type 5")}
            >
             <a href="#type5"> Trà Cổ Thụ</a>
            </p>
            <p
              style={{
                fontSize: 14,
                color: "gray",
                marginLeft: 20,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleFilterData("Type 6")}
            >
            <a href="#type6"> Trái Cây</a> 
            </p>
            <p
              style={{
                fontSize: 14,
                color: "gray",
                marginLeft: 20,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleFilterData("Type 7")}
            >
             <a href="#type7"> Sữa Chua</a> 
            </p>
            <p
              style={{
                fontSize: 14,
                color: "gray",
                marginLeft: 20,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleFilterData("Type 8")}
            >
            <a href="#type8"> Topping</a>  
            </p>
            <p
              style={{
                fontSize: 14,
                color: "gray",
                marginLeft: 20,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleFilterData("Type 9")}
            >
             <a href="#type9">  Đồ Ăn Chơi</a> 
            </p>
          </div>
        </div>
        <div className="content_right" style={{ width: "66%" }}>
          <h4 className="tieuDe">
            <p
              style={{
                fontWeight: "bold",
                fontSize: 33,
                color: "gray",
                marginBottom: 10,
                marginLeft: 20,
              }}
            >
              Đặc Biệt
            </p>
            <div style={{ display: "flex", flexDirection: "row" }} id="type1">
              {listDrink
                .filter((drink) => drink.Type === "Type 1")
                .map((drink, index) => (
                  <Drink
                    anh={drink.image}
                    tendouong={drink.name}
                    giatien={drink.Price}
                  />
                ))}
            </div>
            <p
              style={{
                fontWeight: "bold",
                fontSize: 33,
                color: "gray",
                marginBottom: 10,
                marginLeft: 20,
              }}
            >
              Cà Phê Ta
            </p>
            <div
            id="type2"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {listDrink
                .filter((drink) => drink.Type === "Type 2")
                .map((drink, index) => (
                  <Drink
                    anh={drink.image}
                    tendouong={drink.name}
                    giatien={drink.Price}
                  />
                ))}
            </div>
            <p
               id="type3"
              style={{
                fontWeight: "bold",
                fontSize: 33,
                color: "gray",
                marginBottom: 10,
                marginLeft: 20,
              }}
            >
              Sinh Tố Cộng Đổi Mới
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {listDrink
                .filter((drink) => drink.Type === "Type 3")
                .map((drink, index) => (
                  <Drink
                    anh={drink.image}
                    tendouong={drink.name}
                    giatien={drink.Price}
                  />
                ))}
            </div>
            <p
             id = "type4"
              style={{
                fontWeight: "bold",
                fontSize: 33,
                color: "gray",
                marginBottom: 10,
                marginLeft: 20,
              }}
            >
              Đồ Địa Phương
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {listDrink
                .filter((drink) => drink.Type === "Type 4")
                .map((drink, index) => (
                  <Drink
                    anh={drink.image}
                    tendouong={drink.name}
                    giatien={drink.Price}
                  />
                ))}
            </div>
            <p
            id = "type5"
              style={{
                fontWeight: "bold",
                fontSize: 33,
                color: "gray",
                marginBottom: 10,
                marginLeft: 20,
              }}
            >
              Trà Cổ Thụ
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {listDrink
                .filter((drink) => drink.Type === "Type 5")
                .map((drink, index) => (
                  <Drink
                    anh={drink.image}
                    tendouong={drink.name}
                    giatien={drink.Price}
                  />
                ))}
            </div>
            <p
            id = "type6"
              style={{
                fontWeight: "bold",
                fontSize: 33,
                color: "gray",
                marginBottom: 10,
                marginLeft: 20,
              }}
            >
              Trái Cây
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {listDrink
                .filter((drink) => drink.Type === "Type 6")
                .map((drink, index) => (
                  <Drink
                    anh={drink.image}
                    tendouong={drink.name}
                    giatien={drink.Price}
                  />
                ))}
            </div>
            <p
            id = "type7"
              style={{
                fontWeight: "bold",
                fontSize: 33,
                color: "gray",
                marginBottom: 10,
                marginLeft: 20,
              }}
            >
              Sữa Chua
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >

{listDrink
                .filter((drink) => drink.Type === "Type 7")
                .map((drink, index) => (
                  <Drink
                    anh={drink.image}
                    tendouong={drink.name}
                    giatien={drink.Price}
                  />
                ))}
              
            </div>

            <p
            id = "type8"
              style={{
                fontWeight: "bold",
                fontSize: 33,
                color: "gray",
                marginBottom: 10,
                marginLeft: 20,
              }}
            >
              Topping
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
             {listDrink
                .filter((drink) => drink.Type === "Type 8")
                .map((drink, index) => (
                  <Drink
                    anh={drink.image}
                    tendouong={drink.name}
                    giatien={drink.Price}
                  />
                ))}
            </div>

            <p
             id="type9"
              style={{
                fontWeight: "bold",
                fontSize: 33,
                color: "gray",
                marginBottom: 10,
                marginLeft: 20,
              }}
            >
              Đồ Ăn Chơi
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {listDrink
                .filter((drink) => drink.Type === "Type 9")
                .map((drink, index) => (
                  <Drink
                    anh={drink.image}
                    tendouong={drink.name}
                    giatien={drink.Price}
                  />
                ))}
            </div>
          </h4>
        </div>
      </div>
      <Footer/>
    </>
    
    
  );
};
export default Content;
