import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

// import React from "react";

const Card = ({ props }) => {
  const { cart, removeFromCart, clearCartB, addToCart } = useCartStore(
    (state) => ({
      cart: state.cart,
      removeFromCart: state.removeFromCart,
      clearCartB: state.clearCart,
      addToCart: state.addToCart,
    })
  );

  return (
    <div className="p-4 m-3 border-2 flex items-center">
      <Image src={`${props.src.src}`} alt="img" width={200} height={200} />
      <div className="text p-1 ml-2">
        <p>product name : {props.productName}</p>
        <p>price: {props.price}</p>
        <button
          className="bg-green-300 p-1 m-2 text-sm rounded"
          onClick={() => {
            addToCart(props);
          }}
        >
          Add to cart
        </button>
        {/* <button className="bg-red-300 p-1 m-2 text-sm rounded">Remove from cart</button> */}
      </div>
    </div>
  );
};

export default Card;
