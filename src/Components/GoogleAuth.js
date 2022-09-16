import React from "react";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const GoogleAuth = () => {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }
  function handleSignOut(e) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "169262181067-24pd8olj1vubt7vcr0hd9ila0ucqq889.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "medium",
    });
    // Down there is a google prompt that will
    // popout everytime a user visits a site
    // google.accounts.id.prompt();
  }, []);
  // If I have NO user: show sign in button
  //In I have a user: show log out
  return (
    <div>
      <div id="signInDiv"></div>
      {Object.keys(user).length != 0 && (
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      )}
      {user && (
        <div>
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
};

export default GoogleAuth;
