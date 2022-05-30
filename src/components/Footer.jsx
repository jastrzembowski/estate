import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer flex">
        <div className="logo">
          <a href="index.html">
            <img src="/assets/logo/logo-serumah.svg" alt="logo" />
          </a>
        </div>
        <div className="socials">
          <a href="#" className="social-link">  </a>
            <i className="fa-brands fa-twitter"></i>
            <a href="#" className="social-link"></a>
            <i className="fa-brands fa-facebook-f"></i>
        
          <a href="#" className="social-link">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
