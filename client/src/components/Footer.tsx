
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const year = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Coursework', href: '#coursework' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#08080e] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-display text-lg font-bold uppercase tracking-wider text-white">Asim Dey</p>
            <p className="text-sm text-white/50">Electronics &amp; Communication Engineering Student</p>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-[#ffd600] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <button
            onClick={scrollToTop}
            className="rounded-full border border-white/20 bg-white/5 p-2 text-white hover:border-[#ffd600]/50 hover:text-[#ffd600] transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/40">© {year} Asim Dey. All rights reserved.</p>
          <div className="flex mt-2 md:mt-0 space-x-4">
            <a
              href="https://github.com/arghodey-01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#00d4ff] transition-colors"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/asim-dey-ba1899394/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#00d4ff] transition-colors"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href="mailto:asimdy01@gmail.com"
              className="text-white/50 hover:text-[#00d4ff] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
