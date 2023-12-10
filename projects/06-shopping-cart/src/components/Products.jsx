import "./Products.css";
import { AddToCartIcon } from "./Icons";
import { useContext } from "react";
import { CartsContext } from "../context/carts";

export function Products({ products }) {
  const { addToCart } = useContext(CartsContext);

  return (
    <>
      <main className="products">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <img
                  src={product.thumbnail}
                  alt={`Imagen de ${product.title}`}
                />
              </div>

              <div>
                <strong>{product.title}</strong> - {`${product.price}€`}
              </div>

              <div>
                <button onClick={() => addToCart(product)}>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
