import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConsultorButton from './ConsultorButton';

// Hook for scroll animations
const useScrollAnimation = () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (!ref) return;
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref]);
    return { setRef, isVisible };
};

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
    const { setRef, isVisible } = useScrollAnimation();
    return (<div ref={setRef} className={`scroll-animate ${isVisible ? 'animate-in' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>{children}</div>);
};

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// Ícones SVG para o programa
const programaIcons = {
    aconselhamento: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    ),
    curriculo: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
    ),
    treinamento: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
    ),
    networking: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
    ),
    mapeamento: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
    ),
    suporte: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    ),
};

// O que o programa inclui (cards)
const programaInclui = [
    { titulo: 'Aconselhamento de Carreira', icon: programaIcons.aconselhamento, cor: 'from-red-500 to-red-600' },
    { titulo: 'Currículo Profissional', icon: programaIcons.curriculo, cor: 'from-blue-500 to-indigo-600' },
    { titulo: 'Treinamento para Entrevistas', icon: programaIcons.treinamento, cor: 'from-amber-500 to-orange-600' },
    { titulo: 'Networking', icon: programaIcons.networking, cor: 'from-emerald-500 to-teal-600' },
    { titulo: 'Mapeamento de Mercado', icon: programaIcons.mapeamento, cor: 'from-purple-500 to-violet-600' },
    { titulo: 'Suporte Emocional', icon: programaIcons.suporte, cor: 'from-rose-500 to-pink-600' },
];

// Dados do carrossel de benefícios
const carouselSlides = [
    {
        numero: '01',
        titulo: 'Imagem da Empresa',
        subtitulo: 'Reputação no mercado',
        descricao: 'Melhore a imagem da sua empresa no mercado ao demonstrar cuidado e responsabilidade com os profissionais desligados.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        numero: '02',
        titulo: 'Clima Organizacional',
        subtitulo: 'Equipe preservada',
        descricao: 'Preserve o clima entre os colaboradores remanescentes, evitando insegurança e desmotivação após demissões.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        numero: '03',
        titulo: 'Riscos Trabalhistas',
        subtitulo: 'Proteção jurídica',
        descricao: 'Reduza significativamente os riscos de processos trabalhistas com um processo de demissão humanizado e bem estruturado.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        numero: '04',
        titulo: 'Recolocação Acelerada',
        subtitulo: 'Para o profissional',
        descricao: 'Acelere a recolocação do profissional no mercado com orientação especializada e suporte completo.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        numero: '05',
        titulo: 'Crescimento Pessoal',
        subtitulo: 'Oportunidade de reflexão',
        descricao: 'Transforme a experiência da demissão em uma oportunidade de reflexão, crescimento e redirecionamento de carreira.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
    {
        numero: '06',
        titulo: 'Suporte Emocional',
        subtitulo: 'Humanização do processo',
        descricao: 'Ofereça suporte emocional durante todo o período de transição, humanizando o processo de demissão.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
];

// FAQ
const faqItems = [
    {
        pergunta: 'O que é Outplacement?',
        resposta: 'Outplacement é o programa de Recursos Humanos que objetiva amenizar o impacto das demissões e facilitar a transição de carreira dos profissionais desligados. É um serviço oferecido pela empresa aos colaboradores que estão sendo desligados.',
    },
    {
        pergunta: 'Quais são os benefícios para a empresa?',
        resposta: 'Para a empresa, o Outplacement melhora a imagem no mercado, preserva o clima organizacional entre colaboradores remanescentes, reduz riscos de processos trabalhistas e demonstra responsabilidade social com os profissionais.',
    },
    {
        pergunta: 'Como funciona o programa?',
        resposta: 'O programa inclui: aconselhamento e planejamento de carreira, elaboração de currículo e perfil profissional, treinamento para entrevistas e networking, mapeamento de oportunidades de mercado e suporte emocional durante toda a transição.',
    },
    {
        pergunta: 'Quanto tempo dura o programa de Outplacement?',
        resposta: 'A duração varia conforme as necessidades do profissional e o pacote contratado pela empresa. O programa pode durar de algumas semanas a vários meses, até que o profissional seja recolocado no mercado.',
    },
];

const FAQItem: React.FC<{ item: typeof faqItems[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200 last:border-0">
        <button onClick={onClick} className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200">
            <span className="font-semibold text-gray-800 pr-4">{item.pergunta}</span>
            <ChevronDownIcon isOpen={isOpen} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
            <p className="px-6 text-gray-600 leading-relaxed">{item.resposta}</p>
        </div>
    </div>
);

// Componente Carrossel de Benefícios
const BeneficiosCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
        setIsAutoPlaying(false);
    };

    const slide = carouselSlides[currentSlide];

    return (
        <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                        O QUE OFERECEMOS
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Benefícios do Outplacement
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Vantagens para a empresa e para o profissional
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="max-w-5xl mx-auto">
                    {/* Main Card - Altura fixa */}
                    <div 
                        className={`bg-gradient-to-br ${slide.cor} rounded-3xl p-6 lg:p-8 xl:p-12 h-[350px] md:h-[300px] lg:h-[280px] flex flex-col transition-colors duration-500 shadow-2xl`}
                    >
                        {/* Top Row */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                                {slide.icon}
                            </div>
                            <div>
                                <span className="text-white/60 text-sm font-medium">Benefício</span>
                                <div className="text-white text-3xl md:text-4xl font-black">{slide.numero}</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                                {slide.titulo}
                            </h3>
                            <p className="text-white/80 text-base md:text-lg mb-3">
                                {slide.subtitulo}
                            </p>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
                                {slide.descricao}
                            </p>
                        </div>
                    </div>

                    {/* Navigation - Fixo abaixo do card */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        {/* Prev Arrow */}
                        <button 
                            onClick={prevSlide}
                            className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2 items-center">
                            {carouselSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === currentSlide 
                                            ? 'w-8 bg-red-600' 
                                            : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Next Arrow */}
                        <button 
                            onClick={nextSlide}
                            className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const OutplacementPage: React.FC = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const scrollToServices = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('servicos');
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-800 to-red-900">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20 animate-fade-in-up">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Transição de carreira
                        </span>
                        
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                Outplacement
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
                            Programa de <strong className="text-white">transição de carreira</strong> que humaniza o processo de demissão e oferece suporte aos profissionais desligados.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up animation-delay-600">
                            <ConsultorButton variant="light" />
                        </div>

                        <div className="flex flex-wrap gap-8 animate-fade-in-up animation-delay-800">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+20</div>
                                <div className="text-white/60 text-sm">Anos de experiência</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">6</div>
                                <div className="text-white/60 text-sm">Etapas do programa</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">100%</div>
                                <div className="text-white/60 text-sm">Humanizado</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
            </section>

            {/* DORES DOS CLIENTES */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            PROBLEMAS QUE RESOLVEMOS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Você se identifica com algum desses problemas?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Empresas enfrentam esses desafios ao demitir funcionários sem suporte
                        </p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
                        {/* Dor 1 */}
                        <AnimatedSection delay={0.1}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Imagem da empresa afetada</h3>
                                <p className="text-gray-600 text-sm mb-4">"Demissões mal conduzidas prejudicam nossa reputação no mercado."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Processo humanizado e respeitoso
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 2 */}
                        <AnimatedSection delay={0.15}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Clima organizacional abalado</h3>
                                <p className="text-gray-600 text-sm mb-4">"Após demissões, os funcionários que ficam ficam inseguros e desmotivados."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Preserva o clima da equipe
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 3 */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Risco de processos trabalhistas</h3>
                                <p className="text-gray-600 text-sm mb-4">"Temos receio de ações judiciais por ex-funcionários insatisfeitos."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Reduz riscos legais
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 4 */}
                        <AnimatedSection delay={0.25}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Sentimento de culpa</h3>
                                <p className="text-gray-600 text-sm mb-4">"Nos sentimos mal por deixar o funcionário sem apoio nenhum."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Demonstra responsabilidade social
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 5 */}
                        <AnimatedSection delay={0.3}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Ex-funcionários falam mal</h3>
                                <p className="text-gray-600 text-sm mb-4">"Ex-colaboradores falam mal da empresa nas redes sociais."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Relação positiva pós-saída
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 6 */}
                        <AnimatedSection delay={0.35}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Processo desumanizado</h3>
                                <p className="text-gray-600 text-sm mb-4">"Não sabemos como conduzir uma demissão de forma adequada."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Suporte completo ao profissional
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* O QUE O PROGRAMA INCLUI */}
            <section className="py-12 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            PROGRAMA
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            O Que o Programa Inclui?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Suporte completo para a transição de carreira do profissional
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                        {programaInclui.map((item, index) => (
                            <AnimatedSection key={item.titulo} delay={0.05 * index}>
                                <div 
                                    className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative p-6 text-center">
                                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                        <h3 className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                                            {item.titulo}
                                        </h3>
                                    </div>
                            </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection delay={0.4} className="text-center mt-12">
                        <Link 
                            to="/#servicos"
                            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-4 px-10 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Ver Todos os Serviços
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* BENEFÍCIOS - CARROSSEL */}
            <BeneficiosCarousel />

            {/* ETAPAS DO PROJETO */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            METODOLOGIA
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Etapas do Programa de Outplacement
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Conheça as fases do nosso programa de recolocação profissional
                        </p>
                    </AnimatedSection>

                    <div className="max-w-5xl mx-auto">
                        {/* Timeline horizontal para desktop */}
                        <div className="hidden md:block relative">
                            {/* Linha conectora */}
                            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full" />
                            
                            <div className="grid grid-cols-6 gap-4 relative">
                                {/* Fase 1 */}
                                <AnimatedSection delay={0.1} className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg z-10 mb-4">
                                        <span className="text-xl font-black text-amber-500">01</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Planejamento</h3>
                                    <p className="text-gray-600 text-sm text-center leading-relaxed">Análise do perfil profissional e definição de objetivos.</p>
                                </AnimatedSection>

                                {/* Fase 2 */}
                                <AnimatedSection delay={0.15} className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg z-10 mb-4">
                                        <span className="text-xl font-black text-amber-500">02</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Estratégia</h3>
                                    <p className="text-gray-600 text-sm text-center leading-relaxed">Identificação de mercados-alvo e posicionamento.</p>
                                </AnimatedSection>

                                {/* Fase 3 */}
                                <AnimatedSection delay={0.2} className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg z-10 mb-4">
                                        <span className="text-xl font-black text-amber-500">03</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Currículo</h3>
                                    <p className="text-gray-600 text-sm text-center leading-relaxed">Elaboração de currículo e perfil no LinkedIn.</p>
                                </AnimatedSection>

                                {/* Fase 4 */}
                                <AnimatedSection delay={0.25} className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg z-10 mb-4">
                                        <span className="text-xl font-black text-amber-500">04</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Capacitação</h3>
                                    <p className="text-gray-600 text-sm text-center leading-relaxed">Treinamento para entrevistas e negociação.</p>
                                </AnimatedSection>

                                {/* Fase 5 */}
                                <AnimatedSection delay={0.3} className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg z-10 mb-4">
                                        <span className="text-xl font-black text-amber-500">05</span>
                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Divulgação</h3>
                                    <p className="text-gray-600 text-sm text-center leading-relaxed">Networking ativo e acesso a oportunidades.</p>
                                </AnimatedSection>

                                {/* Fase 6 */}
                                <AnimatedSection delay={0.35} className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg z-10 mb-4">
                                        <span className="text-xl font-black text-amber-500">06</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Acompanhamento</h3>
                                    <p className="text-gray-600 text-sm text-center leading-relaxed">Suporte até a recolocação efetiva.</p>
                                </AnimatedSection>
                            </div>
                        </div>

                        {/* Layout vertical para mobile */}
                        <div className="md:hidden space-y-6">
                            {/* Fase 1 */}
                            <AnimatedSection delay={0.1}>
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                        <span className="text-lg font-black text-amber-500">01</span>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Planejamento</h3>
                                        <p className="text-gray-600 text-sm">Análise do perfil profissional, definição de objetivos e planejamento da carreira.</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Fase 2 */}
                            <AnimatedSection delay={0.15}>
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                        <span className="text-lg font-black text-amber-500">02</span>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Estratégia</h3>
                                        <p className="text-gray-600 text-sm">Definição de estratégias de busca, identificação de mercados-alvo e posicionamento.</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Fase 3 */}
                            <AnimatedSection delay={0.2}>
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                        <span className="text-lg font-black text-amber-500">03</span>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Currículo</h3>
                                        <p className="text-gray-600 text-sm">Elaboração de currículo profissional e perfil em redes como LinkedIn.</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Fase 4 */}
                            <AnimatedSection delay={0.25}>
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                        <span className="text-lg font-black text-amber-500">04</span>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Capacitação</h3>
                                        <p className="text-gray-600 text-sm">Treinamento para entrevistas, técnicas de negociação e desenvolvimento de competências.</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Fase 5 */}
                            <AnimatedSection delay={0.3}>
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                        <span className="text-lg font-black text-amber-500">05</span>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Divulgação</h3>
                                        <p className="text-gray-600 text-sm">Divulgação do perfil no mercado, networking ativo e acesso a oportunidades.</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Fase 6 */}
                            <AnimatedSection delay={0.35}>
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                        <span className="text-lg font-black text-amber-500">06</span>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Acompanhamento</h3>
                                        <p className="text-gray-600 text-sm">Suporte contínuo durante todo o processo até a recolocação efetiva.</p>
                                    </div>
                            </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-12 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <AnimatedSection className="text-center mb-12">
                            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Perguntas Frequentes
                            </h2>
                            <p className="text-lg text-gray-600">
                                Tire suas dúvidas sobre Outplacement
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            {faqItems.map((item, index) => (
                                <FAQItem key={index} item={item} isOpen={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)} />
                            ))}
                        </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA - FALE COM UM CONSULTOR */}
            <section id="solicitar-proposta" className="py-20 bg-gradient-to-br from-red-700 via-red-800 to-red-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Saiba Mais Sobre Outplacement
                            </h2>
                        </AnimatedSection>
                        <AnimatedSection delay={0.15}>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            Ofereça um processo de demissão humanizado e cuide da imagem da sua empresa.
                        </p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.3}>
                            <div className="flex justify-center">
                            <ConsultorButton variant="cta" />
                        </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Conheça todos os nossos serviços de RH
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1}>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Oferecemos um portfólio completo de soluções em Recursos Humanos para sua empresa.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <button 
                            onClick={scrollToServices}
                            className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-red-700 transition-all duration-300"
                        >
                        Ver Todos os Serviços
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                    </button>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default OutplacementPage;
