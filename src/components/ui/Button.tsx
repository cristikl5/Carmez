const Button = ({
  icon,
  children,
  className,
  variant = "primary",
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white hover:bg-primary/90";
      case "secondary":
        return "bg-white text-primary hover:bg-gray-50";
      case "outline":
        return "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white";
      default:
        return "bg-primary text-white hover:bg-primary/90";
    }
  };

  return (
    <button
      className={`py-4 px-10 rounded-xl inline-flex items-center gap-2 font-bold transition-all duration-300 cursor-pointer ${getVariantStyles()} ${className}`}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
