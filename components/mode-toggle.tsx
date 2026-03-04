'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const currentTheme = resolvedTheme ?? theme;
  const isDark = currentTheme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={handleToggle}
      className="relative"
    >
      <Sun className="absolute h-[1.5rem] w-[1.5rem] stroke-[1.5] scale-100 dark:scale-0 transform transition-transform duration-300" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] stroke-[1.5] scale-0 dark:scale-100 transform transition-transform duration-300" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
