import { forwardRef } from "react";

interface Input {
  placeholder: string;
  options?:string[]
}

export const Input = forwardRef<HTMLInputElement | HTMLSelectElement, Input>((props, ref) => {
  const { placeholder, options } = props;
  
  return (
    <div>
      {options ? (
        <select
          ref={ref as React.Ref<HTMLSelectElement>}
          className="border border-gray-500 px-4 py-2 m-1 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 placeholder:text-slate-400 transition-all w-full"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          placeholder={placeholder}
          className="border border-gray-500 px-4 py-2 m-1 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 placeholder:text-slate-400 transition-all w-full"
        />
      )}
    </div>
  );
}
);


