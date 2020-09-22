import React from "react";
import "./Home.css";
import Product from "./Product";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__conatiner">
        <Link to="https://www.primevideo.com/">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="home__row">
        <Product
          id="217845"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful
          Businesses"
          price={559.0}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          rating={4}
        />
        <Product
          id="946326"
          title="PS4 1TB Slim Bundled with Spider-Man, GTaSport, Ratchet & Clank And PSN 3Month"
          price={27999.0}
          image="https://images-na.ssl-images-amazon.com/images/I/81cIK-WlKDL._SL1500_.jpg"
          rating={4}
        />

        {/* Product */}
      </div>
      <div className="home__row">
        <Product
          id="343264"
          title="Apple iPhone 11 (64GB) - Black"
          price={66990.0}
          image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
          rating={5}
        />
        <Product
          id="258845"
          title="ASUS TUF Gaming F15 Laptop 15.6 inch FHD 144Hz Intel Core i5 10th Gen, GTX 1650 4GB GDDR6 Graphics (8GB RAM/512GB NVMe SSD/Windows 10/Fortress Gray/2.30 Kg), FX566LH-HN008T"
          price={71990.0}
          image="https://images-na.ssl-images-amazon.com/images/I/914o5xV1%2B8L._SL1500_.jpg"
          rating={4}
        />
        <Product
          id="217465"
          title="Zombom Women's Top"
          price={298.0}
          image="https://images-na.ssl-images-amazon.com/images/I/61bElv4c12L._UL1280_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="418004"
          title="ps5 CPU

          x86-64-AMD Ryzen™ “Zen 2”
          
          8 Cores / 16 Threads
          
          Variable frequency, up to 3.5 GHz
          GPU

          AMD Radeon™ RDNA 2-based graphics engine

          Ray Tracing Acceleration

          Variable frequency, up to 2.23 GHz (10.3 TFLOPS)
          System Memory

          GDDR6 16GB

          448GB/s Bandwidth

          SSD

          825GB

          5.5GB/s Read Bandwidth (Raw)

          Optical Drive

          Ultra HD Blu-ray (66G/100G) ~10xCAV

          BD-ROM (25G/50G) ~8xCAV

          BD-R/RE (25G/50G) ~8xCAV

          DVD ~3.2xCLV

          PS5 Game Disc

          Ultra HD Blu-ray, up to 100GB/disc"
          price={56800.0}
          image="https://cdn.collider.com/wp-content/uploads/2020/06/ps5-slice.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
