import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 lg:px-24 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} • Lahiru Jayasundara — All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="/" className="hover:text-foreground">
              About
            </Link>
            <span>|</span>
            <Link href="/career" className="hover:text-foreground">
              Career
            </Link>
            <span>|</span>
            <Link href="/projects" className="hover:text-foreground">
              Projects
            </Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
