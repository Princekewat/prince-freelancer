"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GitBranch,
  Globe,
  Camera,
  Mail,
  ArrowUp,
  Copy,
  Check,
  Heart,
} from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const email = "your-princerewa2002@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* TOP FOOTER */}

      <div className="footer-top">

        <div className="footer-brand">

          <Link href="/" className="footer-logo">
            PRINCE<span>.</span>
          </Link>

          <p className="footer-description">
            Building modern digital experiences with
            creativity, clean code, and innovative ideas.
          </p>

          <div className="footer-status">
            <span className="footer-status-dot"></span>
            Available for freelance projects
          </div>

        </div>

        {/* NAVIGATION */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>

        </div>

        {/* SERVICES */}

        <div className="footer-links">

          <h3>Services</h3>

          <a href="#services">Web Development</a>
          <a href="#services">UI/UX Design</a>
          <a href="#services">Backend Development</a>
          <a href="#services">API Integration</a>

        </div>

        {/* CONTACT */}

        <div className="footer-contact">

          <h3>let Connect</h3>

          <p>
            Have a project in mind?
            let s make it happen.
          </p>

          <a
            href={`mailto:${email}`}
            className="footer-email"
          >
            <Mail size={18} />
            Email Me
          </a>

          <button
            className="copy-email"
            onClick={copyEmail}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Email Copied!" : "Copy Email"}
          </button>

        </div>

      </div>

      {/* SOCIAL SECTION */}

      <div className="footer-middle">

        <p>Follow my journey</p>

        <div className="footer-socials">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitBranch size={20} />
          </a>

          <a
            href="https://linkedin.com/in/prince-kewat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Globe size={20} />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Camera size={20} />
          </a>

        </div>

      </div>

      {/* BOTTOM FOOTER */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Prince Kewat.
          All rights reserved.
        </p>

        <p className="footer-made">
          Made with <Heart size={15} /> by Prince
        </p>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          Back to Top
          <ArrowUp size={18} />
        </button>

      </div>

    </footer>
  );
}