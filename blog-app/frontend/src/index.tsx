import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "redux/store";

import App from "./App";
import BlogList from "pages/BlogList";
import BlogDetails from "pages/BlogDetails";
import Home from "pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="blogs/:blogId" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
