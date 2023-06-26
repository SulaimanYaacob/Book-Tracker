import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import BookSearch from "./pages/BookSearch.tsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BookDetails from "./pages/BookDetails.tsx";
import HomePage from "./pages/HomePage.tsx";
import Clerk from "./pages/Clerk.tsx";

//TODO Add other pages. add path & element props

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_KEY}>
      <BrowserRouter>
        <SignedIn>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/search" element={<BookSearch />} />
            <Route path="/clerk" element={<Clerk />} />
            <Route path="/" />
            <Route path="*" element={<h1>Error 404</h1>} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);