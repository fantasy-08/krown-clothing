import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {  
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth =null;

  componentDidMount(){
    this.unsubscribeFromAuth = 
    auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        // console.log(userRef);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else{
        this.setState({currentUser:userAuth});
      }
    });

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
      return (
      <div>
        <Header currentUser ={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/sign' component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
