"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GlowButton } from "./ui/GlowButton";

const links = [
  { label: "სერვისები", href: "#services" },
  { label: "ნამუშევრები", href: "#portfolio" },
  { label: "პროცესი", href: "#process" },
  { label: "კითხვები", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [rounded, setRounded] = useState("rounded-full");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    if (open) setRounded("rounded-2xl");
    else timeout.current = setTimeout(() => setRounded("rounded-full"), 300);
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, [open]);

  return (
    <header
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center px-5 py-3 border border-white/10 bg-black/60 backdrop-blur-xl transition-all duration-300 w-[calc(100%-2rem)] sm:w-auto ${rounded} ${scrolled ? "shadow-2xl shadow-black/50" : ""}`}
    >
      <div className="flex items-center justify-between w-full gap-6 sm:gap-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center">
            <span className="text-black font-black text-xs">N</span>
          </div>
          <span className="text-white font-bold text-sm tracking-tight">Next-Hub</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2">
          <a href="#contact">
            <GlowButton variant="secondary" size="sm">კონტაქტი</GlowButton>
          </a>
          <a href="#contact">
            <GlowButton variant="primary" size="sm">პროექტის დაწყება</GlowButton>
          </a>
        </div>

        <button
          className="sm:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden overflow-hidden w-full"
          >
            <nav className="flex flex-col items-center gap-4 pt-4 pb-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-white/60 hover:text-white" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}>
                <GlowButton variant="primary" size="sm">პროექტის დაწყება</GlowButton>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
