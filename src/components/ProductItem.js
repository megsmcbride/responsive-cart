import "../css/ProductItem.css";
function ProductItem(props) {

  return (
    <div className="productContainer">
      <div className="productItem">
        <div className="imageContainer">

          <img src={props.img} alt="product-image" />
        </div>
        <div className="productInfo">
          <h2>  {props.name} </h2>
          <p>
            ${props.price} {props.currency}
          </p>

        </div>
      </div>

    </div>
  );
}

export default ProductItem;
