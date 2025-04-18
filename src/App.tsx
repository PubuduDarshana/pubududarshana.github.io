import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X, Download } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";
import profileImage from "./assets/images/profile.jpg";
import uomLogo from "./assets/images/uom logo.png";
import deep from "./assets/images/deeplai.avif";
import hackerrank from "./assets/images/hackerrank.jpg";
import cvFile from "./assets/pdfs/cv.pdf";
import "./styles/animations.css";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "education",
        "experience",
        "projects",
        "research",
        "volunteer",
        "certificates",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const ContactForm = () => {
    const [state, handleSubmit] = useForm("meoawjyv");

    return (
      <div className="bg-secondary p-8 rounded-lg shadow-lg border border-secondary-light/50 max-w-2xl mx-auto">
        {state.succeeded ? (
          <div className="text-center py-8">
            <p className="text-xl text-primary mb-4">
              Thank you for your message!
            </p>
            <p className="text-sm">
              I'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "message"].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-text-secondary mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "message" ? (
                  <textarea
                    id={field}
                    name={field}
                    rows={4}
                    className="w-full px-4 py-2 bg-secondary-light border border-secondary-light/50 rounded-lg focus:outline-none focus:border-primary text-text-primary"
                    placeholder={`Your ${field}...`}
                    required
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    className="w-full px-4 py-2 bg-secondary-light border border-secondary-light/50 rounded-lg focus:outline-none focus:border-primary text-text-primary"
                    placeholder={field === "name" ? "Your Name" : "your.email@example.com"}
                    required
                  />
                )}
                {field === "email" && (
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 mt-1" />
                )}
                {field === "message" && (
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 mt-1" />
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={state.submitting}
              className={`w-full px-6 py-3 bg-primary hover:bg-primary-dark text-text-dark font-medium rounded-lg transition-colors ${
                state.submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-secondary text-text-primary font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-secondary/80 backdrop-blur-sm z-50 border-b border-secondary-light">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection("home")}
              className="text-lg sm:text-xl font-heading font-bold text-primary hover:text-primary-light transition-colors"
            >
              Pubudu Darshana
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-text-primary hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-4 lg:gap-6">
              {[
                "education",
                "experience",
                "projects",
                "research",
                "volunteer",
                "certificates",
                "skills",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm lg:text-base capitalize transition-colors ${
                    activeSection === section
                      ? "text-primary font-medium"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden ${
              isMenuOpen ? "block" : "hidden"
            } py-4 border-t border-secondary-light`}
          >
            <div className="flex flex-col gap-3">
              {[
                "education",
                "experience",
                "projects",
                "research",
                "volunteer",
                "certificates",
                "skills",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left capitalize transition-colors ${
                    activeSection === section
                      ? "text-primary font-medium"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-br from-secondary to-secondary-dark pt-20 pb-16 sm:pt-24 sm:pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0">
            {/* Left Column - Text Content */}
            <div className="flex-1 text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">
                <span className="text-text-primary">Hi, I'm </span>
                <span className="text-primary">Pubudu Darshana</span>
              </h1>
              <p
                style={{ color: "#facc15" }}
                className="text-xl sm:text-2xl text-white mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Chemical & Process Engineering Graduate
              </p>
              <p className="text mb-8 max-w-2xl mx-auto lg:mx-0">
                A highly motivated Chemical and Process Engineering
                undergraduate with experience in wastewater treatment and
                industrial energy management. Passionate about process
                optimization, improving process sustainability, and solving
                real-world problems through analytical thinking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={cvFile}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-text-dark font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 max-w-[240px] mx-auto sm:mx-0 w-full sm:w-auto"
                >
                  <Download size={20} />
                  Download CV
                </a>

                <div className="flex gap-4 justify-center lg:justify-start">
                  <a
                    href="mailto:pubududarshana456@gmail.com"
                    className="p-3 bg-secondary-light hover:bg-secondary rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Mail
                      size={24}
                      className="text-text-secondary hover:text-primary"
                    />
                  </a>
                  <a
                    href="https://linkedin.com/in/pubudu-darshana-47b873194"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary-light hover:bg-secondary rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin
                      size={24}
                      className="text-text-secondary hover:text-primary"
                    />
                  </a>
                  <a
                    href="https://github.com/PubuduDarshana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary-light hover:bg-secondary rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Github
                      size={24}
                      className="text-text-secondary hover:text-primary"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex-1 flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20 relative">
                  <img
                    src={profileImage}
                    alt="Your Name"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-24 bg-secondary relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-heading font-bold mb-12 text-center"
          >
            Education
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="bg-secondary-light p-6 sm:p-8 rounded-lg shadow-lg education-card relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  University of Moratuwa
                </h3>
                <motion.span
                  className="text-text-secondary"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  2021 - 2025
                </motion.span>
              </div>
              <p className="text-white mb-2">
                Bachelor of Science Engineering(Hons) in Chemical & Process
                Engineering
              </p>
              <p className="text-text-secondary">CGPA: 3.26/4.0</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="bg-secondary-light p-6 sm:p-8 rounded-lg shadow-lg education-card relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  Richmond College, Galle
                </h3>
                <motion.span
                  className="text-text-secondary"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  2010 - 2018
                </motion.span>
              </div>
              <p className="text-white mb-2">
                G.C.E. Advanced Level (2019) –{" "}
                <span className="text-text-secondary">
                  3 A s and A for English
                </span>
              </p>
              <p className="text-white mb-2">
                G.C.E. Ordinary Level (2015) –{" "}
                <span className="text-text-secondary">9 A s</span>{" "}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-16 sm:py-24 bg-secondary-light relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333' fill-opacity='0.08' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-heading font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              className="bg-secondary p-6 sm:p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  Best Pacific Textiles Lanka (Pvt) Ltd, Pannala.
                </h3>
                <span className="text-text-secondary">Dec 2023 – May 2024</span>
              </motion.div>

              <motion.p
                className="text-white font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Engineering Trainee - Service Engineering Department
              </motion.p>

              <motion.ul
                className="text-text-secondary space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white before:content-['•'] before:text-white before:mr-2"></span>
                  <span className="text-white">Process Analysis: </span>
                  Conducted a comprehensive study of river water and textile
                  wastewater treatment processes, identifying key areas for
                  efficiency enhancement. Enhanced process clarity by developing
                  detailed Piping & Instrumentation Diagrams (P&IDs) and
                  analyzed automation requirements for the boiler house.
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white before:content-['•'] before:text-white before:mr-2"></span>
                  <span className="text-white">Operations Management: </span>
                  Acquired hands-on experience with critical systems, including
                  steam and thermic oil boilers, chillers, cooling towers,
                  filter press systems, and compressed air systems. Performed
                  water quality parameter testing to ensure effective process
                  monitoring and control.
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white before:content-['•'] before:text-white before:mr-2"></span>
                  <span className="text-white">
                    System Design & Development:{" "}
                  </span>
                  Played a key role in designing a sludge thickener unit and
                  developed a chemical dosing pump unit tailored to operational
                  requirements, ensuring optimal performance and reliability.
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white before:content-['•'] before:text-white before:mr-2"></span>
                  <span className="text-white">Energy Optimization: </span>
                  Conducted detailed energy balance calculations and identified
                  significant energy losses as part of the Energy Management
                  System project. Proposed actionable recommendations to improve
                  energy efficiency and reduce operational costs.
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white before:content-['•'] before:text-white before:mr-2"></span>
                  <span className="text-white">Data-Driven Insights: </span>
                  Analyzed effluent treatment and power consumption data to
                  uncover optimization opportunities, driving process
                  improvements and operational excellence.
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white before:content-['•'] before:text-white before:mr-2"></span>
                  <span className="text-white">Technical Documentation: </span>
                  Authored comprehensive Standard Operating Procedures (SOPs)
                  for boiler house operations, ensuring adherence to compliance
                  standards and operational efficiency.
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white before:content-['•'] before:text-white before:mr-2"></span>
                  <span className="text-white">
                    Production Process Insights:{" "}
                  </span>
                  Gained in-depth knowledge of textile production processes,
                  including fabric knitting, dyeing, elastic knitting and
                  weaving, finishing operations, and warehouse management,
                  contributing to overall process understanding and improvement.
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-16 sm:py-24 bg-secondary relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-heading font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Academic Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Equipment design of a flash drum separator",
                description:
                  "Complete equipment design including the aspects such as Chemical design, mechanical design, process control, safety, and economic evaluation.",
                course: "Final year Comprehensive Design Project - Individual",
              },
              {
                title: "Butadiene manufacturing plant design",
                description:
                  "Included market analysis, process synthesis, energy and mass balances, process flow design, unit operations selection, site selection, health and safety assessment, environmental impact assessment, sustainability analysis, and techno-economic evaluation.",
                course: "Final year Comprehensive Design Project - Group",
              },
              {
                title:
                  "Steam network design for a latex glove manufacturing plant",
                description:
                  "Steam network layout, steam requirement estimation, boiler sizing, pipe sizing, selection of equipment such as steam traps, condensate pumps, and pressure-reducing valves.",
                course: "Course: CH3055 - Energy Systems Engineering",
              },
              {
                title: "Mechanical design of a liquid ammonia storage tank",
                description:
                  "Designed a pressurized bullet-type storage tank, performed size calculations, and created mechanical drawings using Solid Edge.",
                course: "Course: CH3034 - Process Equipment Design",
              },
              {
                title:
                  "Chemical design for a distillation column to separate a binary mixture",
                description:
                  "Conducted manual and simulation-based calculations to determine size, energy requirements, and operating conditions.",
                course: "Course: CH2180 - Separation Processes",
              },
              {
                title: "Pipe network design for a dairy manufacturing plant",
                description:
                  "Calculations for the pressure drops, pipe sizing, pump selections, and pipe layout drawings.",
                course: "Course: CH1044 - Fluid Dynamics",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-secondary-light p-6 sm:p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-xl sm:text-2xl font-heading font-bold text-primary mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>
                <motion.p
                  className="text-text-secondary text-sm mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.course}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Research Work Section */}
      <motion.section
        id="research"
        className="py-16 sm:py-24 bg-secondary-light relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333' fill-opacity='0.08'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-heading font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Research Work
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              className="bg-secondary p-6 sm:p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-xl sm:text-2xl font-heading font-bold text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Optimization of Biological Nutrient Removal in Sewage
                  Wastewater Treatment
                </motion.h3>
              </motion.div>
              <motion.p
                className="text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Department of Chemical and Process Engineering, University of
                Moratuwa
              </motion.p>
              <motion.ul
                className="text-text-secondary space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  A modeling-based approach using BioWin software to optimize
                  nutrient removal efficiency in sewage wastewater treatment
                  processes.
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Volunteer Work Section */}
      <motion.section
        id="volunteer"
        className="py-16 sm:py-24 bg-secondary relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333' fill-opacity='0.08' fill-rule='evenodd'%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-heading font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Volunteer Work
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                organization: "IEEE Student Branch, University of Moratuwa",
                year: "2023",
                event: "OPEN WEEK 2023",
                description: "Logistics Committee member for the event, responsible for managing event logistics, including venue setup, equipment management, and coordination with vendors."
              },
              {
                organization: "IET on Campus, University of Moratuwa",
                year: "2023-2024",
                event: "Editorial Member",
                description: "Editorial Member for the society, responsible for creating and editing promotional materials, including brochures, posters, and social media content."
              },
              {
                organization: "ExMO, University of Moratuwa",
                year: "2023",
                event: "EXMO 2023 Exhibition",
                description: "Marketing committee member for the event, responsible for promoting the exhibition through social media content."
              },
              {
                organization: "Department of Chemical and Process Engineering, University of Moratuwa",
                year: "2023",
                event: "ChemECon 2023 - Chemical Engineering Conference",
                description: "Organizing Committee member for the event, responsible for coordinating logistics, managing event schedules, and ensuring smooth operations during the conference."
              },
              {
                organization: "Engineering Faculty Student Union, University of Moratuwa",
                year: "2023",
                event: "'Soyuru Sathkara' 2023 Educational Program",
                description: "Served as a team member, involved in developing educational materials for the program and teaching students from rural schools in Sri Lanka."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-secondary-light p-6 sm:p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                    {item.organization}
                  </h3>
                  <motion.span
                    className="text-text-secondary"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {item.year}
                  </motion.span>
                </motion.div>
                <motion.p
                  className="text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.event}
                </motion.p>
                <motion.ul
                  className="text-text-secondary space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item.description}
                  </motion.li>
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section 
        id="certificates" 
        className="py-16 sm:py-24 bg-secondary-light relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333' fill-opacity='0.08'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill-rule='nonzero'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-heading font-bold mb-12 text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              type: "spring",
              stiffness: 100 
            }}
            viewport={{ once: true }}
          >
            Certificates
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Foundations of Project Management",
                org: "Centre for Open & Distance Learning (CODL), University of Moratuwa",
                credentialId: "pzQZEDmiWB",
                verifyLink: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
                image: uomLogo
              },
              {
                title: "Training program on Boiler Performance",
                org: "SEWIN Exergy Solutions (Pvt) Ltd",
                credentialId: "",
                verifyLink: "",
                image: null
              },
              {
                title: "Supervised Machine Learning: Regression and Classification",
                org: "DeepLearning.AI | Stanford University | offered through Coursera",
                credentialId: "5B8WRYNH4SZF",
                verifyLink: "https://www.coursera.org/account/accomplishments/certificate/5B8WRYNH4SZF",
                image: deep
              },
              {
                title: "SQL (Basic) Certificate",
                org: "HackerRank",
                credentialId: "5B4676DBE697",
                verifyLink: "https://www.hackerrank.com/certificates/5b4676dbe697",
                image: hackerrank
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-secondary p-6 sm:p-8 rounded-lg shadow-lg text-center group"
                variants={{
                  hidden: { 
                    opacity: 0,
                    y: 50,
                    rotateX: -30
                  },
                  show: { 
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: {
                    duration: 0.3
                  }
                }}
              >
                <motion.h3
                  className="text-xl sm:text-2xl font-heading font-bold text-primary mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {cert.title}
                </motion.h3>
                {cert.image ? (
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <motion.div 
                      className="flex-1"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-white">{cert.org}</p>
                      {cert.credentialId && (
                        <p className="text-text-secondary text-sm mt-2">
                          Credential ID: {cert.credentialId}
                        </p>
                      )}
                      {cert.verifyLink && (
                        <p className="text-text-secondary text-sm mt-2">
                          <motion.a
                            href={cert.verifyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-block"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Click to verify
                          </motion.a>
                        </p>
                      )}
                    </motion.div>
                    <motion.div 
                      className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0"
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.4,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      viewport={{ once: true }}
                    >
                      <img
                        src={cert.image}
                        alt="Certificate Thumbnail"
                        className="w-full h-full object-cover rounded-lg shadow-md transform transition-transform duration-300 group-hover:shadow-xl"
                      />
                    </motion.div>
                  </div>
                ) : (
                  <motion.p 
                    className="text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {cert.org}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-16 sm:py-24 bg-secondary relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='26' viewBox='0 0 32 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333' fill-opacity='0.08' fill-rule='nonzero'%3E%3Cpath d='M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0zM0 24h32v2H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-heading font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 [&>*:last-child]:md:col-span-2 [&>*:last-child]:max-w-md [&>*:last-child]:mx-auto"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Technical Skills",
                skills: [
                  "Process Simulation & Analysis",
                  "Equipment Design",
                  "Thermodynamic Calculations",
                  "Data Analytics & Visualization",
                  "Technical Documentation – User guides, SOPs",
                  "Web Development"
                ]
              },
              {
                title: "Software & Tools",
                skills: [
                  "Aspen Plus (Process Simulations)",
                  "Solid Edge (CAD)",
                  "Matlab",
                  "Power BI",
                  "Microsoft Office Suite (Excel, PowerPoint, Word)",
                  "Git & GitHub"
                ]
              },
              {
                title: "Soft Skills",
                skills: [
                  "Communication & presentation",
                  "Adaptability & Quick Learning",
                  "Collaboration & Teamwork",
                  "Analytical Thinking & Problem Solving"
                ]
              },
              {
                title: "Programming Languages",
                skills: [
                  "Python",
                  "SQL",
                  "JavaScript",
                  "HTML, CSS",
                  "MERN Stack"
                ]
              },
              {
                title: "Languages",
                skills: [
                  "English (Fluent)",
                  "Sinhala (Native)",
                  "Tamil (Basic)"
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-secondary-light p-6 sm:p-8 rounded-lg shadow-lg text-center group"
                variants={{
                  hidden: { 
                    opacity: 0,
                    y: 30,
                    scale: 0.8
                  },
                  show: { 
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 12,
                      delayChildren: 0.2,
                      staggerChildren: 0.1
                    }
                  }
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.h3
                  className="text-xl sm:text-2xl font-heading font-bold text-primary mb-4"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100
                      }
                    }
                  }}
                >
                  {category.title}
                </motion.h3>
                <motion.ul 
                  className="text space-y-2"
                  variants={{
                    hidden: { opacity: 0 },
                    show: { 
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      variants={{
                        hidden: { 
                          opacity: 0, 
                          x: -20,
                          filter: "blur(4px)"
                        },
                        show: { 
                          opacity: 1, 
                          x: 0,
                          filter: "blur(0px)",
                          transition: {
                            type: "spring",
                            stiffness: 100
                          }
                        }
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-16 sm:py-24 bg-secondary-light relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333' fill-opacity='0.08' fill-rule='evenodd'%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-heading font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <ContactForm />
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="bg-secondary-light/50 py-8 border-t border-secondary-light relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333' fill-opacity='0.08'%3E%3Cpath d='M0 0h20L0 20zm0 20h20L0 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col items-center text-center text-text-secondary">
            <p className="mb-2">© {new Date().getFullYear()} Pubudu Darshana</p>
            <p className="text-sm">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
