import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookSearch from "./pages/BookSearch.tsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BookDetails from "./pages/BookDetails.tsx";
import HomePage from "./pages/HomePage.tsx";

//TODO Add other pages. add path & element props

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<BookSearch />} />
        <Route path="/" element={<HomePage/>}/>
        <Route path="/" />
        <Route path="*" element={<h1>Error 404</h1>} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);