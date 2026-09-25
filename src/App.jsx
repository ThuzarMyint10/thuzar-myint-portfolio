import { useState, useEffect } from "react"; 
import useScrollReveal from "./hooks/useScrollReveal";
import useActiveSection from "./hooks/useActiveSection";

import BackgroundScene from "./components/common/BackgroundScene";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";

import AboutSection from "./components/sections/AboutSection";
import TechnicalExpertise from "./components/sections/TechnicalExpertise";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
  const [active, setActive] = useState("about");

  useScrollReveal();

  useActiveSection(setActive);

  return (
    <div className="app">
      <BackgroundScene />

      <NavBar
        active={active}
        setActive={setActive}
      />

      <AboutSection />

      <TechnicalExpertise />

      <ExperienceSection />

      <ProjectsSection />

      <ContactSection />

      <Footer />
    </div>
  );
}