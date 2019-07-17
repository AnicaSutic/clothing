import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInUp from './pages/SIgn/SIgnInUp';
import {auth} from './firebase/firebase.utils';


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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser:user
      });
      console.log(user);
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
