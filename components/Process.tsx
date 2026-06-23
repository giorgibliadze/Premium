"use client";

import { motion } from "framer-motion";
import { Search, Pen, Code2, Rocket, TrendingUp } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";

const steps = [
  { number: "01", icon: Search, title: "კვლევა", description: "ღრმად ვიკვლევთ თქვენს ბიზნესს, მიზნებს, კონკურენტებსა და სამიზნე აუდიტორიას — ნათელი სტრატეგიის შესაქმნელად." },
  { number: "02", icon: Pen, title: "დიზაინი", description: "ვაიფრეიმები, პროტოტიპები და პიქსელ-პერფექტი UI დიზაინები. ვიმეორებთ სანამ ზუსტად ისე არ გამოიყურება, როგორც გსურთ." },
  { number: "03", icon: Code2, title: "დეველოპმენტი", description: "სუფთა, მასშტაბური კოდი თანამედროვე ტექნოლოგიებით. ყოველი კომპონენტი ოპტიმიზებულია სიჩქარის, ხელმისაწვდომობისა და SEO-სთვის." },
  { number: "04", icon: Rocket, title: "გაშვება", description: "საფუძვლიანი ტესტირება, განლაგება და go-live მხარდაჭერა. ვრწმუნდებით, რომ ყველაფერი სრულყოფილია გაშვებამდე." },
  { number: "05", icon: TrendingUp, title: "ზრდა", description: "გაშვების შემდგომი ანალიტიკა, A/B ტესტირება და მუდმივი ოპტიმიზაცია შედეგების გასაუმჯობესებლად." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 px-4 bg-black overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle
          eyebrow="პროცესი"
          title="როგორ ვმუშაობთ"
          subtitle="5 საფეხურიანი პროცესი, გამართული 40+ პროექტზე."
        />

        <div className="mt-20 relative">
          {/* Connector line */}
          <div className="absolute left-[19px] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-6 lg:gap-8 items-start p-6 rounded-2xl glass border border-white/[0.06] hover:border-white/15 transition-all duration-300"
              >
                {/* Step indicator */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    <step.icon size={16} className="text-white/50 group-hover:text-white/80 transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black text-white/20 tracking-widest">{step.number}</span>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
