'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { Navigation } from '@/components/shared/Navigation';
import { MobileMenu } from '@/components/shared/MobileMenu';
import { CTAButton } from '@/components/shared/CTAButton';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { mainNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScrollDirection({ threshold: 10 });

  // Add background and shadow when scrolled
  const isScrolled = scrollY > 20;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent',
          className
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 z-10">
              <Logo
                size="lg"
                variant={isScrolled ? 'default' : 'default'}
                className="transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <Navigation items={mainNavigation} className="flex-1 justify-center" />

            {/* Right side - CTA Buttons */}
            <div className="flex items-center gap-3">
              {/* Desktop CTAs */}
              <div className="hidden md:flex items-center gap-3">
                <CTAButton
                  variant="outline"
                  size="sm"
                  href="#contact"
                >
                  Contact Sales
                </CTAButton>
                <CTAButton
                  variant="primary"
                  size="sm"
                  href="#trial"
                  showIcon
                >
                  Book a Trial
                </CTAButton>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={mainNavigation}
      />

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
}
