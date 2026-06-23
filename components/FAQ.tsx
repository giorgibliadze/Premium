"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";

const faqs = [
  { q: "რამდენ დროში მზადდება ვებსაიტი?", a: "მარტივი საიტები საშუალოდ 7–14 დღეში მზადდება. უფრო დიდი ვებსაიტები და ონლაინ მაღაზიები — დაახლოებით 3–6 კვირაში." },
  { q: "რა ღირს ვებსაიტის დამზადება?", a: "ფასი დამოკიდებულია პროექტის მოცულობაზე, ფუნქციონალზე და დიზაინის სირთულეზე. კონსულტაციის შემდეგ ვამზადებთ კონკრეტულ შეთავაზებას." },
  { q: "გაშვების შემდეგ მხარდაჭერა გაქვთ?", a: "დიახ. ვუზრუნველყოფთ ტექნიკურ მხარდაჭერას, განახლებებს, გაუმჯობესებას და მუდმივ მომსახურებას." },
  { q: "SEO ოპტიმიზაციაშიც გვეხმარებით?", a: "დიახ. ვაუმჯობესებთ საიტის სტრუქტურას, სიჩქარეს, მეტა მონაცემებსა და კონტენტს უკეთესი ხილვადობისთვის." },
  { q: "რა ტექნოლოგიებს იყენებთ?", a: "ვიყენებთ თანამედროვე ტექნოლოგიებს: Next.js, React, TypeScript, Tailwind CSS და საჭიროების შემთხვევაში WordPress-ს." },
  { q: "უცხოელ კლიენტებთანაც მუშაობთ?", a: "დიახ. ვმუშაობთ როგორც ადგილობრივ, ასევე საერთაშორისო კლიენტებთან დისტანციურად." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <SectionTitle eyebrow="FAQ" title="ხშირად დასმული კითხვები" />

        <div className="mt-12 space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-semibold text-white pr-4">{faq.q}</span>
                <span className="flex-shrink-0 text-white/40">
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm text-white/40 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
