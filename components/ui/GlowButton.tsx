"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function GlowButton({ children, onClick, href, variant = "primary", className, size = "md" }: GlowButtonProps) {
  const sizeClasses = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };
  const baseClasses = `relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer ${sizeClasses[size]}`;

  const variantClasses = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30",
    outline: "bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/5",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-full bg-white opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.span>
  );

  if (href) return <a href={href} className="group">{content}</a>;
  return <span className="group">{content}</span>;
}
