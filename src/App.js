import React from "react";
import { GlobalStorage } from "./GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Panel from "./Components/Panel";
import Score from "./Components/Scoreboard";
import NotFound from "./NotFound";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/" element={<Panel />} />
          <Route path="score" element={<Score />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default App;
