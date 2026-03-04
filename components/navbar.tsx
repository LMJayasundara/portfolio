import { NavMenu } from '@/components/nav-menu';
import { NavigationSheet } from '@/components/navigation-sheet';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 h-16 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-between px-6 md:px-12 lg:px-24">
        {/* Left-aligned desktop menu */}
        <div className="flex items-center">
          <NavMenu className="hidden md:block" />
        </div>

        {/* Right actions */}
        <div className="flex items-center justify-end gap-3">
          <ModeToggle />
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
