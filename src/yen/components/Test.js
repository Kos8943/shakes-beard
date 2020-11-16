import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


if (!firebase.app.length){

firebase.initializeApp({
    apiKey: "AIzaSyAPaeDGrXrdirweUn6zoDKIbMSGqvoUDOs",
    authDomain: "shakes-beard.firebaseapp.com",
    databaseURL: "https://shakes-beard.firebaseio.com",
    projectId: "shakes-beard",
    storageBucket: "shakes-beard.appspot.com",
    messagingSenderId: "33308726107",
    appId: "1:33308726107:web:cb6db676b3e62902cc007e",
    measurementId: "G-F5LJS907KR"
  })


}



  
class Test extends Component {
  state = { isSignedIn: false }


  
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }








  
  render() {
    return (
      <div className="App">












         {this.state.isSignedIn ? (
           


          <span>

          <StyledFirebaseAuth
            uiConfig=""
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


          
        )
        
        
        
        }



      </div>
    )
  }
}

export default Test