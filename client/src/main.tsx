import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import BookSearch from "./pages/BookSearch.tsx";
import Home from "./pages/Home.tsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BookDetails from "./pages/BookDetails.tsx";
import Clerk from "./pages/Clerk.tsx";

//TODO Add other pages. add path & element props

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_KEY}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/search" element={<BookSearch />} />
          <Route path="/clerk" element={<Clerk />} />
          <Route path="/" />
          <Route path="*" element={<h1>Error 404</h1>} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ClerkProvider>
);
