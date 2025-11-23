import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { getAssetPath } from '@/lib/constants';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white';
}

const sizeClasses = {
  sm: { height: 24, width: 120 },
  md: { height: 32, width: 160 },
  lg: { height: 40, width: 200 },
  xl: { height: 48, width: 240 },
};

export function Logo({ className, size = 'md', variant = 'default' }: LogoProps) {
  const dimensions = sizeClasses[size];

  return (
    <div className={cn('flex items-center relative', className)}>
      <Image
        src={getAssetPath('/images/AirdocsLogoHTL.png')}
        alt="Airdocs Global"
        width={dimensions.width}
        height={dimensions.height}
        className="transition-opacity hover:opacity-90"
        priority
      />
    </div>
  );
}
