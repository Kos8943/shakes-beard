import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

if (!firebase.app.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAPaeDGrXrdirweUn6zoDKIbMSGqvoUDOs",
    authDomain: "shakes-beard.firebaseapp.com",
    databaseURL: "https://shakes-beard.firebaseio.com",
    projectId: "shakes-beard",
    storageBucket: "shakes-beard.appspot.com",
    messagingSenderId: "33308726107",
    appId: "1:33308726107:web:cb6db676b3e62902cc007e",
    measurementId: "G-F5LJS907KR",
  });
}

class Test extends Component {
  state = { isSignedIn: false };

  uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "http://localhost:3001/homepage",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    // tosUrl: "http://localhost:3001",
    // Privacy policy url.
    privacyPolicyUrl: "<your-privacy-policy-url>",
    callbacks: {
      signInSuccess: () => false,
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
      localStorage.setItem('google',true)
      localStorage.setItem('googleName',firebase.auth().currentUser.displayName)
      localStorage.setItem('googleUid',firebase.auth().currentUser.uid)

      document.getElementById("loader").style.display = "block";


        return true;
      },
      uiShown: function () {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById("loader").style.display = "none";
      },
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
      // localStorage.setItem('google',true)
    });
  };

  render() {
    return (
      <div className="App">
        {/* <h1>Welcome to My Awesome App</h1> */}
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>

        {this.state.isSignedIn ? (
          <span id="loader">
         
            <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
            {/* <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            /> */}
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default Test;
