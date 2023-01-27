import logo from "../images/WorldShop.png";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

function Navbar() {
  return (
    <div>
      <nav className="navBar">
        <a href="/">
        <img src={logo} alt="logo" className="logo" />
        </a>
        <div className="navList">
          <a href="/"> Products</a>
          <a href="/cart">
            <ShoppingCartRoundedIcon className="cartIcon" fontSize="20rem"/>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
