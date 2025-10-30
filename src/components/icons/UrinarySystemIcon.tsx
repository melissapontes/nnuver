import { LucideProps } from "lucide-react";

const UrinarySystemIcon = ({ className, ...props }: LucideProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Left kidney */}
      <ellipse cx="7" cy="8" rx="3" ry="4.5" />
      {/* Right kidney */}
      <ellipse cx="17" cy="8" rx="3" ry="4.5" />
      {/* Left ureter */}
      <path d="M 7 12.5 Q 8 15 9 17" />
      {/* Right ureter */}
      <path d="M 17 12.5 Q 16 15 15 17" />
      {/* Bladder */}
      <path d="M 9 17 Q 9 20 12 21 Q 15 20 15 17 Z" />
    </svg>
  );
};

export default UrinarySystemIcon;
