import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { services, jobLinks } from '../constants';

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

const DropdownLink: React.FC<{ to: string; children: React.ReactNode; onClick: () => void; isExternal?: boolean; }> = ({ to, children, onClick, isExternal }) => {
  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
    >
      {children}
    </Link>
  );
};


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isJobsOpen, setIsJobsOpen] = useState(false);

  const closeAllMenus = () => {
      setIsMenuOpen(false);
      setIsServicesOpen(false);
      setIsJobsOpen(false);
  };
  
  const closeSubMenus = () => {
      setIsServicesOpen(false);
      setIsJobsOpen(false);
  }

  const toggleMobileMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      closeSubMenus();
  };
  
  const toggleServicesMenu = () => setIsServicesOpen(!isServicesOpen);
  const toggleJobsMenu = () => setIsJobsOpen(!isJobsOpen);

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
            <NavItem to="/sobre">Sobre Nós</NavItem>
            
            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <NavLink to="/servicos" className={({ isActive }) => `flex items-center py-2 px-3 rounded md:p-0 transition-all duration-300 ${isActive ? 'text-red-700 font-bold' : 'text-gray-700 hover:text-red-700'}`}>
                Serviços de RH
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </NavLink>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-gray-50 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'}`}>
                <div className="py-1">
                  {services.map(service => (
                    <DropdownLink key={service.id} to={`/servicos/${service.slug}`} onClick={closeSubMenus}>{service.title}</DropdownLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Jobs Dropdown */}
            <div className="relative" onMouseEnter={() => setIsJobsOpen(true)} onMouseLeave={() => setIsJobsOpen(false)}>
               <NavLink to="/vagas" className={({ isActive }) => `relative flex items-center py-2 px-3 rounded md:p-0 transition-all duration-300 ${isActive ? 'text-red-700 font-bold' : 'text-gray-700 hover:text-red-700'}`}>
                Vagas de Emprego
                <span className="absolute -top-1 -right-2 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isJobsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </NavLink>
               <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-gray-50 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ${isJobsOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'}`}>
                <div className="py-1">
                  {jobLinks.map(link => (
                    <DropdownLink key={link.title} to={link.url} onClick={closeSubMenus} isExternal>{link.title}</DropdownLink>
                  ))}
                </div>
              </div>
            </div>

            <NavItem to="/contato">Contato</NavItem>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="flex flex-col space-y-2">
            <NavItem to="/" onClick={closeAllMenus}>Início</NavItem>
            <NavItem to="/sobre" onClick={closeAllMenus}>Sobre Nós</NavItem>
            
            {/* Services Mobile */}
            <div>
              <button onClick={toggleServicesMenu} className="w-full flex justify-between items-center py-2 px-3 text-gray-700 hover:bg-gray-100 rounded">
                Serviços de RH
                <svg className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-1 border-l-2 border-gray-200">
                  {services.map(service => (
                    <DropdownLink key={service.id} to={`/servicos/${service.slug}`} onClick={closeAllMenus}>{service.title}</DropdownLink>
                  ))}
                </div>
              )}
            </div>

            {/* Jobs Mobile */}
            <div>
              <button onClick={toggleJobsMenu} className="w-full flex justify-between items-center py-2 px-3 text-gray-700 hover:bg-gray-100 rounded">
                Vagas de Emprego
                <svg className={`w-5 h-5 transition-transform duration-300 ${isJobsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isJobsOpen && (
                <div className="pl-4 mt-2 space-y-1 border-l-2 border-gray-200">
                  {jobLinks.map(link => (
                    <DropdownLink key={link.title} to={link.url} onClick={closeAllMenus} isExternal>{link.title}</DropdownLink>
                  ))}
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