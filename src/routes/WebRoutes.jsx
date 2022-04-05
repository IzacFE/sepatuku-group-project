import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import Profile from "../pages/profile/Profile";
import Cart from "../pages/cart/Cart";
import Order from "../pages/order/Order";
import History from "../pages/history/History";
import Layout from "../components/layout/Layout";

export default function WebRoutes() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
