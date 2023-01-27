import logo from "../images/WorldShop.png";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Badge from "@mui/material/Badge"

function Navbar(props) {
  const cartQuantity = window.localStorage.getItem('cartQuantity')
  return (
    <div>
      <nav className="navBar">
        <a href="/">
        <img src={logo} alt="logo" className="logo" />
        </a>
        <div className="navList">
          <a href="/"> Products</a>
          <a href="/cart">
         
  <Badge badgeContent={cartQuantity} color="secondary">
  <ShoppingCartRoundedIcon className="cartIcon" fontSize="20rem"/>
  </Badge>

            
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
