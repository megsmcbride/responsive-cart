import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function ProductDetail(props) {
  const productId = window.location.pathname.slice(1);
  const [info, setInfo] = useState([]);



  const getProductInfo = () => {
    if (props.productList) {
      setInfo(props.productList.filter(product => product.productId.includes(`${productId}`)));
    }
  };

  useEffect(() => {
    getProductInfo();


  }, [props.productList]);


  return (
    <div>
      <Navbar />
      <div>
        <img src={info[0]?.thumbnail} alt="product" />
        <h2>{info[0]?.name}</h2>
        <p>{info[0]?.currency} {info[0]?.price} </p>
        <p>id: {info[0]?.productId}</p>
        <button>add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
