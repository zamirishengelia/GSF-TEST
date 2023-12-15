// App.js
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./AdminPages/PrivateRoutes";
import AdminPanel from "./AdminPages/AdminPanel";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
