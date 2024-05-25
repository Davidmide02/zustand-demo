import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

const CartItem = ({ productName, id, price, src }) => {
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
      <Image src={`${src.src}`} alt="img" width={200} height={200} />
      <div className="text ml-2 p-1">
        <p>product name : {productName}</p>
        <p>price: {price}</p>

        <button
          className="bg-red-300 p-1 m-2 text-sm rounded"
          onClick={()=>{
            removeFromCart(id)
            console.log('remove here');
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
