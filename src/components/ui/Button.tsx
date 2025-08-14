const Button = ({
  icon,
  children,
  className,
  variant = "primary",
  ...props
}: {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white hover:bg-primary/90";
      case "secondary":
        return "bg-white text-primary hover:bg-gray-50";
      case "outline":
        return "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white";
      case "icon":
        return "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white border-0 !p-1";
      default:
        return "bg-primary text-white hover:bg-primary/90";
    }
  };

  return (
    <button
      {...props}
      className={`py-4 px-6 rounded-xl inline-flex items-center gap-2 font-bold transition-all duration-300 cursor-pointer ${getVariantStyles()} ${className}`}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
