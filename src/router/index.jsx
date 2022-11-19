import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./../pages/home";
import Sandbox from "./../pages/sandbox";
import Unknown from "./../pages/unknown";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="*" element={<Unknown />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
