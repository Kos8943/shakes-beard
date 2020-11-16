import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import LogInCss from "./styles/LogInCss.scss";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import google from "./img/google.svg";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const firebaseConfig = {
  apiKey: "AIzaSyAPaeDGrXrdirweUn6zoDKIbMSGqvoUDOs",
  authDomain: "shakes-beard.firebaseapp.com",
  databaseURL: "https://shakes-beard.firebaseio.com",
  projectId: "shakes-beard",
  storageBucket: "shakes-beard.appspot.com",
  messagingSenderId: "33308726107",
  appId: "1:33308726107:web:cb6db676b3e62902cc007e",
  measurementId: "G-F5LJS907KR",
};
firebase.initializeApp(firebaseConfig);

// firebase.initializeApp({
//   apiKey: "AIzaSyAPaeDGrXrdirweUn6zoDKIbMSGqvoUDOs",
//   authDomain: "shakes-beard.firebaseapp.com",
//   databaseURL: "https://shakes-beard.firebaseio.com",
// });

const database = firebase.database();

console.log("database", database);

function LogIn(props) {
  const {
    isAuth,
    setIsAuth,
    account,
    setAccount,
    password,
    setPassword,
  } = props;

  const [isSignedIn, setIsSignedIn] = useState(false);

  const providerFB = new firebase.auth.FacebookAuthProvider();
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  const providerTwitter = new firebase.auth.TwitterAuthProvider();
  const providerGithub = new firebase.auth.GithubAuthProvider();

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: false,
    },
  };

  firebase
    .auth()
    .signInWithPopup(providerFB)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });

  console.log("uiConfig", uiConfig);
  console.log("providerFB", providerFB.PROVIDER_ID);
  console.log("firebase.auth()", firebase.auth());

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     setIsSignedIn(!!user);
  //     console.log("user", user);
  //   });
  // }, []);

  function memberIoginForm() {
    const url = "http://localhost:3000/yen/log";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ account, password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((r) => r.json())

      .then((o) => {
        console.log("react收到的", o);
        if (o.success) {
          setIsAuth(true);
          localStorage.setItem("data", JSON.stringify(o));
          localStorage.setItem("auth", true);
        } else {
          alert("帳號／密碼錯誤");
          setPassword("");
          setAccount("");
        }
      });
  }

  if (isAuth === true) {
    return <Redirect to="/homepage" />;
  }

  return (
    <>
      <div className="bagimg">
        <div className="bagimg2">
          <div className="loginCard">
            <div className="loginTittle">登入</div>

            <form
              className="loginWeb d-flex flex-column"
              name="memberForm"
              onSubmit={(e) => {
                e.preventDefault();
                memberIoginForm();
              }}
            >
              <div className="log ">
                <div className="loginArea1">
                  <lable for="account" className="logText_">
                    帳號
                  </lable>
                  <input
                    className="loginInput"
                    name="account"
                    type="text"
                    id="account"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    required
                  ></input>

                  <label for="password" className="logText_ d-flex flex-column">
                    密碼
                  </label>
                  <input
                    className="loginInput"
                    name="password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>

                  <div className="logText_2">忘記密碼</div>

                  <button
                    type="submit"
                    className="loginCheckButton loginMobile"
                  >
                    登入
                  </button>
                </div>

                <div className="loginArea2 ">
                  <div className="otherAccount">
                    <span>
                      {isSignedIn}
                      {
                        <StyledFirebaseAuth
                          uiConfig={uiConfig}
                          firebaseAuth={firebase.auth()}
                        />
                      }
                      <button
                        type="button"
                        onClick={() => firebase.auth().signOut()}
                      >
                        Sign out!
                      </button>
                    </span>

                    <StyledFirebaseAuth
                      uiConfig={uiConfig}
                      firebaseAuth={firebase.auth()}
                    />

                    <Link to="/signup">
                      <button className="loginSingUpButton loginMobile">
                        註冊帳號
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* </form> */}
              <div className="d-flex justify-content-around ">
                <button type="submit" className="loginCheckButton loginWebNone">
                  登入
                </button>
                <Link to="/signup">
                  <button className="loginSingUpButton loginWebNone">
                    註冊帳號
                  </button>
                </Link>
              </div>
            </form>

            <div className="loginMobile"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
