import { useContext, useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { CartsContext } from "../context/carts";
import "./Cart.css";

export function Cart() {
  const cartCheckboxId = useId();

  const { cart, addToCart, clearCart } = useContext(CartsContext);

  const handleIncreaseProduct = (product) => {
    addToCart(product);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <li key={product.title}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - {product.price}€
              </div>

              <footer>
                <small>Qty: {product.quantity}</small>
                <button onClick={() => handleIncreaseProduct(product)}>
                  +
                </button>
              </footer>
            </li>
          ))}
        </ul>

        <button onClick={() => handleClearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
