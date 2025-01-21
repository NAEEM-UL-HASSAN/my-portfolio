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
import ContactPage from "./Pages/Contact";

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
          <ContactPage />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2025{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  MyPortfolio™
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
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
