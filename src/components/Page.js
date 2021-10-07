import React, { useState } from "react";
import { firebase } from "../Firebase";
import Dashboard from "./Dashboard";
import img2 from "../components/img.jpg";

const Page = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }

    setIsUserSignedIn(false);
  });

  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setEmail(result.user.email);
        setName(result.user.displayName);
        setImg(result.user.photoURL);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {isUserSignedIn ? (
        <Dashboard name={name} email={email} img={img} />
      ) : (
        <div className="login-buttons text-center">
          <h1>Welcome to your Orders Portal!</h1>
          <h5>Let's Continue with the Login Process⬇⬇</h5>
          <br />
          <br />
          <img
            src={img2}
            width="20%"
            style={{ borderRadius: "25px" }}
            alt="sfsd"
          />
          <br />
          <br />
          <br />
          <button className="login-provider-button" onClick={onSubmit}>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
              alt="google icon"
            />
            <span> Continue with Google</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
