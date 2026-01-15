"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "white" | "primary" | "dark" | "outline";
  href?: string;
  className?: string;
  size?: "default" | "small";
}

export default function Button({
  children,
  variant = "white",
  href = "#",
  className = "",
  size = "default",
}: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center rounded-[20px] transition-all duration-300";

  const sizeClasses = {
    default: "px-[6px] py-[5px]",
    small: "px-[4px] py-[3px]",
  };

  const variantClasses = {
    white: "bg-white text-oscuro hover:bg-gray-100 hover:shadow-lg",
    primary: "bg-primario text-white hover:bg-primario/90 hover:shadow-lg",
    dark: "bg-oscuro text-white hover:bg-oscuro/90 hover:shadow-lg",
    outline: "bg-white border border-primario text-oscuro hover:bg-primario hover:text-white",
  };

  const arrowVariants = {
    white: "/images/arrow-circle-dark.svg",
    primary: "/images/arrow-circle-white.svg",
    dark: "/images/arrow-circle-white.svg",
    outline: "/images/arrow-circle-primary.svg",
  };

  const textSizeClasses = {
    default: "text-[14px] leading-[22px] sm:text-[16px]",
    small: "text-[13px] leading-[20px]",
  };

  const arrowSizeClasses = {
    default: "size-[40px] sm:size-[45px]",
    small: "size-[36px]",
  };

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className={`px-4 sm:pl-[19px] sm:pr-[25px] ${textSizeClasses[size]}`}>
        {children}
      </span>
      <motion.div
        className="relative shrink-0"
        whileHover={{ rotate: 45 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={arrowVariants[variant]}
          alt=""
          width={45}
          height={45}
          className={`${arrowSizeClasses[size]} transition-transform duration-300 group-hover:rotate-45`}
        />
      </motion.div>
    </motion.a>
  );
}
