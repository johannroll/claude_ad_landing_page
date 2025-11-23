'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationItem } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

export function Navigation({ items, className }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const hasActiveChild = (item: NavigationItem) => {
    return item.children?.some((child) => isActiveLink(child.href)) || false;
  };

  return (
    <nav className={cn('hidden md:flex items-center gap-1', className)}>
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isActive = isActiveLink(item.href) || hasActiveChild(item);

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
            onMouseLeave={() => hasChildren && setActiveDropdown(null)}
          >
            {hasChildren ? (
              <>
                <button
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-50',
                    activeDropdown === item.label && 'text-airdocs-blue bg-gray-50',
                    isActive ? 'text-airdocs-blue' : 'text-gray-700 hover:text-airdocs-blue'
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      activeDropdown === item.label && 'rotate-180'
                    )}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-gray-200 bg-white shadow-lg py-2 z-50">
                    {item.children.map((child) => {
                      const isChildActive = isActiveLink(child.href);
                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={cn(
                            'block px-4 py-3 text-sm hover:bg-gray-50 transition-colors group',
                            isChildActive && 'bg-airdocs-onahau'
                          )}
                        >
                          <div
                            className={cn(
                              'font-medium group-hover:text-airdocs-blue',
                              isChildActive ? 'text-airdocs-blue' : 'text-gray-900'
                            )}
                          >
                            {child.label}
                          </div>
                          {child.description && (
                            <div className="text-xs text-gray-500 mt-0.5">
                              {child.description}
                            </div>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-50 block',
                  isActive
                    ? 'text-airdocs-blue bg-airdocs-onahau'
                    : 'text-gray-700 hover:text-airdocs-blue'
                )}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
