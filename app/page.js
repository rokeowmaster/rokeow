"use client";
import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const skillData = [
  { name: "JavaScript", value: 90 },
  { name: "HTML/CSS", value: 90 },
  { name: "TypeScript", value: 65 },
  { name: "Django", value: 40 },
  { name: "Next.js", value: 85 },
  { name: "React", value: 90 },
  { name: "Tailwind CSS", value: 90 },
  { name: "Reflex Python", value: 70 },
  { name: "Framer Motion", value: 70 },
  { name: "Git & GitHub", value: 85 },
];

const COLORS = ["#06b6d4", "#3b82f6", "#10b981", "#facc15", "#f472b6"];

const SkillChart = ({ name, value }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const increment = end / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width={100} height={100}>
        <PieChart>
          <Pie
            data={[{ name, value }, { name: "Remaining", value: 100 - value }]}
            innerRadius={30}
            outerRadius={40}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            <Cell key="filled" fill="#06b6d4" />
            <Cell key="empty" fill="#1f2937" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="text-sm text-gray-300 mt-2 text-center">
        <p>{name}</p>
        <p className="text-cyan-400 font-bold">{count}%</p>
      </div>
    </div>
  );
};

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `https://wa.me/254758490103?text=Name:%20${encodeURIComponent(form.name)}%0AEmail:%20${encodeURIComponent(form.email)}%0AMessage:%20${encodeURIComponent(form.message)}`,
      "_blank"
    );
  };

  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white min-h-screen p-6 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-md z-10">
          Robert Kelly
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-xl z-10">
          Futuristic Web Designer & Developer | UI/UX | Next.js & Tailwind Expert
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-gray-700 pb-2">About Me</h2>
        <p className="text-gray-300 leading-loose text-lg">
          I'm a passionate web designer and developer focused on crafting visually compelling and futuristic digital experiences. I specialize in building responsive, high-performance, and user-centric web applications using Next.js, Tailwind CSS, and modern JavaScript.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-gray-700 pb-2">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {skillData.map((skill, i) => (
            <SkillChart key={i} name={skill.name} value={skill.value} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-gray-700 pb-2">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Web Design",
            "Frontend Development",
            "UI/UX Design",
            "Responsive Design",
            "Brand Identity",
            "Performance Optimization"
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-400 transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">{service}</h3>
              <p className="text-gray-400 text-sm">
                High-quality {service.toLowerCase()} solutions tailored to meet your needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-gray-700 pb-2">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Interactive Website for E-commerce",
              description: "A fully responsive e-commerce website with an intuitive UI and shopping cart system.",
              imageUrl: "/boutique.PNG",
              link:"https://boutique-rho.vercel.app"
            },
            {
              title: "Interactive Website for an Acting Agency",
              description: "A website that showcases acting talents with a modern design and booking system.",
              imageUrl: "cadence.PNG",
              link:"https://cadence-rust.vercel.app"
            },
            {
              title: "Test Taking Platform",
              description: "A modern, minimalist test-taking webapp for students for an online course.",
              imageUrl: "bmg.PNG",
              link:"https://bmg-exams.vercel.app"
            }
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-700 hover:border-cyan-400 transition duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-cyan-300">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <a href={project.link} className="text-md text-cyan-400">Visit</a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Contact */}
      <section className="py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-gray-700 pb-2">Contact</h2>
        <p className="text-gray-300 mb-6">Have a project in mind? Let's collaborate!</p>

        {/* Glassy Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-cyan-500 max-w-xl mx-auto shadow-xl"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded-md bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full mb-4 p-3 rounded-md bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full mb-6 p-3 h-32 rounded-md bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300"
          >
            Send
          </button>
        </form>

        <div className="flex justify-center gap-6 text-2xl mt-10">
          <a href="mailto:rokeow@gmail.com" className="hover:text-cyan-400">
            <Mail />
          </a>
          <a href="https://github.com/rokeowmaster" className="hover:text-cyan-400">
            <Github />
          </a>
          <a href="https://linkedin.com/in/robertkelly" className="hover:text-cyan-400">
            <Linkedin />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm py-10">
        &copy; {new Date().getFullYear()} Robert Kelly. All rights reserved.
      </footer>
    </main>
  );
}
