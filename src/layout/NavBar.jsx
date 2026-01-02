const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#testimonials', label: 'Testimonials' },
];

export const NavBar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-transparent py-5'>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        {/* Logo Section */}
        <a href='#' className='text-xl font-bold tracking-tight hover:text-primary'>
          PM<span className='text-primary'>.</span>
        </a>

        {/* Desktop Nav */}
        <div className='flex items-center gap-1'>
          <div className='glass'>
            {navLinks.map((link, idx) => (
              <a href={link.href} key={idx}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
