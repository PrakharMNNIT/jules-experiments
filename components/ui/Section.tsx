import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "white" | "soft" | "gradient";
}

export function Section({ className, background = "white", ...props }: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    soft: "bg-brand-background",
    gradient: "bg-gradient-to-b from-brand-background to-white",
  };

  return (
    <section
      className={cn(
        "py-12 md:py-20 px-4 md:px-6 w-full flex justify-center",
        backgrounds[background],
        className
      )}
      {...props}
    >
      <div className="w-full max-w-4xl mx-auto">
        {props.children}
      </div>
    </section>
  );
}
