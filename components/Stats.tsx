"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 40, suffix: "+", label: "40+ პროექტი", description: "12+ ინდუსტრიაში" },
  { value: 99, suffix: "%", label: "99% სტაბილურობა", description: "SLA-ზე დაფუძნებული" },
  { value: 3, suffix: "წმ", label: "3 წმ საშუალო ჩატვირთვა", description: "2.8x უფრო სწრაფი" },
  { value: 24, suffix: "/7", label: "24/7 მხარდაჭერა", description: "ყოველთვის ხელმისაწვდომი" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-24 px-4 bg-black">
      {/* Glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-black p-8 lg:p-10 text-center"
            >
              <div className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm font-semibold text-white/70 mb-1">{s.label}</div>
              <div className="text-xs text-white/30">{s.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
