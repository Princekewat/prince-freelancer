"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">

      <Link href="/" className="logo">
        PRINCE<span>.</span>
      </Link>

      <div className="nav-links">

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>

      </div>

      <a href="#contact" className="nav-button">
          let Talk
      </a>

    </nav>
  );
}