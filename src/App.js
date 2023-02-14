import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Panel from "./Components/Panel";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Panel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
