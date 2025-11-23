'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationItem } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CTAButton } from './CTAButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
  className?: string;
}

export function MobileMenu({ isOpen, onClose, items, className }: MobileMenuProps) {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-[60] transform transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full',
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="overflow-y-auto h-[calc(100vh-80px)] p-4">
          <nav className="space-y-2">
            {items.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive = isActiveLink(item.href);

              if (hasChildren) {
                return (
                  <Accordion key={item.label} type="single" collapsible>
                    <AccordionItem value={item.label} className="border-none">
                      <AccordionTrigger
                        className={cn(
                          'py-3 px-4 hover:bg-gray-50 rounded-lg hover:no-underline text-left font-medium',
                          isActive ? 'text-airdocs-blue' : 'text-gray-900'
                        )}
                      >
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-0">
                        <div className="space-y-1 pl-2">
                          {item.children!.map((child) => {
                            const isChildActive = isActiveLink(child.href);
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={onClose}
                                className={cn(
                                  'block px-4 py-2.5 text-sm hover:bg-airdocs-onahau rounded-lg transition-colors',
                                  isChildActive
                                    ? 'text-airdocs-blue bg-airdocs-onahau font-semibold'
                                    : 'text-gray-700 hover:text-airdocs-blue'
                                )}
                              >
                                <div className="font-medium">{child.label}</div>
                                {child.description && (
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {child.description}
                                  </div>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'block px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'text-airdocs-blue bg-airdocs-onahau font-semibold'
                      : 'text-gray-900 hover:text-airdocs-blue hover:bg-gray-50'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
            <CTAButton
              variant="outline"
              className="w-full justify-center"
              href="#contact"
              onClick={onClose}
            >
              Contact Sales
            </CTAButton>
            <CTAButton
              variant="primary"
              className="w-full justify-center"
              href="#trial"
              onClick={onClose}
            >
              Book a Trial
            </CTAButton>
          </div>
        </div>
      </div>
    </>
  );
}
