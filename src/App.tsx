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
        <Route index element={<Index />} />
        <Route path="r">
          <Route path=":subreddit">
            <Route path=":id" element={<Detail />} />
          </Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
