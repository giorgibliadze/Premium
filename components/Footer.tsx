"use client";

import { GitBranch, X, Link, Globe } from "lucide-react";

const links = {
  სერვისები: ["ვებსაიტის დამზადება", "ონლაინ მაღაზია", "SEO ოპტიმიზაცია", "ბრენდინგი", "ავტომატიზაცია", "მხარდაჭერა"],
  კომპანია: ["ჩვენ შესახებ", "ნამუშევრები", "პროცესი", "ბლოგი", "კარიერა"],
  კონტაქტი: ["კონფიდენციალობა", "მომსახურების პირობები", "Cookie პოლიტიკა"],
};

const social = [
  { icon: GitBranch, href: "#" },
  { icon: X, href: "#" },
  { icon: Link, href: "#" },
  { icon: Globe, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 pt-16 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center">
                <span className="text-black font-black text-xs">N</span>
              </div>
              <span className="text-white font-bold text-sm tracking-tight">Next-Hub</span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs mb-6">
              ვქმნით ვებსაიტებს, რომლებიც ბიზნესებს ზრდაში ეხმარება.
            </p>
            <div className="flex items-center gap-3">
              {social.map(({ icon: Icon, href }, idx) => (
                <a key={idx} href={href} className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center hover:border-white/25 hover:bg-white/10 transition-all">
                  <Icon size={13} className="text-white/50" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © 2026{" "}
            <a
              href="https://next-hub.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors underline underline-offset-2"
            >
              Next-Hub
            </a>
            . ყველა უფლება დაცულია.
          </p>
          <p className="text-xs text-white/20">შექმნილია Next.js-ით & ♥</p>
        </div>
      </div>
    </footer>
  );
}
