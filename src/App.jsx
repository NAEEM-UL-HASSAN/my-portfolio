/* eslint-disable react/prop-types */
import { useState } from "react";
import "./index.css";
import WelcomeScreen from "./Pages/Welcome";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import TechStack from "./Pages/TechStack";
import Portfolio from "./Pages/Portfolio";
import ProjectDetails from "./components/ProjectDetails";
const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <AnimatedBackground />
          <Navbar />
          <Home />
          <TechStack />
          <Portfolio />
        </>
      )}
    </>
  );
};

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
