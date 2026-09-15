import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "accent";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-foreground/5 text-foreground hover:bg-foreground/10": variant === "default",
          "border border-foreground/10 hover:border-foreground/20": variant === "outline",
          "bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20": variant === "accent",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
