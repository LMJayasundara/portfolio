'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { navItems } from '@/constants';

export const NavMenu = ({ className, ...props }: ComponentProps<typeof NavigationMenu>) => {
  const pathname = usePathname();
  const isVertical = props.orientation === 'vertical';

  return (
    <NavigationMenu {...props} className={cn(isVertical && 'justify-start w-full', className)}>
      <NavigationMenuList className={cn('flex gap-2', isVertical && 'flex-col items-start')}>
        {navItems.map(item => {
          const isActive = pathname === item.url;
          return (
            <NavigationMenuItem key={item.url}>
              <Link
                href={item.url}
                className={`
                  inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors
                  ${
                    isActive
                      ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }
                `}
              >
                {item.title}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
