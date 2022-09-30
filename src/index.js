import React from "react";
import ReactDOM from "react-dom/client";
import Search from "./Page/Search.js";
import Home from "./Page/Home.js";
import Error from "./Page/Error.js";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "./Page/Reviews.js";
import Cart from "./Page/Cart.js";
import SalesPage from "./Page/SalesPage.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="cart" element={<Cart />} />
          <Route path="sales" element={<SalesPage />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
