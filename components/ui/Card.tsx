import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8",
        hover && "transition-transform hover:scale-[1.02] hover:shadow-md",
        className
      )}
      {...props}
    />
  );
}
