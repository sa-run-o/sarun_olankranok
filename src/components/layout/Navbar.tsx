"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background dark:bg-black/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg/4 font-bold">
            <p>SA</p>
            <p>RUN</p>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <ModeToggle />
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:opacity-80 transition-opacity"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="block w-full px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg text-center hover:opacity-80 transition-opacity"
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
