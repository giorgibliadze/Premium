"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";

const faqs = [
  { q: "რამდენ ხანს სჭირდება საიტის დამზადება?", a: "პროექტების უმეტესობა 2–6 კვირაში სრულდება სირთულის მიხედვით. მარტივი landing page 1–2 კვირა, სრული ელ-კომერცია კი 4–8 კვირა. ზუსტ ვადებს გაცნობებთ საუბრის შემდეგ." },
  { q: "რა ღირს პროექტი?", a: "პროექტები 1,500$-დან იწყება landing page-ებისთვის და 15,000$-მდე ან მეტი კომპლექსური პლატფორმებისთვის. გთავაზობთ ფიქსირებული ფასის პაკეტებს. ყოველი ფასი გამჭვირვალეა — დამალული ხარჯები არ არის." },
  { q: "გთავაზობთ გაშვების შემდგომ მხარდაჭერას?", a: "დიახ, ყველა პროექტი მოიცავს 30 დღის უფასო მხარდაჭერას გაშვების შემდეგ. ასევე გთავაზობთ მუდმივ სერვის გეგმებს 24/7 მონიტორინგით და პრიორიტეტული სუპორტით." },
  { q: "SEO-ში გეხმარებით საიტის გაშვების შემდეგ?", a: "აბსოლუტურად. გთავაზობთ SEO პაკეტებს, მათ შორის ტექნიკური SEO, კონტენტის ოპტიმიზაცია, link building და ყოველთვიური ანგარიში. კლიენტების უმეტესობა 90 დღეში ხედავს შედეგებს." },
  { q: "რა ტექნოლოგიებს იყენებთ?", a: "ძირითადად ვმუშაობთ Next.js, React, TypeScript და Tailwind CSS-ით. ელ-კომერციისთვის: Shopify ან WooCommerce. CMS-ისთვის: Sanity, Contentful ან WordPress — საჭიროების მიხედვით." },
  { q: "საერთაშორისო კლიენტებთან მუშაობთ?", a: "დიახ! ვმუშაობთ ევროპის, ჩრდილოეთ ამერიკის, ახლო აღმოსავლეთისა და სხვა კლიენტებთან. კომუნიკაცია ინგლისურად, ვმუშაობთ ნებისმიერ დროის ზონაში." },
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
