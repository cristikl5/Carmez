import { ArrowRight } from "lucide-react";

const ButtonPrimary = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`px-9 py-4 bg-white text-primary border cursor-pointer rounded-xl inline-flex font-bold text-base items-center gap-1 ${className}`}
    >
      {children}
      <ArrowRight size={18} className="text-primary" />
    </button>
  );
};

export default ButtonPrimary;
