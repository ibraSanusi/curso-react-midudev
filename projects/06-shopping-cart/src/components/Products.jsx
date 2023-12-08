import "./Products.css";

export function Products({ products }) {
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
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
