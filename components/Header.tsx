import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { whatsappLink } from '../constants';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block py-2 px-3 rounded md:p-0 transition-all duration-300 transform md:hover:-translate-y-px ${
        isActive
          ? 'text-white bg-red-700 md:bg-transparent md:text-red-700 font-bold'
          : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700'
      }`
    }
  >
    {children}
  </NavLink>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
      setIsMenuOpen(false);
  };

  const toggleMobileMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  const scrollToServices = () => {
    closeMenu();
    const doScroll = () => {
      const element = document.getElementById('servicos');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    if (location.pathname === '/') {
      doScroll();
    } else {
      navigate('/');
      setTimeout(doScroll, 100);
    }
  };

  const scrollToTop = () => {
    closeMenu();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          <NavLink to="/" className="flex items-center transition-opacity duration-300 hover:opacity-75" onClick={scrollToTop}>
            <img src="https://talentosconsultoria.com.br/wp-content/uploads/2019/11/talentos-consultoria-logo.png" alt="Talentos Consultoria Logo" className="h-12" />
          </NavLink>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600"
              aria-label="Abrir menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button 
              onClick={scrollToServices}
              className="text-gray-700 hover:text-red-700 transition-all duration-300 font-medium"
            >
              Para sua empresa
            </button>

            <NavItem to="/sobre">Quem Somos</NavItem>

            <a 
              href="https://talentosconsultoria.infojobs.com.br/empregos.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-700 transition-all duration-300 font-medium"
            >
              Vagas de emprego
            </a>
          </div>

          {/* CTA Button - Right side */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-red-600 text-white font-semibold py-2 px-5 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Contrate a Talentos
          </a>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="flex flex-col space-y-2">
            <button 
              onClick={scrollToServices}
              className="w-full text-left py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200"
            >
              Para sua empresa
            </button>

            <NavItem to="/sobre" onClick={closeMenu}>Quem Somos</NavItem>

            <a 
              href="https://talentosconsultoria.infojobs.com.br/empregos.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200"
            >
              Vagas de emprego
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-3 bg-red-600 text-white font-semibold rounded text-center hover:bg-red-700 transition-colors duration-200 mt-2"
            >
              Contrate a Talentos
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;