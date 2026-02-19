import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3;
}

export function Heading({ level = 2, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";

  const levels = {
    1: "text-4xl md:text-5xl font-bold text-brand-heading mb-6",
    2: "text-2xl md:text-3xl font-bold text-brand-heading mb-4",
    3: "text-xl md:text-2xl font-semibold text-brand-heading mb-3",
  };

  return (
    <Tag className={cn(levels[level], className)} {...props} />
  );
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "small" | "lead";
}

export function Text({ variant = "body", className, ...props }: TextProps) {
  const variants = {
    body: "text-lg md:text-xl text-brand-text leading-relaxed mb-4",
    small: "text-sm md:text-base text-slate-500",
    lead: "text-xl md:text-2xl font-medium text-brand-text leading-relaxed mb-6",
  };

  return (
    <p className={cn(variants[variant], className)} {...props} />
  );
}
