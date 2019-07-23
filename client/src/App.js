import React, {useEffect} from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import SignInUp from "./pages/SIgn/SIgnInUp";

import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/userSelector";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/CheckoutPage";
import { selectShopCollectionForPreview } from "./redux/shop/shopSelector";
import { checkUserSession } from "./redux/user/userActions";

function App({checkUserSession, currentUser}) {

  // we want just for the first time to run
  // because if user change we want to render
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


  // componentDidMount() {
  //   const {checkUserSession} = this.props;
  //   checkUserSession();
    //const { setCurrentUser } = this.props;
    // this is a metoh in auth library, param is what is user state
    // this connection is always open and we need to close it in unmount
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDoc(userAuth);
    //     userRef.onSnapshot(snapshot => {
    //       // this.setState({
    //       //   currentUser: {
    //       //     id: snapshot.id,
    //       //     ...snapshot.data()
    //       //   }
    //       // }, () => {
    //       //   console.log(this.state);
    //       // });
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //       });
    //     });
    //   }

    //   setCurrentUser(userAuth);
    //   // we just wanted programmicaly to add data to dataabse now it is not necessary
    //   //addCollectionsAndDoc('collections',collectionsArray.map(({title,items}) => ({title,items})));

    //   // this.setState({
    //   //   currentUser:user
    //   // });
    // });
  // }

  // componentWillUnmount() {
  //   // to close subscription and connection
  //   this.unsubscribeFromAuth();
  // }


    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/sign"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInUp />
            }
          />
        </Switch>
      </div>
    );
  }



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectShopCollectionForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
})

// saga is handling now
// function mapDispatchToProps(dispatch) {
//   return {
//     setCurrentUser: user => {
//       dispatch(setCurrentUser(user));
//     }
//   };
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
