import Navbar from "./Navbar";
import ProductItem from "./ProductItem";
import Loading from "./Loading";
import "../css/Products.css";
import { useEffect, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";

function Products() {
  const [productList, setProductList] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY":
        "5fa47041cf1bca32b11f72a3bac177bcbec210479c06821401b5e3501ca7e262",
    },
  };

  const getProductList = () => {
    fetch("https://api.chimoney.io/v0.2/info/assets", options)
      .then((response) => response.json())
      .then((response) => setProductList(response.data.ecommerce))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getProductList();
  }, []);


  const products = productList.filter(product => product.category.includes("Gift Cards")).map((product, index) => {
    return (
      <ProductItem
        category={product.category}
        key={index}
        img={product.thumbnail}
        url={product.url}
        name={product.name}
        price={product.price}
        currency={product.currency}
      />
    );
  });

  console.log(productList);

  return (
    <>
      <Navbar />
      <div className="products">
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products}
        </Grid2>
      </div>
    </>
  );
}

export default Products;
