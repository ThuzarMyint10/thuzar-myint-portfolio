import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";
import { ABOUT_DATA } from "../../data/aboutData";
import { EXPERIENCE } from "../../data/experienceData";

const resumeUrl = `${import.meta.env.BASE_URL}ThuZar-Myint-CV.pdf`;

const highlights = [
  "Laravel and PHP application development",
  "REST API design and mobile integrations",
  "MySQL database architecture and optimization",
  "AWS hosting, deployment, and security",
  "Modern frontend development with Vue.js and React",
  "ElevenLabs AI agent integrations for web and WhatsApp",
];

export default function CvSection() {
  return (
    <section id="cv" className="section cv-section">
      <SectionHeader
        index={5}
        label="Curriculum Vitae"
        title="A snapshot of my experience"
        sub="Senior web developer focused on practical, reliable products—from Laravel backends and APIs to polished frontends and cloud deployments."
      />

      <div className="cv-layout">
        <article className="cv-card cv-profile reveal">
          <div className="cv-kicker">PROFILE</div>
          <h3>{ABOUT_DATA.name}</h3>
          <p className="cv-role">Senior Web Developer · PHP / Laravel</p>
          <p className="cv-summary">{ABOUT_DATA.bio}</p>

          <div className="cv-contact-links">
            <a href="mailto:thuzarmyint795@gmail.com"><FaEnvelope aria-hidden="true" /> thuzarmyint795@gmail.com</a>
            <a href="https://www.linkedin.com/in/thuzar-myint-a2a706258" target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn</a>
            <a href="https://github.com/ThuzarMyint10" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
            <span><FaMapMarkerAlt aria-hidden="true" /> Yangon, Myanmar</span>
          </div>
        </article>

        <article className="cv-card cv-skills reveal d1">
          <div className="cv-kicker">CORE STRENGTHS</div>
          <h3>What I bring</h3>
          <ul>
            {highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <a className="cv-download" href={resumeUrl} download="ThuZar-Myint-CV.pdf">
            <FaDownload aria-hidden="true" /> Download full CV <span aria-hidden="true">→</span>
          </a>
          <a className="cv-preview" href={resumeUrl} target="_blank" rel="noreferrer">
            Preview CV
          </a>
          <p className="cv-file-note">PDF · Full employment and education history</p>
        </article>

        <article className="cv-card cv-career reveal d2">
          <div className="cv-kicker">CAREER</div>
          <h3>Recent experience</h3>
          <div className="cv-career-list">
            {EXPERIENCE.map((item) => (
              <div className="cv-career-item" key={item.company}>
                <span className="cv-career-mark" aria-hidden="true" />
                <div>
                  <h4>{item.role}</h4>
                  <p>{item.company} · {item.location}</p>
                  <span>{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
