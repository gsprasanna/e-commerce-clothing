import React, { Component } from "react";
import "./App.css";
import { withRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/homePage.component";
import ShopPage from "./pages/shop/shopPage.component";
import Header from "./components/header/header.component";
import SignInandSignUpPage from "./pages/sign-in-sign-up-page/sign-in-and-sign-up-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInandSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
