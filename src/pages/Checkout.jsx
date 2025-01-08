import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";  // Correctly import useEffect from react


import Card from "../components/Card";
import ProductImage from "../components/ProductImage";
import ProductDesc from "../components/ProductDesc";

export default function Checkout() {
  const { setProduct, product } = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Recalculate total price whenever the product array changes
    const newTotalPrice = product.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [product]);

  function cancelProduct(productId) {
    const updatedProduct = product.filter((product) => product.id !== productId);
    setProduct(updatedProduct);
  }

  function addQuantity(productId) {
    setProduct((prevProduct) =>
      prevProduct.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  function minusQuantity(productId) {
    setProduct((prevProduct) =>
      prevProduct.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  }

  const productList = product.map((product) => (
    <div key={product.id}>
      <Card>
        <ProductImage imgURL={product.image} desc={product.description} />
        <ProductDesc title={product.title} price={product.price} />
        <p>Quantity: {product.quantity}</p>
        <button
          className="btn-checkout"
          onClick={() => cancelProduct(product.id)}
        >
          Cancel
        </button>
        <button
          className="btn-checkout"
          onClick={() => addQuantity(product.id)}
        >
          Add
        </button>
        <button
          className="btn-checkout"
          onClick={() => minusQuantity(product.id)}
        >
          Minus
        </button>
      </Card>
    </div>
  ));

  if (product.length === 0)
    return (
      <div className="cente">
        <h1>You don&#39;t have any order yet!</h1>
      </div>
    );

  return (
    <>
      <div className="checkout-container">
        <div>
          <h1>Checkout Page</h1>
        </div>

        <div>
          <h1>Total Price: $ {totalPrice.toFixed(2)}</h1>
        </div>
      </div>
      <div className="card-container">{productList}</div>
    </>
  );
}

