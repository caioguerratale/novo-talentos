import React, { useState } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { services } from '../constants';
import { useTheme } from '../context/ThemeContext';

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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const closeAllMenus = () => {
      setIsMenuOpen(false);
      setIsServicesOpen(false);
  };

  const toggleMobileMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      setIsServicesOpen(false);
  };

  const scrollToElement = (elementId: string, useOffset: boolean = true) => {
    closeAllMenus();
    const doScroll = () => {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = useOffset ? 80 : 0; // Altura do header fixo
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    if (location.pathname === '/') {
      // Already on home, just scroll
      doScroll();
    } else {
      // Navigate to home then scroll
      navigate('/');
      setTimeout(doScroll, 100);
    }
  };

  // Soluções sem offset para mostrar a seção completa
  const scrollToServices = () => scrollToElement('servicos', false);
  const scrollToQuemSomos = () => scrollToElement('quem-somos');
  const scrollToOportunidades = () => scrollToElement('oportunidades');

  const scrollToTop = () => {
    closeAllMenus();
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
            {/* Início Dropdown */}
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <NavLink 
                to="/" 
                className={({ isActive }) => `flex items-center transition-all duration-300 ${isActive ? 'text-red-700 font-bold' : 'text-gray-700 hover:text-red-700'}`}
              >
                Início
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </NavLink>
              <div className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'}`}>
                <div className="py-1">
                  <button
                    onClick={scrollToTop}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Página Inicial
                  </button>
                  <button
                    onClick={scrollToServices}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Soluções
                  </button>
                  <button
                    onClick={scrollToQuemSomos}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Quem Somos / Blog
                  </button>
                  <button
                    onClick={scrollToOportunidades}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Oportunidades de Trabalho
                  </button>
                </div>
              </div>
            </div>

            <NavItem to="/contato">Contato</NavItem>

            {/* Botão de Tema (Provisório) */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-300 text-sm font-medium text-gray-700"
              title={theme === 'default' ? 'Ativar tema invertido' : 'Voltar ao tema padrão'}
            >
              {theme === 'default' ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Inverter
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Padrão
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="flex flex-col space-y-2">
            {/* Início Mobile Dropdown */}
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)} 
                className="w-full flex justify-between items-center py-2 px-3 text-gray-700 hover:bg-gray-100 rounded"
              >
                Início
                <svg className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-1 border-l-2 border-gray-200">
                  <button
                    onClick={scrollToTop}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Página Inicial
                  </button>
                  <button
                    onClick={scrollToServices}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Soluções
                  </button>
                  <button
                    onClick={scrollToQuemSomos}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Quem Somos / Blog
                  </button>
                  <button
                    onClick={scrollToOportunidades}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Oportunidades de Trabalho
                  </button>
                </div>
              )}
            </div>

            <NavItem to="/contato" onClick={closeAllMenus}>Contato</NavItem>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;