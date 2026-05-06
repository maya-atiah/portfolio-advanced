import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/theme';
import { cn } from '../lib/utils';

const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  console.log('Cdsvds', isDark);
  return (
    <button
      onClick={toggle}
      aria-label='Toggle theme'
      className={cn(
        'relative w-11 h-11 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-all overflow-hidden group',
        className,
      )}
    >
      <Sun
        className={cn(
          'w-5 h-5 absolute transition-all duration-500',
          isDark
            ? 'opacity-0 rotate-90 scale-50'
            : 'opacity-100 rotate-0 scale-100 text-foreground',
        )}
      />
      <Moon
        className={cn(
          'w-5 h-5 absolute transition-all duration-500',
          isDark
            ? 'opacity-100 rotate-0 scale-100 text-foreground'
            : 'opacity-0 -rotate-90 scale-50',
        )}
      />
    </button>
  );
};

export default ThemeToggle;
