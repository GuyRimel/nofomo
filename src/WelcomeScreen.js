import React from "react";
import "./WelcomeScreen.css";
function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <h1>Welcome to the Nofomo app</h1>
      <h4>
        Log in to see upcoming events around the world for full-stack developers and finally attain - no fear of missing out.
      </h4>
      <div className="button_cont" align="center">
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google sign-in"
            />
          </div>
          <button
            onClick={() => {
              props.getAccessToken();
            }}
            rel="nofollow noopener"
            className="btn-text"
          >
            <b>Sign in with google</b>
          </button>
        </div>
      </div>
      <a
        href="https://GuyRimel.github.io/nofomo/privacy.html"
        rel="nofollow noopener"
        className="p-policy-link"
      >
        Privacy Policy
      </a>
    </div>
  ) : null;
}
export default WelcomeScreen;
