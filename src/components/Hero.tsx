"use client";

import { ArrowRight, Code2, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-ambient hero-ambient-one" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-two" aria-hidden="true" />

      <div className="hero-content">

        <div className="status">
          <span className="status-dot"></span>
          Available for freelance work
        </div>

        <p className="small-title">
          HELLO, I am a website creator & Freelancer
        </p>

        <h1 className="smalldi">
           Let&apos;s build something
           <br/>
          <span>awesome</span>
        </h1>

        <h2 className="herodi">
          Next.js Developer & Freelancer
        </h2>

        <p className="hero-text">
          I build modern, fast and scalable websites for startups,
          businesses and personal brands using Next.js, React,
          TypeScript and modern web technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View My Work
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className="secondary-btn">
            <Globe2 size={18} />
            Contact me
          </a>

        </div>

        <div className="socials">

          <a
            href="https://github.com/"
            target="_blank"
          >
            <Code2 size={20} />
          </a>

          <a
            href="https://linkedin.com/in/prince-kewat"
            target="_blank"
          >
            <Globe2 size={20} />
          </a>

        </div>

      </div>

      <div className="hero-card">

        <div className="card-glow"></div>
        <div className="card-grid" aria-hidden="true"></div>
        <div className="orb orb-one" aria-hidden="true"></div>
        <div className="orb orb-two" aria-hidden="true"></div>

        <div className="profile-circle">
          PK
        </div>

        <h3>
          let is  build something
          <br />
          <span>awesome together.</span>
        </h3>

        <div className="availability">
          <span></span>
          Open for projects
        </div>

      </div>
    </section>
  );
}