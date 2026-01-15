import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "white" | "primary" | "dark" | "outline";
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "white",
  href = "#",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-[20px] px-[6px] py-[5px] transition-all duration-200 hover:opacity-90";

  const variantClasses = {
    white: "bg-white text-oscuro",
    primary: "bg-primario text-white",
    dark: "bg-oscuro text-white",
    outline: "bg-white border border-primario text-oscuro",
  };

  const arrowVariants = {
    white: "/images/arrow-circle-dark.svg",
    primary: "/images/arrow-circle-white.svg",
    dark: "/images/arrow-circle-white.svg",
    outline: "/images/arrow-circle-primary.svg",
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span className="pl-[19px] pr-[25px] text-[16px] leading-[22px]">
        {children}
      </span>
      <Image
        src={arrowVariants[variant]}
        alt=""
        width={45}
        height={45}
        className="shrink-0"
      />
    </a>
  );
}
