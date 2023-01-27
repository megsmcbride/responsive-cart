import "../css/ProductItem.css";
function ProductItem(props) {

  const {name, img} = props
  return (
    <div className="productContainer" onClick={() => (window.location.href = `/${props.productId}`)}>
      <div className="productItem">
        <div className="imageContainer">
          <img src={img} alt="product-image" />
        </div>
        <div className="productInfo">
          <h2> {name} </h2>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
