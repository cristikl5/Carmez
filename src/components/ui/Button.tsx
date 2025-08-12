const Button = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <button>
      {children}
      {icon}
    </button>
  );
};

export default Button;
