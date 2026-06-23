"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

export default function CTASection() {
  return (
    <section className="relative py-40 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <CanvasRevealEffect
          colors={[[255, 255, 255]]}
          dotSize={3}
          opacities={[0.1, 0.1, 0.15, 0.15, 0.2, 0.2, 0.25, 0.3, 0.35, 0.4]}
          showGradient={false}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,_rgba(0,0,0,0.9)_0%,_rgba(0,0,0,0.5)_100%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/30 mb-6">მზად ხართ?</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6 glow-text">
            შევქმნათ რაღაც
            <br />
            <span className="text-white/40">გამორჩეული.</span>
          </h2>
          <p className="text-lg text-white/40 mb-10 max-w-xl mx-auto">
            შეუერთდით 40+ ბიზნესს, რომელმაც Next-Hub აირჩია ციფრული ყოფნის გარდაქმნისთვის.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-colors flex items-center gap-2 shadow-[0_0_60px_rgba(255,255,255,0.15)]"
              >
                პროექტის დაწყება <ArrowRight size={16} />
              </motion.button>
            </a>
            <a href="mailto:hello@nexthub.io">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all"
              >
                hello@nexthub.io
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
