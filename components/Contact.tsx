"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 px-4 bg-black">
      <div className="max-w-2xl mx-auto">
        <SectionTitle
          eyebrow="კონტაქტი"
          title="დაგვიკავშირდით"
          subtitle="მოგვიყევით თქვენს პროექტზე და 24 საათში გიპასუხებთ."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass border border-white/10 rounded-2xl p-8"
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">შეტყობინება გაიგზავნა!</h3>
              <p className="text-sm text-white/50">24 საათში დაგიკავშირდებით.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">სახელი</label>
                  <input
                    required
                    type="text"
                    placeholder="თქვენი სახელი"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">ელ-ფოსტა</label>
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">ბიუჯეტი</label>
                <select
                  value={form.budget}
                  onChange={e => setForm({ ...form, budget: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                >
                  <option value="" className="bg-black">აირჩიეთ ბიუჯეტი</option>
                  <option value="1k-3k" className="bg-black">$1,500 – $3,000</option>
                  <option value="3k-7k" className="bg-black">$3,000 – $7,000</option>
                  <option value="7k-15k" className="bg-black">$7,000 – $15,000</option>
                  <option value="15k+" className="bg-black">$15,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">პროექტის დეტალები</label>
                <textarea
                  required
                  rows={4}
                  placeholder="მოგვიყევით თქვენს პროექტზე, მიზნებსა და ვადებზე..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-white text-black text-sm font-bold py-4 rounded-xl hover:bg-white/90 transition-colors"
              >
                გაგზავნა <Send size={14} />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
