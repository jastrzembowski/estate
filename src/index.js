import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav"
import Properties from "./components/Properties";
import Login from "./components/Login";
import Register from "./components/Register";
import PropertyDetails from "./components/PropertyDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/properties" exact element={<Properties />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/properties/:id" exact element={<PropertyDetails />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
