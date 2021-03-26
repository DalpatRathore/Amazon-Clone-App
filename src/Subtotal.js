import React from "react";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal ({basket.length} items ): {"$"}
          <strong>{getBasketTotal(basket)}</strong>
        </p>
        <small className="subtotal_gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </>
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
