import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Last_Hours/Launch/1500x600_Hero-Tall_JPN._CB669516237_.jpg"
          alt="banner"
        />

        <div className="home__row">
          {/* Product */}
          <Product
            id="1"
            title="Amazonn Basics Pro Gaming Headset"
            price={35.46}
            image="https://m.media-amazon.com/images/I/71xX+u3BEZL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Amazonn Basics Hyper Permanent Adhesive Refill"
            price={1.67}
            image="https://m.media-amazon.com/images/I/61UWUE8JD8L._AC_UL320_.jpg"
            rating={4}
          />
          {/* Product */}
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Amazonn Basics 5-Shelf Shelving Storage"
            price={39.23}
            image="https://m.media-amazon.com/images/I/61R-wqx4Y9S._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="SUNNOW Ergonomic Office Chair"
            price={269.0}
            image="https://m.media-amazon.com/images/I/81BcJZtLxJL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Single LCD Monitor Desk Mount Adjustable Computer Monitor Stand"
            price={49.99}
            image="https://m.media-amazon.com/images/I/614OvbhSa1L._AC_UL320_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="5"
            title="The lean Startup"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/tile1_PC_1x-HEALTH2._SY304_CB670262824_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
