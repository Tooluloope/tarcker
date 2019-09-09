import React, {useState, useEffect} from 'react';

import './App.css';
import  { auth, createUserProfileDocument } from '../src/components/firebase/firebase.utils';

import NavBar from './components/nav-bar/nav-bar.component';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null


  // When component mounts, Set the CurrentUser state
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => (
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        ))
      }else {
        setCurrentUser(userAuth)
      }
    });
  }, []
  )

  // const componentWillUnmount = () => {
  //   this.unsubscribeFromAuth()
  // }
  
  return (
    <NavBar currentUser = {currentUser}></NavBar>
  );
}

export default App;
