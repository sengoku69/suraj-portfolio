"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const buttonBaseClasses =
  "group/button inline-flex flex-row flex-nowrap items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 [&_svg]:shrink-0 [&>span]:whitespace-nowrap [&>span]:leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<string, string> = {
  default: "bg-foreground text-background hover:bg-foreground/90 active:scale-[0.98]",
  outline: "border-2 border-foreground/10 hover:bg-foreground/5 hover:border-foreground/20",
  ghost: "hover:bg-foreground/5",
};

const sizeClasses: Record<string, string> = {
  default: "h-11 px-6 text-sm gap-2",
  sm: "h-9 px-4 text-sm gap-1.5",
  lg: "h-12 px-8 text-base gap-2.5",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const resolvedClasses = cn(
      buttonBaseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
        className: cn(resolvedClasses, (children as React.ReactElement<React.HTMLAttributes<HTMLElement>>).props.className),
      });
    }

    return (
      <button
        className={resolvedClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
