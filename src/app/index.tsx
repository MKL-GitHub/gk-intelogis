import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./home";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="" Component={HomePage} />
      </Routes>
    </>
  );
};

export default App;
