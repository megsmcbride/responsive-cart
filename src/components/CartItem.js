import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function CartItem(props) {
  const { name, price, currency, img} = props


  
  return (
    <div className="cartItemContainer">
     <div className="cartItem">
        <div className="cartImageContainer">
          <img src={img} alt="product-image" />
        </div>
        <div className="productInfo">
          <h2> {name} hello </h2>
          <p>{currency}{price}</p>
        </div>
        <RemoveCircleOutlineIcon onClick={() => removeItem()} />
      </div>
    </div>
  );
}

export default CartItem;
