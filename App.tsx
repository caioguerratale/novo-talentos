import React, { useEffect, useState } from 'react';
// Fix: Aliased HashRouter to Router to prevent a potential name collision.
import { HashRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import TerceirizacaoPage from './components/TerceirizacaoPage';
import RecrutamentoPage from './components/RecrutamentoPage';
import ConsultorButton from './components/ConsultorButton';
import EstruturacaoRHPage from './components/EstruturacaoRHPage';
import MapeamentoCargosPage from './components/MapeamentoCargosPage';
import CargosSalariosPage from './components/CargosSalariosPage';
import PesquisaClimaPage from './components/PesquisaClimaPage';
import OutplacementPage from './components/OutplacementPage';
import ProjetosCustomizadosPage from './components/ProjetosCustomizadosPage';
import ConsultoriaRHPage from './components/ConsultoriaRHPage';
import { services, aboutUsText, contactInfo, whatsappLink, clients, blogArticles, testimonials, historyTimeline } from './constants';
import { Service } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Hook for scroll animations
const useScrollAnimation = () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref]);

    return { setRef, isVisible };
};

// Animated Section Component
interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
    delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
    children, 
    className = '', 
    animation = 'fade-up',
    delay = 0 
}) => {
    const { setRef, isVisible } = useScrollAnimation();
    
    const animationClasses = {
        'fade-up': 'scroll-animate',
        'fade-left': 'scroll-animate-left',
        'fade-right': 'scroll-animate-right',
        'scale': 'scroll-animate-scale'
    };
    
    return (
        <div 
            ref={setRef}
            className={`${animationClasses[animation]} ${isVisible ? 'animate-in' : ''} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

// Animated Element for individual items
interface AnimatedElementProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className = '', delay = 0 }) => {
    const { setRef, isVisible } = useScrollAnimation();
    
    return (
        <div 
            ref={setRef}
            className={`scroll-animate ${isVisible ? 'animate-in' : ''} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

// Timeline Item Component with animations
const TimelineItem: React.FC<{ 
    item: typeof historyTimeline[0]; 
    index: number;
}> = ({ item, index }) => {
    const { setRef, isVisible } = useScrollAnimation();
    const isLeft = item.imagePosition === 'left';
    
    return (
        <div 
            ref={setRef}
            className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center mb-16 lg:mb-24`}
        >
            {/* Image */}
            <div 
                className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
                    isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
            >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                        src={item.imageUrl} 
                        alt={`História ${item.id}`}
                        className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
            
            {/* Content */}
            <div 
                className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
                    isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                    {item.content}
                </div>
            </div>
        </div>
    );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col border-t-4 border-orange-500 h-full">
        <div className="p-6 flex flex-col flex-grow items-center text-center">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm flex-grow">{service.shortDescription}</p>
            <Link to={`/servicos/${service.slug}`} className="mt-4 text-red-600 hover:text-red-800 font-semibold self-center text-sm">
                Saiba mais &rarr;
            </Link>
        </div>
    </div>
);

const BlogArticleCard: React.FC<{ article: typeof blogArticles[0] }> = ({ article }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="overflow-hidden">
             <img src={article.imageUrl} alt={article.title} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"/>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{article.title}</h3>
            <p className="text-gray-600 flex-grow mb-4 text-sm leading-relaxed">{article.excerpt}</p>
            <a href={article.url} className="text-red-600 hover:text-red-800 font-semibold self-start mt-auto group-hover:text-orange-500 transition-colors duration-300">
                Leia mais <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
        </div>
    </div>
);


// Hero Image Card Component
const HeroImageCard: React.FC<{ imageUrl: string; className?: string }> = ({ imageUrl, className = '' }) => (
    <div className={`rounded-3xl overflow-hidden bg-gray-200 shadow-lg ${className}`}>
        <img src={imageUrl} alt="" className="w-full h-full object-cover" />
    </div>
);

// Client Card Component for grid display
const ClientCard: React.FC<{ client: typeof clients[0] }> = ({ client }) => (
    <div className="bg-gray-200 rounded-3xl p-8 flex items-center justify-center aspect-[4/3] hover:bg-gray-300 transition-colors duration-300 hover:shadow-md flex-shrink-0 w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
        <img 
            src={client.logoUrl} 
            alt={client.name} 
            className="max-h-14 max-w-[80%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
        />
    </div>
);

// Clients Carousel Component - Responsive
const ClientsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);
    
    // Adjust visible count based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(2); // Mobile: 2 logos
            } else if (window.innerWidth < 1024) {
                setVisibleCount(3); // Tablet: 3 logos
            } else {
                setVisibleCount(4); // Desktop: 4 logos
            }
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const maxIndex = Math.max(0, clients.length - visibleCount);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [maxIndex]);
    
    // Reset index if it becomes invalid after resize
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(0);
        }
    }, [maxIndex, currentIndex]);

    return (
        <div className="overflow-hidden">
            <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
                {clients.map((client, index) => (
                    <div 
                        key={`${client.name}-${index}`}
                        className={`flex items-center justify-center h-16 sm:h-20 lg:h-24 flex-shrink-0 px-2 sm:px-4 ${
                            visibleCount === 2 ? 'w-1/2' : visibleCount === 3 ? 'w-1/3' : 'w-1/4'
                        }`}
                    >
                        <img 
                            src={client.logoUrl} 
                            alt={client.name} 
                            className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === currentIndex ? 'bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Ir para posição ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

// Services Slider Component
const ServicesSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = services[activeIndex];
    const { setRef, isVisible } = useScrollAnimation();

    return (
        <section id="servicos" className="py-8 bg-gray-900 min-h-[calc(100vh-80px)] flex flex-col justify-between">
            <div ref={setRef} className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col">
                {/* Tabs Navigation - Scrollable on mobile */}
                <div className={`overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 mb-6 border-b border-white/20 pb-3 scroll-animate ${isVisible ? 'animate-in' : ''}`}>
                    <div className="flex justify-start sm:justify-center gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveIndex(index)}
                                className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-300 whitespace-nowrap ${
                                    activeIndex === index
                                        ? 'bg-white text-gray-900'
                                        : 'text-white/70 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className={`grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto flex-grow scroll-animate ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.2s' }}>
                    {/* Left - Text Content */}
                    <div key={activeService.id} className="order-2 lg:order-1 animate-fade-in-content">
                        {/* Icon */}
                        <div className="mb-4 text-white">
                            {React.cloneElement(activeService.icon as React.ReactElement, { className: 'w-12 h-12' })}
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            {activeService.title}
                        </h2>

                        {/* Description */}
                        <p className="text-white/80 text-base leading-relaxed mb-4">
                            {activeService.shortDescription}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                                <span className="text-white text-sm">Soluções personalizadas para sua empresa</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                                <span className="text-white text-sm">Equipe especializada com mais de 20 anos de experiência</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                                <span className="text-white text-sm">Resultados comprovados em empresas de diversos segmentos</span>
                            </li>
                        </ul>

                        {/* CTA Link */}
                        <Link
                            to={`/servicos/${activeService.slug}`}
                            className="inline-flex items-center text-white italic underline underline-offset-4 hover:text-white/80 transition-all duration-300 text-sm"
                        >
                            Saiba Mais
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right - Visual Element */}
                    <div key={`circle-${activeService.id}`} className="order-1 lg:order-2 flex justify-center items-center py-4 lg:py-0 animate-fade-in-content">
                        <div className="relative animate-float">
                            {/* Main circle with icon */}
                            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 bg-orange-600 rounded-full flex items-center justify-center border-2 border-orange-400 shadow-2xl shadow-orange-500/30">
                                <div className="text-white">
                                    {React.cloneElement(activeService.icon as React.ReactElement, { className: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28' })}
                                </div>
                            </div>
                            
                            {/* Decorative circles - Hidden on very small screens */}
                            <div className="hidden sm:block absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-600 rounded-full border-2 border-orange-400 animate-pulse-slow"></div>
                            <div className="hidden sm:block absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-orange-600 rounded-full border-2 border-orange-400 animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                            <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-8 bg-orange-600 rounded-full border-2 border-orange-400 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                            <div className="hidden md:block absolute -top-6 left-1/3 w-6 h-6 bg-orange-600 rounded-full border-2 border-orange-400 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
                        </div>
                    </div>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-6">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                activeIndex === index ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                            }`}
                            aria-label={`Ir para serviço ${index + 1}`}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-6 pb-4">
                    <ConsultorButton variant="dark">Falar com um Consultor</ConsultorButton>
                </div>
            </div>
        </section>
    );
};

// Blog Card for new layout
const BlogGridCard: React.FC<{ article: typeof blogArticles[0] }> = ({ article }) => (
    <a 
        href={article.url}
        className="group bg-gray-100 rounded-3xl overflow-hidden aspect-square flex items-end relative hover:shadow-lg transition-all duration-300"
    >
        <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="relative p-5 w-full">
            <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2">
                {article.title}
            </h3>
        </div>
    </a>
);

// Page Components
const HomePage: React.FC = () => (
    <>
        {/* Hero Section - Gradient Background - Full Screen */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-red-800 via-red-900 to-gray-900 py-8 sm:py-12 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
            
            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Tag */}
                    <span className="inline-block bg-white/20 text-white uppercase tracking-widest text-[10px] sm:text-xs md:text-sm font-semibold py-2 px-4 sm:px-6 rounded-full mb-6 sm:mb-8 backdrop-blur-sm animate-fade-in-up">
                        Consultoria de Alta Performance
                    </span>
                    
                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white mb-4 sm:mb-6 uppercase tracking-tight animate-fade-in-up animation-delay-200">
                        Transforme <span className="text-white">Pessoas</span>
                        <br />
                        em Resultados Reais.
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2 animate-fade-in-up animation-delay-400">
                        Alinhamos cultura, liderança e gestão para construir times que não apenas trabalham, mas entregam lucro e crescimento para o seu negócio.
                    </p>
                    
                    {/* Buttons - Stack on mobile */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 animate-fade-in-up animation-delay-600">
                        <ConsultorButton variant="hero" showIcon={false}>Falar com um Consultor</ConsultorButton>
                        <button 
                            onClick={() => {
                                const element = document.getElementById('servicos');
                                if (element) {
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset;
                                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                }
                            }}
                            className="inline-block bg-orange-500 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-sm sm:text-base w-full sm:w-auto text-center"
                        >
                            Conhecer Soluções
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
                <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>

        {/* Clientes Section - Carousel with rounded cards */}
        <section className="py-16 bg-white clients-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection animation="fade-up">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-gray-800">Alguns Clientes</h3>
                    </div>
                </AnimatedSection>
                <AnimatedSection animation="scale" delay={0.2}>
                    <div className="max-w-5xl mx-auto bg-white rounded-xl py-6 px-4 clients-logos-container">
                        <ClientsCarousel />
                    </div>
                </AnimatedSection>
            </div>
        </section>

        {/* Services Section - Slider */}
        <ServicesSlider />

        {/* Feedbacks Section */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection animation="fade-up">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">O que nossos clientes dizem</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">A satisfação dos nossos clientes é o nosso maior reconhecimento</p>
                    </div>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <AnimatedSection key={index} animation="scale" delay={0.1 * (index + 1)}>
                            <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col relative">
                                {/* Quote icon */}
                                <svg className="w-10 h-10 text-red-100 absolute top-6 right-6" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M9.33 8.21C7.58 9.96 6.67 12.15 6.67 14.67c0 4.14 3.36 7.5 7.5 7.5h.83v-5h-.83c-1.38 0-2.5-1.12-2.5-2.5 0-.69.28-1.32.73-1.77L15.67 4H9.33v4.21zM22.33 8.21C20.58 9.96 19.67 12.15 19.67 14.67c0 4.14 3.36 7.5 7.5 7.5h.83v-5h-.83c-1.38 0-2.5-1.12-2.5-2.5 0-.69.28-1.32.73-1.77L28.67 4H22.33v4.21z" />
                                </svg>
                                
                                {/* Photo */}
                                <div className="flex justify-center mb-6">
                                    <img 
                                        src={testimonial.imageUrl} 
                                        alt={testimonial.name} 
                                        className="w-20 h-20 rounded-full object-cover ring-4 ring-red-100"
                                    />
                                </div>
                                
                                {/* Quote */}
                                <blockquote className="text-gray-600 text-center italic mb-6 flex-grow leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                                
                                {/* Author */}
                                <div className="text-center mt-auto pt-4 border-t border-gray-100">
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-red-600">{testimonial.title}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection animation="fade-up">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl font-bold text-gray-800">Blog</h2>
                    </div>
                    <div className="text-center mb-10">
                        <p className="text-gray-600">Últimas Postagens</p>
                    </div>
                </AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {blogArticles.map((article, index) => (
                        <AnimatedSection key={article.title} animation="scale" delay={0.1 * (index + 1)}>
                            <BlogGridCard article={article} />
                        </AnimatedSection>
                    ))}
                </div>
                <AnimatedSection animation="fade-up" delay={0.4}>
                    <div className="text-center mt-10">
                        <a 
                            href="#" 
                            className="inline-block text-red-600 font-semibold hover:text-red-700 transition-colors duration-300"
                        >
                            Ver todos os artigos →
                        </a>
                    </div>
                </AnimatedSection>
                <AnimatedSection animation="scale" delay={0.5}>
                    <div className="text-center mt-12">
                        <a 
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-4 px-10 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Fale com o Consultor
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    </>
);

const AboutPage: React.FC = () => (
    <>
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <img src="https://talentosconsultoria.com.br/wp-content/uploads/2020/01/consultores-talentos-768x322.jpg" alt="Equipe da Talentos Consultoria" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{aboutUsText.title}</h1>
                        <div className="prose lg:prose-xl max-w-none">
                            {aboutUsText.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Nossa História Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Nossa História</h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                </div>
                <div className="max-w-5xl mx-auto">
                    {historyTimeline.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>

        <section className="bg-gray-50 py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">O Que Nossos Clientes Dizem</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">A satisfação dos nossos clientes é o nosso maior ativo e o que nos impulsiona a sermos melhores a cada dia.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                            <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mb-6 object-cover ring-4 ring-orange-200" />
                            <blockquote className="text-gray-600 italic mb-6 relative">
                                <svg className="w-8 h-8 text-orange-100 absolute top-0 left-0 -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M9.33 8.21C7.58 9.96 6.67 12.15 6.67 14.67c0 4.14 3.36 7.5 7.5 7.5h.83v-5h-.83c-1.38 0-2.5-1.12-2.5-2.5 0-.69.28-1.32.73-1.77L15.67 4H9.33v4.21zM22.33 8.21C20.58 9.96 19.67 12.15 19.67 14.67c0 4.14 3.36 7.5 7.5 7.5h.83v-5h-.83c-1.38 0-2.5-1.12-2.5-2.5 0-.69.28-1.32.73-1.77L28.67 4H22.33v4.21z" />
                                </svg>
                                <p className="z-10 relative">"{testimonial.quote}"</p>
                            </blockquote>
                            <cite className="not-italic">
                                <p className="font-bold text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.title}</p>
                            </cite>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800">Nossos Clientes</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Temos a honra de colaborar com empresas de diversos segmentos, construindo parcerias de sucesso.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 items-center">
                    {clients.map(client => (
                        <div key={client.name} className="flex justify-center">
                            <img src={client.logoUrl} alt={client.name} className="max-h-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transform hover:scale-110 transition-all duration-300" />
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-16">
                     <Link to="/servicos" className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                        Conheça os nossos serviços
                    </Link>
                </div>
            </div>
        </section>
    </>
);

const ServicesListPage: React.FC = () => (
     <div className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900">Nossas Soluções em RH</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Explore nosso portfólio completo de serviços, desenhados para fortalecer a gestão de pessoas e impulsionar os resultados do seu negócio.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    </div>
);

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    
    // Páginas customizadas para cada serviço
    if (slug === 'terceirizacao-de-mao-de-obra') {
        return <TerceirizacaoPage />;
    }
    if (slug === 'recrutamento-e-selecao') {
        return <RecrutamentoPage />;
    }
    if (slug === 'estruturacao-do-rh') {
        return <EstruturacaoRHPage />;
    }
    if (slug === 'mapeamento-e-descricao-de-cargos') {
        return <MapeamentoCargosPage />;
    }
    if (slug === 'cargos-e-salarios') {
        return <CargosSalariosPage />;
    }
    if (slug === 'pesquisa-de-clima-organizacional') {
        return <PesquisaClimaPage />;
    }
    if (slug === 'outplacement') {
        return <OutplacementPage />;
    }
    if (slug === 'projetos-customizados') {
        return <ProjetosCustomizadosPage />;
    }
    if (slug === 'consultoria-de-rh') {
        return <ConsultoriaRHPage />;
    }
    
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold">Serviço não encontrado</h1>
                <Link to="/servicos" className="text-red-600 hover:underline mt-4 inline-block">Voltar para a lista de serviços</Link>
            </div>
        );
    }

    return (
        <>
            <div className="relative h-64 md:h-80 bg-red-800">
                 <img src={service.imageUrl} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
                 <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">{service.title}</h1>
                 </div>
            </div>
            <div className="bg-white py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto prose lg:prose-lg">
                        {service.longDescription}
                    </div>
                </div>
            </div>
        </>
    );
};

const JobsPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<{name: string, email: string, phone: string, cv: File | null}>({ name: '', email: '', phone: '', cv: null });
    const [status, setStatus] = useState('');
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFormData({ ...formData, cv: file });
            setFileName(file.name);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Enviando...');
        // Simulação de envio
        setTimeout(() => {
            console.log('CV Submitted:', formData);
            setStatus('Currículo enviado com sucesso!');
            setFormData({ name: '', email: '', phone: '', cv: null });
            setFileName('');
            setTimeout(() => {
                 setIsModalOpen(false);
                 setStatus('');
            }, 2000);
        }, 1500);
    };
    
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              setIsModalOpen(false);
           }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Oportunidades de Carreira</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Confira as vagas abertas e encontre a oportunidade perfeita para o seu desenvolvimento profissional. Você também pode enviar seu currículo para nosso banco de talentos.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href="https://talentosconsultoria.infojobs.com.br/empregos.aspx" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-all duration-300 text-lg shadow-md transform hover:scale-105"
                        >
                            Ver Vagas na InfoJobs
                        </a>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-all duration-300 text-lg shadow-md transform hover:scale-105"
                        >
                            Enviar Currículo
                        </button>
                    </div>
                 </div>
            </div>

            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
                    onClick={() => setIsModalOpen(false)}
                    aria-modal="true"
                    role="dialog"
                >
                    <div 
                        className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-2xl relative modal-scale-in"
                        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        <button 
                            onClick={() => setIsModalOpen(false)} 
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Fechar modal"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Envie seu Currículo</h2>
                        
                        {status === 'Currículo enviado com sucesso!' ? (
                            <div className="text-center py-8">
                                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <p className="text-lg font-medium text-gray-700">{status}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-left">Nome Completo</label>
                                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 text-left">Telefone</label>
                                        <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">E-mail</label>
                                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="cv-upload-button" className="block text-sm font-medium text-gray-700 mb-1 text-left">Anexar currículo (PDF, DOC, DOCX)</label>
                                        <label id="cv-upload-button" className="relative cursor-pointer bg-white rounded-md border border-gray-300 font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500 flex items-center justify-center px-3 py-2">
                                            <span>{fileName || 'Selecionar arquivo'}</span>
                                            <input id="cv" name="cv" type="file" className="sr-only" required accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                                        </label>
                                        {fileName && <p className="text-xs text-gray-500 mt-1 text-left">Arquivo: {fileName}</p>}
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <button type="submit" disabled={status === 'Enviando...'} className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                        {status === 'Enviando...' ? 'Enviando...' : 'Confirmar Envio'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Enviando...');
        // Simulação de envio
        setTimeout(() => {
            console.log('Form data submitted:', formData);
            setStatus('Mensagem enviada com sucesso!');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1000);
    };

    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">Fale Conosco</h1>
                    <p className="mt-4 text-lg text-gray-600">Tem alguma dúvida ou precisa de uma solução de RH? Entre em contato conosco.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                            <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                                Enviar Mensagem
                            </button>
                        </div>
                        {status && <p className="text-center text-gray-600">{status}</p>}
                    </form>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800">Informações de Contato</h3>
                        <div className="space-y-4 text-gray-600">
                            <p className="flex items-start"><strong className="w-24">Endereço:</strong><span className="whitespace-pre-line">{contactInfo.address}</span></p>
                            <p className="flex items-start"><strong className="w-24">Telefone:</strong><a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="text-red-600 hover:underline">{contactInfo.phone}</a></p>
                            <p className="flex items-start"><strong className="w-24">E-mail:</strong><a href={`mailto:${contactInfo.email}`} className="text-red-600 hover:underline">{contactInfo.email}</a></p>
                        </div>
                        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                           <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.188443729906!2d-43.18122942375836!3d-22.90642923788574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5f3531fe9b%3A0x949c882e334a17de!2sAv.%20Rio%20Branco%2C%20133%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020040-006!5e0!3m2!1spt-BR!2sbr!4v1687448378619!5m2!1spt-BR!2sbr" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PageContainer = () => {
    const location = useLocation();
    return (
        <main className="flex-grow">
            <div key={location.pathname} className="page-fade-in">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sobre" element={<AboutPage />} />
                    <Route path="/servicos" element={<ServicesListPage />} />
                    <Route path="/servicos/:slug" element={<ServiceDetailPage />} />
                    <Route path="/vagas" element={<JobsPage />} />
                    <Route path="/contato" element={<ContactPage />} />
                </Routes>
            </div>
        </main>
    );
};

const WhatsappButton: React.FC = () => (
    <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 448 512" fill="currentColor">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
    </a>
);


const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-white">
                <Header />
                <PageContainer />
                <Footer />
                <WhatsappButton />
            </div>
        </Router>
    );
};

export default App;