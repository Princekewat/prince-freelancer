"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <nav className="navbar">

      <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
        <svg
          className="logo-mark"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M11 31V9h11a7 7 0 0 1 0 14h-6m0 0 10 8"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29 7v6m-3-3h6"
            stroke="#d8b4fe"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="logo-wordmark">PRINCE<span className="logo-period">.</span></span>
      </Link>

      <div className="nav-links">

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>

      </div>

      <a href="#contact" className="nav-button">
        Let&apos;s talk
      </a>

      <button
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <>
          <button
            className="mobile-menu-backdrop"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          />
          <aside
            className="mobile-menu"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            <div className="mobile-menu-links">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
            <a
              href="#contact"
              className="mobile-menu-cta"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </>
      )}

    </nav>
  );
}