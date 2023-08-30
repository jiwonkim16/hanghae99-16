import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Box:id" element={<Box />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
