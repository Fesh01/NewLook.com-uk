import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function SingleProduct() {

    const { id } = useParams();
    const [prod, setProd] = useState({});
  
    const getSingleProduct = () => {
      fetch("http://159.65.21.42:9000/products/" + id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProd(data);
        });
    }

    useEffect(() => {
        getSingleProduct();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  return (
    <div>
    <header className="header">
      <h2>Single Product</h2>
    </header>
    <main>
      {prod.id ? (
        <div className="single-product-container">
          <div className="single-product">
            <div className="product-left">
              <img src={prod.thumbnail} alt="Product" className="single-product-img" />
            </div>
            <div className="product-right">
              <span>{prod.brand}</span>
              <h2>{prod.title}</h2>
              <p>{prod.description}</p>
            </div>
          </div>

          <div className="product-mini">
            {prod.images.map((pro) => (
              <img src={pro} alt="Product" />
            ))}
          </div>
        </div>
      ) : (
        <p>Please Wait...</p>
      )}
    </main>
    </div>
  )
}
