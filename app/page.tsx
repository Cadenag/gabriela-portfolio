"use client";

import ChatBox from "@/components/ChatBox";
import { Github, Mail, ArrowRight } from "lucide-react";

const courses = [
  "CPS 3320 — Python Programming",
  "CPS 3440 — Analysis of Algorithms",
  "CPS 4222 — Principles of Networking",
  "CPS 4150 — Computer Architecture",
  "CPS 2232 — Data Structures",
];

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Git",
  "GitHub",
  "VS Code",
  "Data Analytics",
];

const projects = [
  {
    title: "Student Performance Dashboard",
    tech: "Python • Excel • JavaScript",
    description:
      "A dashboard for visualizing grades, attendance, and assignment completion trends to make student data easier to understand.",
  },
  {
    title: "TaskFlow To-Do App",
    tech: "React • JavaScript • CSS",
    description:
      "A responsive task management app that allows users to add, edit, delete, and organize daily tasks.",
  },
  {
    title: "Portfolio AI Assistant",
    tech: "Next.js • OpenAI API • JavaScript",
    description:
      "An AI-powered chatbot built into my portfolio to answer questions about my background, skills, coursework, and career goals.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-fuchsia-100 text-slate-800">
      <nav className="sticky top-0 z-50 border-b border-rose-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold tracking-wide text-rose-500">Gabriela Cadena</h1>

          <div className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="transition hover:text-rose-500">About</a>
            <a href="#skills" className="transition hover:text-rose-500">Skills</a>
            <a href="#courses" className="transition hover:text-rose-500">Courses</a>
            <a href="#projects" className="transition hover:text-rose-500">Projects</a>
            <a href="#ai" className="transition hover:text-rose-500">AI</a>
            <a href="#contact" className="transition hover:text-rose-500">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full border border-rose-200 bg-white px-4 py-1 text-sm font-medium text-rose-500 shadow-sm">
            Senior Computer Science Major
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Hi, I’m <span className="text-rose-500">Gabriela Cadena</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600">
            I’m a senior Computer Science student passionate about software development,
            data analytics, and building useful digital experiences that solve real problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-rose-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-rose-400"
            >
              View Projects <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-rose-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:border-rose-400 hover:text-rose-500"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-4 text-slate-600">
            <a
              href="https://github.com/Cadenag"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-rose-200 bg-white p-3 shadow-sm transition hover:border-rose-400 hover:text-rose-500"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:cadenag@kean.edu"
              className="rounded-full border border-rose-200 bg-white p-3 shadow-sm transition hover:border-rose-400 hover:text-rose-500"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-rose-200 bg-white px-8 pt-12 pb-10 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <div className="mt-4 mb-6 overflow-hidden rounded-full border-4 border-rose-200 shadow-lg">
              <img
                src="/gabriela-headshot.jpg"
                alt="Gabriela Cadena headshot"
                className="block h-[240px] w-[240px] object-cover"
              />
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <p><span className="font-semibold text-rose-500">Name:</span> Gabriela Cadena</p>
              <p><span className="font-semibold text-rose-500">Major:</span> Computer Science</p>
              <p><span className="font-semibold text-rose-500">Status:</span> Senior</p>
              <p><span className="font-semibold text-rose-500">Goal:</span> Data Analyst / Junior Developer</p>
              <p><span className="font-semibold text-rose-500">Focus:</span> Building practical apps and learning from data</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-rose-200 bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-rose-500">About Me</h2>
          <p className="mb-4 leading-8 text-slate-600">
            I’m a senior Computer Science major with a strong interest in software
            development, data analytics, and problem solving. I enjoy building
            practical applications, learning how systems work, and turning information
            into meaningful insight.
          </p>
          <p className="leading-8 text-slate-600">
            My goal is to begin my career in technology as a data analyst or junior
            software developer, while continuing to grow in analytics, visualization,
            and modern web development.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold text-rose-500">Skills</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-rose-200 bg-white px-4 py-4 text-center text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-rose-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold text-rose-500">Relevant Coursework</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course}
              className="rounded-2xl border border-rose-200 bg-white p-5 text-slate-600 shadow-sm transition hover:border-rose-400"
            >
              {course}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-2 text-3xl font-bold text-rose-500">Projects</h2>
        <p className="mb-6 max-w-2xl text-slate-600">
          A few projects that reflect my interest in development, data, and interactive web experiences.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-[1.75rem] border border-rose-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-rose-400"
            >
              <div className="mb-4 h-40 rounded-2xl bg-gradient-to-br from-rose-200 via-pink-100 to-fuchsia-200" />
              <h3 className="mb-2 text-xl font-semibold text-slate-800">{project.title}</h3>
              <p className="mb-3 text-sm font-medium text-rose-500">{project.tech}</p>
              <p className="leading-7 text-slate-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ai" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-rose-200 bg-white p-8 shadow-xl">
          <h2 className="mb-4 text-3xl font-bold text-rose-500">AI Assistant</h2>
          <p className="mb-6 max-w-2xl leading-8 text-slate-600">
            This portfolio includes an AI assistant that can answer questions about my
            background, coursework, technical skills, projects, and career goals.
          </p>
          <ChatBox />
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-rose-200 bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-rose-500">Contact</h2>
          <div className="space-y-3 text-slate-600">
            <p>Email: <span className="text-rose-500">cadenag@kean.edu</span></p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/Cadenag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 hover:underline"
              >
                github.com/Cadenag
              </a>
            </p>
          </div>
        </div>
      </section>

<footer className="border-t border-rose-200 px-6 py-8 text-center text-sm text-slate-500">
  © 2026 Gabriela Cadena • Built with Next.js and AI
</footer>
    </main>
  );
}