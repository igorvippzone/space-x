import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components";
import { HomePage, NotFoundPage, OtherPage } from "./pages";
const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technology" element={<OtherPage />} />
          <Route path="/schedule" element={<OtherPage />} />
          <Route path="/guarantees" element={<OtherPage />} />
          <Route path="/about" element={<OtherPage />} />
          <Route path="/contacts" element={<OtherPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
