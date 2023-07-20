import React from "react";
import "./styles/navbar.css";
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const Navbar = () => {
  const [signIn, setSignIn] = useState(false);
  const [name, setName] = useState("");

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        setSignIn(true);
         setName(result.user.displayName);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <>
      <section className="top-txt">
        <div className="head container">
          <div className="head-txt">
            <p>Explore the World of Endless Possibilities – Start Shopping Today!</p>
          </div>
          <div className="sing_in_up">
            {signIn ? <p>Welcome, {name}</p> : <button className="btn btn-light" onClick={handleSignIn}>Sign In</button>}
          </div>
        </div>
      </section>
      <nav className="navbar">
        <div className="navbar-container">
          <input type="checkbox" name="" id="checkbox" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <Link to='/'><li>Home</li></Link>
            <Link to="/men"><li>Men</li></Link>
            <Link to="/women"><li>Women</li></Link>
            <Link to="/kids"><li>Kids</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
          </ul>
          <div className="logo">
            <h1 className="display-4">   KGB</h1>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
