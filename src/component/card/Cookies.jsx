import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const Cookies = () => {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [display, setDisplay] = useState(true);

  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  const handleClose = () => {
    setDisplay(false);
  };

  if (!display) {
    return null; 
  }

  return (
    <div
      className="cookieConsent"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: "99",
        background: "#fff",
        width: "98.5%",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em",
        boxShadow: "0px 10px 95px -25px rgba(0,0,0,0.67)",
      }}
    >
      <p>
        We use cookies on our website to see how you interact with it. By
        accepting, you agree to our use of such cookies.
        <Link href={"/"}> See Privacy Policy</Link>
      </p>
      <div style={{display:"flex", gap:"1em"}}>
        <button
          className="cookie-btn"
          style={{
            background: "#000",
            color: "#fff",
            border: "none",
            padding: "1em 2em",
            width: "100px",
            height: "40px",
            cursor: "pointer",
          }}
          onClick={giveCookieConsent}
        >
          Accept
        </button>
        <button
          className="cookie-btn"
          style={{
            color: "#000",
            background:"none",
            border: "none",
            borderRadius:"50%",
            fontSize:"1em",
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Cookies;
