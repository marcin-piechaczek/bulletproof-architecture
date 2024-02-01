'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { DarkMode } from '@/components/DarkMode';
import { mainMenu } from '@/lib/mainMenu';
import { useMemo } from 'react';

export const Header = () => {
  const menu = useMemo(
    () => mainMenu.filter(({ display }) => Boolean(display)),
    []
  );

  return (
    <div className='flex justify-between px-6 py-8'>
      <NavigationMenu>
        {menu.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenu>
      <DarkMode />
    </div>
  );
};
