import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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

  const closeAllMenus = () => {
      setIsMenuOpen(false);
  };

  const toggleMobileMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center transition-opacity duration-300 hover:opacity-75" onClick={closeAllMenus}>
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
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavItem to="/">Início</NavItem>
            <NavItem to="/contato">Contato</NavItem>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="flex flex-col space-y-2">
            <NavItem to="/" onClick={closeAllMenus}>Início</NavItem>
            <NavItem to="/contato" onClick={closeAllMenus}>Contato</NavItem>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;