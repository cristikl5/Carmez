const Input = ({
  placeholder,
  icon,
}: {
  placeholder: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="relative">
      <input
        className={`w-full  bg-transparent py-3 rounded-[10px] px-5 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300`}
        placeholder={`${placeholder}...`}
      />
      {icon && (
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center p-4">
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
