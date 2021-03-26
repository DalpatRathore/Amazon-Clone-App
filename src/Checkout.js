import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout_ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, numquam dicta voluptate cum, praesentium eum unde quam
              animi illo id laboriosam aliquam dolorum eaque excepturi?
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket </h2>
            {basket?.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout_right">
        {basket.length > 0 && <Subtotal></Subtotal>}
      </div>
    </div>
  );
}

export default Checkout;
