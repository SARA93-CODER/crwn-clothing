import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Components/header/header.component";
//to let the app be updated with the new action (SET_CURRENT_USER), we will use the connect func. and the mapDispatchToProps func.
import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";

import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebse.utils";

class App extends React.Component {
  unsubscribeFromAuth = null;

  /* letting the app and the firebase be aware of the authentication state of the user without fitching the data manually*/
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(document.querySelector(".sign-in-and-sign-up"));
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

/*we use mapDispatchToProps to connect our app to the store,
in other words:it allows you to specify which actions our component might need to dispatch.
It lets us provide action dispatching functions as props.*/
const mapDispatchToProps = (dispatch) => ({
  /*here we transform the object (user) from setCurrentUser func.to
  an action object so we can pass it to all reducers, and this is done by using the dispatch.*/
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
