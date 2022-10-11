import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./../pages/home";
import Unknown from "./../pages/unknown";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Unknown />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
