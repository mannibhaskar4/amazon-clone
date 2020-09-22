import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/Offerpage_1500x3001.jpg"
          alt=""
        />
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/JulyOffers/IMC500/N2UPI500/Download.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
