"use client";
import Card from "@/components/card";
import CartItemCard from "@/components/CartItem";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
// import { phone } from "/download.jpg";
import productimg from "/public/assets/download.jpg";
import productimg1 from "/public/assets/download1.jpg";
import productimg2 from "/public/assets/download3.jpg";
import productimg3 from "/public/assets/images.jpg";
import productimg4 from "/public/assets/images1.jpg";
import productimg5 from "/public/assets/iphone14.jpg";

const productStore = [
  { productName: "Smartwatch", price: 300, id: 1, src: productimg },
  { productName: "Smartwatch1", price: 350, id: 2, src: productimg1 },
  { productName: "Smartwatch2", price: 230, id: 3, src: productimg2 },
  { productName: "Smartwatch3", price: 400, id: 4, src: productimg3 },
  { productName: "Smartwatch4", price: 500, id: 5, src: productimg4 },
  { productName: "Smartwatch5", price: 600, id: 6, src: productimg5 },
];

export default function Home() {
  const { cart, removeFromCart, clearCartB, addToCart } = useCartStore(
    (state) => state
  );

  return (
    <main className="p-2 text-center">
      <h1>Zustand as state management </h1>
      <p>Practice with zustand </p>
      <p>Phone Store</p>
      <div className="continer p-2 flex md:justify-between flex-col md:flex-row">
        <div>
          {productStore.map((produ) => (
            <Card key={productStore.indexOf(produ)} props={produ} />
          ))}
        </div>

        <div className="cart">
          <p className="bg-white"> carts here:{console.log(cart)}</p>
          <p className="bg-white">Total item in cart: {cart.length}</p>
          <button className="border-2 text-sm p-1" onClick={() => clearCartB()}>
            Empty cart
          </button>
          {cart.map((cartItem) => (
            <CartItemCard key={cart.indexOf(cartItem)} {...cartItem} />
          ))}
        </div>
      </div>
    </main>
  );
}
