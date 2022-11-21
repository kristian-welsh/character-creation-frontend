import { BrowserRouter, Route, Routes } from "react-router-dom";

import Website from "./../templates/website";

import Home from "./../pages/home";
import CharacterCreation from "./../pages/character-creation";
import Sandbox from "./../pages/sandbox";
import Unknown from "./../pages/unknown";

const Router = () => {
  return (
    <BrowserRouter>
      <Website>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/character-creation" element={<CharacterCreation />} />
          <Route path="*" element={<Unknown />} />
        </Routes>
      </Website>
    </BrowserRouter>
  );
};

export default Router;
