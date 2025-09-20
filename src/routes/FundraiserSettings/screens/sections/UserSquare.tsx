import React from "react";

export const UserSquare = ({ className }: { className?: string }) => (
  <div className={className}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="10" cy="7" r="2" fill="currentColor"/>
      <path d="M6 16C6 13.5 7.5 12 10 12C12.5 12 14 13.5 14 16" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  </div>
);
