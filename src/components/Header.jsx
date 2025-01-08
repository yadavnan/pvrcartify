import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <h1>HomePage</h1>
      <nav>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/product" className="nav-link">
          Product {props.numberOfProduct}
        </NavLink>

        <NavLink to="/checkout" className="nav-link">
          Checkout
        </NavLink>
      </nav>
    </header>
  );
}
