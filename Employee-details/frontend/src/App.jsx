import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EmpForm from "./components/EmpForm";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<EmpForm />} />
      </Routes>
    
  );
};

export default App;
