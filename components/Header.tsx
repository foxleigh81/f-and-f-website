"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/public/foxleigh-and-co-logo-large.png";

const links = [
  { href: "#services", label: "What we do" },
  { href: "#about", label: "The company" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell site-header__inner">
        <a className="brand" href="#top" aria-label="Foxleigh &amp; Foxleigh — home">
          <Image
            src={logo}
            alt=""
            width={44}
            height={44}
            className="brand__mark"
            priority
          />
          <span className="brand__name">
            Foxleigh <span className="brand__amp">&amp;</span> Foxleigh
          </span>
        </a>

        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
