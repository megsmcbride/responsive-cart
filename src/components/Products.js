import Navbar from "./Navbar";
import ProductItem from "./ProductItem";
import "../css/Products.css"
import { useEffect, useState } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'


function Products() {

  const [productList, setProductList] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': '5fa47041cf1bca32b11f72a3bac177bcbec210479c06821401b5e3501ca7e262'
    }
  };

  const getProductList = () => {
    fetch('https://api.chimoney.io/v0.2/info/assets', options)
      .then(response => response.json())
      .then(response => setProductList(response.data.giftCardsRLD.content))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getProductList();
  }, []);

  const products = productList.map(product => {
    return <ProductItem
      key={product.productId}
      img={product.img}
      name={product.name}
      price={product.senderFee}
      currency={product.senderCurrencyCode}
    />;
  });

  return (
    <>
      <Navbar />
      <div className="products">
      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {products}
      </Grid2>
      </div>
    </>
  );
}

export default Products;
