import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import logo from "./logo.svg";
import Detail from "./pages/Detail.page";
import Index from "./pages/Index.page";
import "./scss/global.scss";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="post">
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
