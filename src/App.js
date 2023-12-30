import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/loading";

const Home = lazy(() => import("./app/home"));
const About = lazy(() => import("./app/about"));
const Contact = lazy(() => import("./app/contact"));
const Pricing = lazy(() => import("./app/pricing"));
const Product = lazy(() => import("./app/product"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
