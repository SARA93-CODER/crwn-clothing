import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebse.utils";

// we import the connect function that helps us to have access to the things related to redux.
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { CartIcon } from "../cart-icon/cart-icon.component";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {/* defult state of currentUser is true because its an object.*/}
      {currentUser ? (
        <div
          className="option"
          onClick={() => {
            auth.signOut();
          }}
        >
          {" "}
          SIGN OUT{" "}
        </div>
      ) : (
        <Link className="option" to="/signin">
          {" "}
          SIGN IN{" "}
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

//this naming cn be anything but mapStateToProps is standard with reduxcodbases.
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  //state refers to the rootReducer (store), user=> userReducer, currentUser=> the value of currentUser in the userReducer.
  currentUser,
  hidden,
});
// note : we will use these tow functions (mapStateToProps + connect) in every time we need to pass the props to the components.
export default connect(mapStateToProps)(Header);
