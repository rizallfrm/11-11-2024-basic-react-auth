import { useEffect, useState } from "react";

import "./App.css";
import {  Routes, Route, Navigate } from "react-router-dom";
import NavbarTailwind from "./components/navbar/navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NavbarTailwind />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
