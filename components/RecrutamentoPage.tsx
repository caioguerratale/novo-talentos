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

// Icons
const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg 
        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// Ícones SVG para tipos de profissionais
const profissionaisIcons = {
    executivos: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
    ),
    gerentes: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
    ),
    ti: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
    ),
    administrativos: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
    ),
    tecnicos: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
    ),
    operacionais: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
    ),
};

// Tipos de profissionais que recrutamos
const tiposProfissionais = [
    { nome: 'Executivos e Diretores', icon: profissionaisIcons.executivos, cor: 'from-slate-500 to-gray-600' },
    { nome: 'Gerentes e Supervisores', icon: profissionaisIcons.gerentes, cor: 'from-blue-500 to-indigo-600' },
    { nome: 'Profissionais de TI', icon: profissionaisIcons.ti, cor: 'from-indigo-500 to-purple-600' },
    { nome: 'Administrativos', icon: profissionaisIcons.administrativos, cor: 'from-sky-500 to-blue-600' },
    { nome: 'Técnicos', icon: profissionaisIcons.tecnicos, cor: 'from-emerald-500 to-teal-600' },
    { nome: 'Operacionais', icon: profissionaisIcons.operacionais, cor: 'from-amber-500 to-orange-600' },
];

// Dados do carrossel de benefícios
const carouselSlides = [
    {
        numero: '01',
        titulo: 'Consultoria para Perfis',
        subtitulo: 'Definição estratégica de vagas',
        descricao: 'Trabalhamos junto com você para definir os perfis ideais, condições das ofertas e prazos de contratação, garantindo alinhamento com a cultura da empresa.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        numero: '02',
        titulo: 'Ampla Base de Currículos',
        subtitulo: 'Acesso aos melhores talentos',
        descricao: 'Utilizamos os melhores canais de divulgação e nossa ampla base de currículos para atrair candidatos qualificados para sua vaga.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        numero: '03',
        titulo: 'Processo Ágil',
        subtitulo: 'Velocidade sem perder qualidade',
        descricao: 'Nosso processo é otimizado para entregar candidatos qualificados no menor tempo possível, sem abrir mão da qualidade na seleção.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        numero: '04',
        titulo: 'Metodologia Eficaz',
        subtitulo: 'Técnicas modernas de seleção',
        descricao: 'Aplicamos entrevistas por competências, dinâmicas de grupo e provas de conhecimento para garantir a melhor escolha para sua empresa.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        numero: '05',
        titulo: 'Alta Satisfação',
        subtitulo: '99,78% de aprovação',
        descricao: 'Nosso índice de satisfação com as contratações é de 99,78%, resultado de um processo cuidadoso e alinhado às necessidades dos clientes.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
    },
    {
        numero: '06',
        titulo: 'Relatório Completo',
        subtitulo: 'Transparência total',
        descricao: 'Ao final do processo, entregamos um relatório completo com dados importantes sobre o recrutamento realizado e feedback dos candidatos.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
];

// FAQ
const faqItems = [
    {
        pergunta: 'Por que terceirizar o recrutamento e seleção?',
        resposta: 'Ao terceirizar, você economiza tempo do RH, ganha agilidade no processo, utiliza novos canais de recrutamento, conta com especialistas, se beneficia de metodologias modernas e reduz a taxa de turnover com contratações mais alinhadas à cultura da empresa.',
    },
    {
        pergunta: 'Quais são as atividades da consultoria em recrutamento e seleção?',
        resposta: 'As atividades incluem: definição da necessidade junto ao cliente, divulgação das vagas, recepção e análise de currículos, validação por telefone, atividades de seleção (entrevistas, dinâmicas, provas), contratação com onboarding, e emissão de relatório final.',
    },
    {
        pergunta: 'Como terceirizar o recrutamento e seleção com a Talentos?',
        resposta: 'O primeiro passo é entrar em contato conosco através do formulário ou por telefone. Nos primeiros contatos, compreendemos sua demanda para gerar uma proposta. Sendo aceita, assinamos contrato e iniciamos as atividades de consultoria.',
    },
    {
        pergunta: 'A Talentos Consultoria atende pequenas empresas?',
        resposta: 'Sim! Oferecemos serviço de recrutamento e seleção para empresas de todos os portes: pequenas, médias e grandes. Nossa equipe está preparada para atender às necessidades específicas de cada cliente.',
    },
];

// Componente FAQ Accordion
const FAQItem: React.FC<{ item: typeof faqItems[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200 last:border-0">
        <button
            onClick={onClick}
            className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
        >
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
                        Benefícios do Recrutamento
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Conheça as vantagens de recrutar com a Talentos Consultoria
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

// Componente principal
const RecrutamentoPage: React.FC = () => {
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
            {/* HERO SECTION */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                {/* Background com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-800 to-red-900">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    {/* Padrão de pontos */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20 animate-fade-in-up">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Consultoria especializada em R&S
                        </span>
                        
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
                            Recrutamento e<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                Seleção
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
                            Contrate novos talentos com <strong className="text-white">qualidade e agilidade</strong>. Somos referência em consultoria de recrutamento e seleção no Brasil.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up animation-delay-600">
                            <ConsultorButton variant="light" />
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 animate-fade-in-up animation-delay-800">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+8.300</div>
                                <div className="text-white/60 text-sm">Contratações realizadas</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">99,78%</div>
                                <div className="text-white/60 text-sm">De satisfação</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+20</div>
                                <div className="text-white/60 text-sm">Anos de experiência</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
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
                            Nossos clientes enfrentavam esses desafios antes de contratar nosso R&S
                        </p>
                        </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
                        {/* Dor 1 */}
                        <AnimatedSection delay={0.1}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Processos demorados</h3>
                                <p className="text-gray-600 text-sm mb-4">"Nossos processos seletivos demoram muito e perdemos bons candidatos."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Processo ágil e eficiente
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 2 */}
                        <AnimatedSection delay={0.15}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Contratações erradas</h3>
                                <p className="text-gray-600 text-sm mb-4">"Contratamos pessoas que não se adaptam à cultura da empresa."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    99,78% de satisfação
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 3 */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Poucos candidatos qualificados</h3>
                                <p className="text-gray-600 text-sm mb-4">"Não conseguimos atrair candidatos com o perfil que precisamos."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Ampla base de currículos
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 4 */}
                        <AnimatedSection delay={0.25}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Alta rotatividade</h3>
                                <p className="text-gray-600 text-sm mb-4">"Os novos funcionários não ficam muito tempo na empresa."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Seleção alinhada à cultura
                                </div>
                            </div>
                        </AnimatedSection>
                        
                        {/* Dor 5 */}
                        <AnimatedSection delay={0.3}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">RH sobrecarregado</h3>
                                <p className="text-gray-600 text-sm mb-4">"Nossa equipe de RH não tem tempo para fazer seleções adequadas."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Equipe dedicada ao seu projeto
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 6 */}
                        <AnimatedSection delay={0.35}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Falta de metodologia</h3>
                                <p className="text-gray-600 text-sm mb-4">"Não temos processos estruturados para avaliar candidatos."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                    Metodologia comprovada
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* PROFISSIONAIS QUE RECRUTAMOS */}
            <section className="py-12 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            RECRUTAMOS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Quais Profissionais Você Precisa Contratar?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Recrutamos e selecionamos profissionais para todos os níveis hierárquicos
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                        {tiposProfissionais.map((prof, index) => (
                            <AnimatedSection key={prof.nome} delay={0.05 * index}>
                                <div 
                                    className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative p-6 text-center">
                                        <div className="mb-3 group-hover:scale-110 transition-transform duration-300 text-gray-600 group-hover:text-white flex justify-center">{prof.icon}</div>
                                        <h3 className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                                            {prof.nome}
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
                                Tire suas dúvidas sobre recrutamento e seleção
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                {faqItems.map((item, index) => (
                                    <FAQItem 
                                        key={index}
                                        item={item}
                                        isOpen={openFaq === index}
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    />
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
                                Solicite uma Proposta de Recrutamento e Seleção
                            </h2>
                        </AnimatedSection>
                        <AnimatedSection delay={0.15}>
                            <p className="text-xl text-white/80 mb-10 leading-relaxed">
                                Quer saber como a gente poderia ajudar a sua empresa? Entre em contato com nossos consultores especializados.
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
                            Além do recrutamento e seleção, oferecemos um portfólio completo de soluções em Recursos Humanos para sua empresa.
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

export default RecrutamentoPage;
