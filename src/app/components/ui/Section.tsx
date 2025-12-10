import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  variant?: "dark" | "darker";
  className?: string;
  id?: string;
}

export function Section({ children, variant = "dark", className = "", id }: SectionProps) {
  const variantClasses = {
    dark: "bg-[#03001D]",
    darker: "bg-[#050321]",
  };

  return (
    <section
      id={id}
      className={`${variantClasses[variant]} ${className}`}
    >
      {children}
    </section>
  );
}

