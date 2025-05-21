import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./components/movieList/movieList.jsx";
import Nav from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import NotFound from "./components/NotFound/notFound";
import MovieDetails from "./components/movieDetails/movieDetails";
const AddUSer = lazy(() => import("./components/User/index.jsx"));
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const UserList = lazy(() => import("./components/User/UserList.jsx"));
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="movieDetails/:id" element={<MovieDetails />} />
      <Route path="AddUSer" element={<AddUSer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
