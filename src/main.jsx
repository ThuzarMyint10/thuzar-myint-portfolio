import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";
import "./styles/experience.css";
import "./styles/projects.css";
import "./styles/skills.css";
import "./styles/navbar.css";
import "./styles/about.css";
import "./styles/avatar.css";
import "./styles/tech-pill.css";
import "./styles/background-scene.css";
import "./styles/contact-section.css";
import "./styles/footer.css";
import "./styles/technical_expertise.css";
import "./styles/section-header.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);