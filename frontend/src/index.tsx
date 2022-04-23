import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Blog from "pages/Blog";
import Home from "pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
