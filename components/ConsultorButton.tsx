import React from 'react';

const WHATSAPP_NUMBER = "5521967155476";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

type ButtonVariant = 'hero' | 'dark' | 'light' | 'cta';

interface ConsultorButtonProps {
    variant?: ButtonVariant;
    showIcon?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
    // Para fundos vermelhos (hero section) - Responsivo
    hero: "inline-block bg-white text-red-700 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-sm sm:text-base w-full sm:w-auto text-center",
    
    // Para fundos escuros (seção de soluções) - Responsivo
    dark: "inline-flex items-center justify-center bg-white text-gray-900 font-bold py-3 px-6 sm:px-8 rounded-md hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide shadow-lg transform hover:scale-105 text-sm sm:text-base",
    
    // Para fundos claros (páginas de serviço - hero interno) - Responsivo
    light: "inline-flex items-center justify-center gap-2 bg-white text-red-700 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base",
    
    // Para seções CTA (chamada para ação) - Responsivo
    cta: "inline-flex items-center justify-center gap-2 bg-white text-red-700 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base",
};

const ConsultorButton: React.FC<ConsultorButtonProps> = ({ 
    variant = 'light', 
    showIcon = true,
    className = '',
    children 
}) => {
    const baseStyles = variantStyles[variant];
    
    return (
        <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseStyles} ${className}`}
        >
            {children || "Fale com um Consultor"}
            {showIcon && (
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            )}
        </a>
    );
};

export default ConsultorButton;

