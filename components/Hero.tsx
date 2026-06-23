"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Dot matrix background */}
      <div className="absolute inset-0 z-0">
        <CanvasRevealEffect
          colors={[[255, 255, 255]]}
          dotSize={4}
          opacities={[0.1, 0.1, 0.1, 0.15, 0.15, 0.2, 0.2, 0.25, 0.3, 0.4]}
          showGradient={true}
        />
      </div>

      {/* Radial fade from center */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_rgba(0,0,0,0.85)_0%,_transparent_100%)]" />

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 z-[2] bg-gradient-to-b from-black to-transparent" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-60 z-[2] bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-white/60 font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          ვიღებთ ახალ პროექტებს
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight glow-text"
        >
          ვქმნით საიტებს,
          <br />
          <span className="text-white/40">რომლებიც ყიდიან.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          ვქმნით სწრაფ, თანამედროვე და შედეგზე ორიენტირებულ ვებსაიტებს,
          ონლაინ მაღაზიებსა და ციფრულ სისტემებს ბიზნესის ზრდისთვის.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-colors flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              პროექტის დაწყება <ArrowRight size={16} />
            </motion.button>
          </a>
          <a href="#portfolio">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Play size={14} className="fill-white" /> ნამუშევრების ნახვა
            </motion.button>
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 flex items-center justify-center gap-6 text-xs text-white/30"
        >
          {["40+ პროექტი", "99% კლიენტის კმაყოფილება", "3წმ საშ. ჩატვირთვა"].map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="w-px h-3 bg-white/20" />}
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
