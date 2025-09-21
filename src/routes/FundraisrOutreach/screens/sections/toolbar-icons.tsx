import React from "react";

interface IconProps {
  className?: string;
}

export const Bold: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 2.5h4.5a3 3 0 0 1 0 6h-4.5V2.5zM4.5 8.5h5a3 3 0 0 1 0 6h-5v-6z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const Italic: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 2.5h3M9.5 2.5l-2 11M6.5 13.5h3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const Underline: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 13h8M6.5 2.5v8M9.5 2.5v8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const Striketrough: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8h8M6.5 2.5v3M9.5 2.5v3M6.5 10.5v3M9.5 10.5v3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const Link: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 8.5h3M8.5 6.5l2 2-2 2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const OrderedList: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4h10M3 8h10M3 12h10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const BulletedList: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3" cy="4" r="1" fill="currentColor"/>
    <circle cx="3" cy="8" r="1" fill="currentColor"/>
    <circle cx="3" cy="12" r="1" fill="currentColor"/>
    <path d="M6 4h8M6 8h8M6 12h8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const AlignRight: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4h10M6 8h7M3 12h10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const Justify: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4h10M3 8h10M3 12h10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const Quote: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6c0-1.5 1-3 3-3s3 1.5 3 3v4c0 1.5-1 3-3 3s-3-1.5-3-3M9 6c0-1.5 1-3 3-3s3 1.5 3 3v4c0 1.5-1 3-3 3s-3-1.5-3-3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);
