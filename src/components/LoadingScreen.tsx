import React from 'react';
import { sidebarIcons } from '../assets/icons/sidebarIcons';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* Simple collapsed logo - no animations */}
        <img
          src={sidebarIcons.collapsedLogo}
          alt="Fundraisr Logo"
          className="h-16 w-auto opacity-80"
        />
      </div>
    </div>
  );
};
