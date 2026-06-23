"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";

const projects = [
  {
    title: "LuxeStore",
    category: "ონლაინ მაღაზია",
    description: "პრემიუმ ფეშენ ელ-კომერცია კასტომური შეკვეთის ფლოუთი — შემოსავალი 340%-ით გაიზარდა.",
    metrics: ["340% შემოსავლის ზრდა", "1.8წმ ჩატვირთვა", "4.9★ შეფასება"],
    color: "from-violet-900/40",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  },
  {
    title: "MedCare Platform",
    category: "ვებ აპლიკაცია",
    description: "ჯანდაცვის ჯავშნის პლატფორმა — თვეში 50,000+ პაციენტს ემსახურება.",
    metrics: ["50K+ მომხმარებელი", "99.9% სტაბილურობა", "HIPAA თავსებადი"],
    color: "from-emerald-900/40",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    title: "TechStartup.io",
    category: "SaaS ვებსაიტი",
    description: "B2B SaaS landing page 12% კონვერსიით — ინდუსტრიის საშუალოზე 3-ჯერ მეტი.",
    metrics: ["12% კონვერსია", "8წმ გვერდზე", "Top 3 SEO"],
    color: "from-blue-900/40",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "RestaurantChain",
    category: "ბრენდინგი + ვები",
    description: "სრული ბრენდის განახლება და მრავალლოკაციური ვებსაიტი 12 რესტორნის ქსელისთვის.",
    metrics: ["12 ლოკაცია", "2x ონლაინ შეკვეთა", "ბრენდის ერთიანობა"],
    color: "from-orange-900/40",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="რჩეული ნამუშევრები"
          title="პროექტები, რომლებიც შედეგზე მუშაობს."
          subtitle="რეალური პროექტები, რეალური შედეგები. ყოველი საიტი შედეგზე ფოკუსით იქმნება."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl overflow-hidden glass border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.color} to-transparent`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 px-3 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <ArrowUpRight size={14} className="text-black" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.metrics.map((m) => (
                    <span key={m} className="text-[10px] font-semibold text-white/50 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
