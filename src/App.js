import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInUp from './pages/SIgn/SIgnInUp';
import {auth, createUserProfileDoc} from './firebase/firebase.utils';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // this is a metoh in auth library, param is what is user state 
    // this connection is always open and we need to close it in unmount
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state);
          });
        });
      }
      
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={SignInUp} />
        </Switch>
      </div>
    );
  }

}

export default App;
