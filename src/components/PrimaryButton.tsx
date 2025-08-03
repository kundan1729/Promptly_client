// PrimaryButton.tsx - Custom primary button
import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ loading, children, ...props }) => (
  <button
    className={`w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
    {...props}
  >
    {loading ? (
      <span className="loader mr-2" />
    ) : null}
    {children}
  </button>
);

export default PrimaryButton;
