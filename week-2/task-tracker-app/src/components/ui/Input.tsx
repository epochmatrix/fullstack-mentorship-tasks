import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', id, ...props }) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-slate-500 select-none ml-1">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-2.5 text-sm bg-white border rounded-xl outline-none transition-all duration-200 shadow-sm
          ${error 
            ? 'border-red-400 focus:ring-4 focus:ring-red-100 focus:border-red-500 text-red-950 placeholder-red-300' 
            : 'border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-slate-800 placeholder-slate-400'
          } ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs font-semibold text-red-500 ml-1 flex items-center gap-1 animate-pulse">
          ⚠️ {error}
        </span>
      )}
    </div>
  );
};
