'use client';

import React from 'react';
import Link from 'next/link';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  external?: boolean;
  children: React.ReactNode;
}

const ctaVariants = {
  primary: 'bg-airdocs-blue text-white hover:bg-airdocs-blue-dark shadow-lg shadow-airdocs-blue/30 hover:shadow-xl hover:shadow-airdocs-blue/40 transition-all duration-300',
  secondary: 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/30 hover:shadow-xl hover:shadow-gray-900/40 transition-all duration-300',
  outline: 'border-2 border-airdocs-blue text-airdocs-blue hover:bg-airdocs-onahau bg-white transition-all duration-300',
};

const ctaSizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-13 px-8 text-lg',
};

export function CTAButton({
  variant = 'primary',
  size = 'md',
  href,
  showIcon = false,
  icon,
  external = false,
  className,
  children,
  ...props
}: CTAButtonProps) {
  const buttonClasses = cn(
    'font-semibold rounded-lg inline-flex items-center justify-center whitespace-nowrap',
    ctaVariants[variant],
    ctaSizes[size],
    'group',
    className
  );

  const content = (
    <>
      {children}
      {showIcon && (
        icon || <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <Button className={buttonClasses} {...props}>
      {content}
    </Button>
  );
}
