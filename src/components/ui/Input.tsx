import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactElement;
}

function Input({ className, type, icon, ...props }: InputProps) {
  return (
    <div className="relative w-full sm:w-auto">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary/20 dark:bg-input/30 border-gray-400 flex h-9 w-full min-w-0 rounded-md border bg-white px-5 py-3 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-primary focus-visible:ring-primary/70 focus-visible:ring-2",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {icon && (
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center p-4">
          {icon}
        </div>
      )}
    </div>
  );
}

export { Input };
