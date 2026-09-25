import { useState } from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "Not provided"}\nPhone: ${formData.phone || "Not provided"}\n\n${formData.details}`
    );
    window.location.href = `mailto:thuzarmyint795@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <SectionHeader
        index={5}
        label="Let's Connect"
        title="Let's Work Together"
        sub="I'm actively seeking new opportunities and would love to connect. Whether you're looking to hire, collaborate, or just explore — feel free to reach out and I'll respond within 24 hours."
      />

      <div className="contact-body">
        {/* Left Side */}
        <div className="contact-left">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8cJO_3WKDjg"
              title="Quick Intro Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <ul className="contact-list">
            <li>
              <FaPhone className="contact-icon" />
              <span>+959 972 282 919</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>thuzarmyint795@gmail.com</span>
            </li>
            <li>
              <FaLinkedin className="contact-icon" />
              <a
                href="https://www.linkedin.com/in/thuzarmyint-a2a706258"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <FaGithub className="contact-icon" />
              <a
                href="https://github.com/ThuzarMyint10"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>

          <p className="contact-note">
            I'm actively looking for my next opportunity and available for interviews — 
            remote or on-site, any timezone. Whether it's a quick screening call or a 
            full technical interview, I'm ready. Fill out the form with your preferred 
            time and I'll confirm within 24 hours. Looking forward to showing you what 
            I can bring to your team.
          </p>
        </div>

        {/* Right Side — Card style like image 2 */}
        <div className="contact-card">
          <h3 className="contact-card-title">Send a Message</h3>
          <p className="contact-card-sub">
            I read every message and reply personally.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>What's your name?</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  // placeholder="John Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label>Best email to reach you</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  // placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Your company (if any)</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  // placeholder="Acme Inc."
                />
              </div>
              <div className="form-group">
                <label>Phone number (optional)</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  // placeholder="+1 234 567 890"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Tell me about the role or project</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                // placeholder="Share any details you'd like — role, stack, timeline..."
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message — I'll Reply Within 24hrs →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
