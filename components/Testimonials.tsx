"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";

const testimonials = [
  {
    name: "სარა მიტჩელი",
    role: "CEO, LuxeStore",
    content: "Next-Hub-მა მთლიანად შეცვალა ჩვენი ონლაინ ყოფნა. შემოსავალი 340%-ით გაიზარდა საიტის გაშვებიდან პირველ 6 თვეში. წარმოუდგენელი სამუშაო.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&q=80&fit=crop&crop=face",
  },
  {
    name: "დავით კვარაცხელია",
    role: "დამფუძნებელი, TechStartup.io",
    content: "ჩვენი SaaS landing page 2 კვირაში მიაწოდეს 12% კონვერსიით — ეს ინდუსტრიის საშუალოზე 3-ჯერ მეტია. ეს ბიჭები ნამდვილად ესმით.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&q=80&fit=crop&crop=face",
  },
  {
    name: "ანა ბერიძე",
    role: "დირექტორი, MedCare Platform",
    content: "პროფესიონალი, სწრაფი და ნამდვილად კვალიფიციური. ჩვენი პლატფორმა ახლა თვეში 50,000+ პაციენტს ემსახურება ერთი შეფერხების გარეშე.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&q=80&fit=crop&crop=face",
  },
  {
    name: "მარკუს ჩენი",
    role: "მარკეტინგის დირექტორი, RestaurantChain",
    content: "რებრენდინგისა და ვებსაიტის პროექტმა ყველა მოლოდინს გადააჭარბა. ონლაინ შეკვეთები 3 თვეში გაორმაგდა. საუკეთესო ინვესტიცია.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&q=80&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="შეფასებები"
          title="კლიენტები, რომლებიც გვირჩევენ"
          subtitle="ჩვენი შედეგები ყველაზე კარგად კლიენტების გამოცდილებით ჩანს."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-white/40">{t.role}</div>
                  </div>
                </div>
                <Quote size={16} className="text-white/10" />
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array(t.stars).fill(null).map((_, j) => (
                  <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-white/50 leading-relaxed">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
