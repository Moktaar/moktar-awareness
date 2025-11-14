import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tryhackme2Layout from "./components/Tryhackme2Layout.jsx";
import AwarenessAcademy from "./components/AwarenessAcademy.jsx";

export default function App() {
  return (
    <BrowserRouter basename="/moktar-awareness">
      <Routes>
        <Route path="/" element={<Tryhackme2Layout />} />
        <Route path="/awareness" element={<AwarenessAcademy />} />
      </Routes>
    </BrowserRouter>
  );
}