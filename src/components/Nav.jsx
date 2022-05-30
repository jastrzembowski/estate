import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function nav() {
  return (
    <header className="flex">
      <div className="logo">
        <a href="index.html"> </a>
      </div>
      <div className="flex navbar">
        <nav>
          <ul id="nav-menu" className="nav-menu flex" data-visible="false">
            <NavLink to="/" className="nav-link" >
              <li>
                  Główna
              </li>
            </NavLink>
            <NavLink to="/properties" className="nav-link" >
              <li>
                  Nieruchomości
              </li>
            </NavLink>
            <Link to="/register">
              <button className="btn contact" >
                Rejestracja
              </button>
            </Link>
            <Link to="/login">
              <button className="btn contact">
                Zaloguj się
              </button>
            </Link>
            <button className="btn contact" >
              Wyloguj się
            </button>
          </ul>
        </nav>



        <button
          className="nav-toggle"
          aria-controls="nav-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Menu</span>
        </button>
      </div>
    </header>
  );
}
