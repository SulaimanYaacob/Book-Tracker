import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookSearch from "./pages/BookSearch.tsx";
import Home from "./pages/Home.tsx";

//TODO Add other pages. add path & element props

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/search" element={<BookSearch />} />
        <Route path="/" />
        <Route path="/" />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
