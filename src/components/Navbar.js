import logo from "../images/WorldShop.png";

function Navbar() {
  return (
    <div>
      <nav className="navBar">
        <img src={logo} alt="logo" className="logo" />
      </nav>
    </div>
  );
}

export default Navbar;
