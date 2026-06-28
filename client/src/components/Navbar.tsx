
import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Coursework', href: '#coursework' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Asim_Dey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navClass = isScrolled
    ? 'bg-[#08080e]/95 backdrop-blur-md shadow-lg border-b border-white/10'
    : 'bg-transparent';

  const linkClass = isScrolled
    ? 'text-white/60 hover:text-white'
    : 'text-white/70 hover:text-white';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8 ${navClass}`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80 sm:text-base"
        >
          Asim Dey
        </a>

        <div className="hidden lg:flex items-center space-x-4 xl:space-x-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-[0.12em] transition-all duration-200 relative group ${linkClass}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ffd600] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}

          <div className="flex items-center gap-2 ml-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadResume}
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-[#ffd600] text-[#0a0a0f] hover:bg-[#ffd600]/90"
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-[#08080e]/98 backdrop-blur-md shadow-lg border-b border-white/10">
          <div className="flex flex-col space-y-3 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium py-2 text-white/70 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadResume}
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button asChild className="w-full bg-[#ffd600] text-[#0a0a0f] hover:bg-[#ffd600]/90">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
