"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Search, Palette, Zap, Settings } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { AnimatedCard } from "./ui/AnimatedCard";

const services = [
  {
    icon: Globe,
    title: "ვებსაიტის დამზადება",
    description: "სწრაფი, პერსონალური ვებსაიტები Next.js და React-ის გამოყენებით — SEO-ისა და კონვერსიისთვის ოპტიმიზებული.",
    tag: "მთავარი სერვისი",
    glow: "#4f8ef7",
  },
  {
    icon: ShoppingCart,
    title: "ონლაინ მაღაზია",
    description: "სრულფასოვანი ელექტრონული მაღაზიები, რომლებიც სტუმრებს მყიდველებად აქცევენ. Shopify, WooCommerce ან კასტომური გადაწყვეტა.",
    tag: "შემოსავალი",
    glow: "#a855f7",
  },
  {
    icon: Search,
    title: "SEO ოპტიმიზაცია",
    description: "მონაცემებზე დაფუძნებული SEO სტრატეგია, რომელიც თქვენს ბიზნესს Google-ის პირველ გვერდზე გამოიყვანს.",
    tag: "ზრდა",
    glow: "#22c55e",
  },
  {
    icon: Palette,
    title: "ბრენდინგი",
    description: "ლოგო, ფერთა სისტემა, ტიპოგრაფია და ბრენდის სახელმძღვანელო — ყველაფერი, რომ დაუვიწყარი იყოთ.",
    tag: "იდენტობა",
    glow: "#f59e0b",
  },
  {
    icon: Zap,
    title: "ავტომატიზაცია",
    description: "ბიზნეს პროცესების ავტომატიზაცია, CRM ინტეგრაციები და ვორქფლოუები, რომლებიც დროს გიზოგავენ.",
    tag: "ეფექტიანობა",
    glow: "#06b6d4",
  },
  {
    icon: Settings,
    title: "მხარდაჭერა",
    description: "24/7 მონიტორინგი, განახლებები, ბექაფი და შესრულების ოპტიმიზაცია — საიტი ყოველთვის გამართულია.",
    tag: "სუპორტი",
    glow: "#f43f5e",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="სერვისები"
          title="რას ვაკეთებთ"
          subtitle="კონცეფციიდან გაშვებამდე და შემდეგაც — ჩვენ ვმართავთ თქვენი ციფრული ყოფნის ყოველ ასპექტს."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <AnimatedCard key={s.title} delay={i * 0.07} glowColor={s.glow} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <s.icon size={18} className="text-white/70" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mt-1">{s.tag}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{s.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
