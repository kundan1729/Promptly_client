// Input.tsx - Custom input component
import React from 'react';
import { XCircle } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}


const Input: React.FC<InputProps> = ({ label, value, onChange, ...props }) => {
  const showClear = value && typeof onChange === 'function';
  return (
    <div className="flex flex-col gap-1 relative">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
        value={value}
        onChange={onChange}
        {...props}
      />
      {showClear && (
        <button
          type="button"
          className="absolute right-3 top-8 text-gray-400 hover:text-red-500"
          style={{ top: '2.5rem' }}
          onClick={() => {
            if (onChange) {
              const event = { target: { value: '' } };
              onChange(event as React.ChangeEvent<HTMLInputElement>);
            }
          }}
          tabIndex={-1}
        >
          <XCircle className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Input;
