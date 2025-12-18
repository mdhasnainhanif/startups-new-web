import { ContainerProps } from "../types/types";

export default function Container({
  children,
  className = "",
  maxWidth = "xl",
}: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    mxl: "max-w-[1200px]",
    sxl: "max-w-[1000px]",
    xl: "max-w-[1400px]",
    "2xl": "max-w-[1640px]",
    full: "max-w-full",
  };

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClasses[maxWidth]} ${className}`}
    >
      {children}
    </div>
  );
}
