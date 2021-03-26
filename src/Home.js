import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/unrec1499/Under1499_Gw_1500x600._CB661592357_.jpg"
        alt=""
        className="home_image"
      />
      <div className="home_row">
        <Product
          id="8992121"
          title="Sony SRS-XB43 Wireless Extra Bass Bluetooth Speaker with 24 Hours  (Blue)"
          price={50.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/gateway/Desktop_Speakers_1198382_379x304._SY304_CB448485373_.jpg"
        ></Product>
        <Product
          id="112121"
          title="Fossil Grant Chronograph Analog Black Dial Men's Watch - FS4832"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41grOPcN3WL._AC_SR400,600_.jpg"
        ></Product>
      </div>
      <div className="home_row">
        <Product
          id="7472121"
          title="BLUEWUD Aero Engineered Wood TV Entertainment Unit/Wall Set Top Box Stand Shelf Wenge (Large)"
          price={20.96}
          rating={2}
          image="https://m.media-amazon.com/images/I/81enCmjrNbL._AC_UL320_.jpg 1x, https://m.media-amazon.com/images/I/81enCmjrNbL._AC_UL480_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/81enCmjrNbL._AC_UL640_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/81enCmjrNbL._AC_UL800_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/81enCmjrNbL._AC_UL960_FMwebp_QL65_.jpg"
        ></Product>
        <Product
          id="8992121"
          title="Logitech B525 Commercial HD Webcam"
          price={200.96}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/717JksfFLcL._AC_UL160_SR160,160_.jpg"
        ></Product>
        <Product
          id="112121"
          title="Portronics C-Konnect POR-1041, 3-in-1 USB Type C Adapter to Project Screen of Your USB Type-C"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51ag4s4oOwL._AC_UL320_.jpg 1x, https://m.media-amazon.com/images/I/51ag4s4oOwL._AC_UL480_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/51ag4s4oOwL._AC_UL640_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/51ag4s4oOwL._AC_UL800_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/51ag4s4oOwL._AC_UL960_FMwebp_QL65_.jpg"
        ></Product>
      </div>
      <div className="home_row">
        <Product
          id="5692121"
          title="DeckUp Cannes Engineered Wood TV Entertainment Unit Dark Wenge,2 door"
          price={80000.96}
          rating={5}
          image="http://www.lgnewsroom.com/wp-content/uploads/2019/05/LG-8K-OLED-TV-001.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
