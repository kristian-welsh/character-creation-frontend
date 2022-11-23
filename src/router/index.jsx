import { BrowserRouter, Route, Routes } from "react-router-dom";

import Website from "./../templates/website";

import About from "./../pages/about";
import Appearance from "./../pages/appearance";
import CharacterVault from "./../pages/character-vault";
import CharacterCreation from "./../pages/character-creation";
import CombatCards from "../pages/combat-cards";
import Home from "./../pages/home";
import Login from "./../pages/login";
import Sandbox from "./../pages/sandbox";
import SignUp from "./../pages/sign-up";
import Unknown from "./../pages/unknown";

const Router = () => {
  return (
    <BrowserRouter>
      <Website>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appearance" element={<Appearance />} />
          <Route path="/character-creation" element={<CharacterCreation />} />
          <Route path="/character-vault" element={<CharacterVault />} />
          <Route path="/combat-cards" element={<CombatCards />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Unknown />} />
        </Routes>
      </Website>
    </BrowserRouter>
  );
};

export default Router;
