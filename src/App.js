import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import SideBar from './SideBar';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else{
        // user is looged out
        dispatch(logout());
      }
    })
  })

  return (
    <div className="app">

      {/* HEADER */}
      <Header />

      {/* App body */}
      {!user ? (
        <Login />
      )
      :
      <div className="app_body">
        {/* Sidebar */}
        <SideBar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets/>
      </div>
      }
    </div>
  );
}

export default App;
