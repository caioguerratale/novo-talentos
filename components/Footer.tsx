import React from 'react';
import { contactInfo, socialLinks, services, latestArticles, footerInfo, legalLinks } from '../constants';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string, 'aria-label': string, children: React.ReactNode }> = ({ href, 'aria-label': ariaLabel, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
        {children}
    </a>
);

const FooterLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
    <li>
        <Link to={to} className="text-gray-400 hover:text-white transition-all duration-300 inline-block transform hover:translate-x-1">
            {children}
        </Link>
    </li>
);

const ArticleLink: React.FC<{ href: string, isInternal?: boolean, children: React.ReactNode }> = ({ href, isInternal, children }) => (
     <li className="flex">
        <span className="text-orange-500 mr-2">•</span>
        {isInternal ? (
            <Link to={href} className="text-gray-400 hover:text-white transition-colors duration-300">
                {children}
            </Link>
        ) : (
            <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
                {children}
            </a>
        )}
    </li>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Coluna 1: Talentos Consultoria */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Talentos Consultoria</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{footerInfo.description}</p>
            <Link to="/servicos" className="text-sm text-orange-500 hover:underline">Conheça os nossos serviços.</Link>
            <ul className="mt-4 space-y-2">
                {legalLinks.map(link => (
                    <li key={link.title}>
                        <a href={link.url} className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                           » {link.title}
                        </a>
                    </li>
                ))}
            </ul>
            <p className="text-gray-500 text-xs mt-4">{footerInfo.cnpj}</p>
            <h4 className="text-md font-semibold mt-6 mb-3 text-orange-500">Siga-nos</h4>
             <div className="flex space-x-4">
                <SocialIcon href={socialLinks.facebook} aria-label="Facebook">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </SocialIcon>
                <SocialIcon href={socialLinks.instagram} aria-label="Instagram">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.688-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
                </SocialIcon>
                 <SocialIcon href={socialLinks.linkedin} aria-label="LinkedIn">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                 </SocialIcon>
            </div>
          </div>

          {/* Coluna 2: Serviços para RH */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Serviços para RH</h3>
            <ul className="space-y-2">
                {services.map(service => (
                    <FooterLink key={service.id} to={`/servicos/${service.slug}`}>{service.title}</FooterLink>
                ))}
            </ul>
          </div>
          
          {/* Coluna 3: Últimos Artigos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Últimos Artigos</h3>
            <ul className="space-y-3">
                {latestArticles.map(article => (
                    <ArticleLink key={article.title} href={article.url} isInternal={(article as any).isInternal}>{article.title}</ArticleLink>
                ))}
            </ul>
          </div>

          {/* Coluna 4: Contatos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Contatos</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                <span className="whitespace-pre-line">{contactInfo.address}</span>
              </li>
              <li className="flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="hover:text-white transition-colors">{contactInfo.phone}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Talentos Consultoria | Desenvolvido por Marketing Objetivo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
