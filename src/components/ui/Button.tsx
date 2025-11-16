const Button = ({
  icon,
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "icon" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white hover:bg-primary/90";
      case "secondary":
        return "bg-white text-primary hover:bg-gray-50 hover:bg-primary hover:text-white";
      case "outline":
        return "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white";
      case "icon":
        return "bg-primary text-white border border-primary hover:bg-primary/90 hover:text-white border-0 !p-1";
      case "ghost":
        return "bg-transparent text-primary hover:bg-primary hover:text-white";
      default:
        return "bg-primary text-white hover:bg-primary/90";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "icon":
        return "!p-1";
      default:
        return "py-4 px-6 text-base";
    }
  };

  return (
    <button
      {...props}
      className={`py-4 px-6 text-base rounded-xl inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 cursor-pointer ${getVariantStyles()} ${getSizeStyles()} ${className}`}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
