"use client";

import { motion } from "framer-motion";

const PortfolioIntro = () => {
  const profile = {
    experiences: [
      {
        role: "IT Support Specialist",
        org: "Benedicts Media Group",
        period: "Jun 2022 – Dec 2024",
        highlight:
          "Resolved hardware & software issues for 30+ staff, automated data workflows in Excel, and maintained company network & database.",
      },
      {
        role: "Web Developer & Social Media Manager (Contract)",
        org: "Freelance",
        period: "Mar 2018 – Feb 2020",
        highlight:
          "Built and maintained small‑business websites with MERN stack & Django and grew social media engagement by 40% through targeted content.",
      },
      {
        role: "Computer Tutor",
        org: "Benedicts Media Group",
        period: "Mar 2020 – Mar 2024",
        highlight:
          "Designed hands‑on curricula and trained 100+ students and employees on software best practices.",
      },
      {
        role: "IT Intern",
        org: "Huruma Sub-county Hospital, Eldoret",
        period: "Jul 2017 – Sep 2017",
        highlight:
          "Supported hardware installation, network configuration, and maintenance of the hospital's HMIS and staff mail systems.",
      },
    ],
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          My Journey in Tech
        </h2>

        <ul className="grid md:grid-cols-2 gap-8">
          {profile.experiences.map((exp) => (
            <motion.li
              key={`${exp.role}-${exp.org}`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition"
            >
              <p className="text-xl font-semibold text-cyan-300">{exp.role}</p>
              <p className="text-sm text-gray-300 mb-2">
                {exp.org} · <span className="italic">{exp.period}</span>
              </p>
              <p className="text-base text-gray-200">{exp.highlight}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default PortfolioIntro;
