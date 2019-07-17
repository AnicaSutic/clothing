import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {Route,Switch,Redirect} from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInUp from './pages/SIgn/SIgnInUp';
import {auth, createUserProfileDoc} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/userActions';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;
    // this is a metoh in auth library, param is what is user state 
    // this connection is always open and we need to close it in unmount
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapshot => {
          // this.setState({
          //   currentUser: {
          //     id: snapshot.id,
          //     ...snapshot.data()
          //   }
          // }, () => {
          //   console.log(this.state);
          // });
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        });
      }

      setCurrentUser(userAuth);
      
      // this.setState({
      //   currentUser:user
      // });
    });
  }

  componentWillUnmount() {
    // to close subscription and connection
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInUp />} />
        </Switch>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    currentUser:state.user.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
