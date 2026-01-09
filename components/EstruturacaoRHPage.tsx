import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

// 7 Módulos da Estruturação (cards simples)
const modulosSimples = [
    { nome: 'Recrutamento e Seleção', icon: '🔍', cor: 'from-red-500 to-red-600' },
    { nome: 'Integração e Treinamento', icon: '🎓', cor: 'from-blue-500 to-indigo-600' },
    { nome: 'Acompanhamento e Retenção', icon: '📈', cor: 'from-emerald-500 to-teal-600' },
    { nome: 'Remuneração e Benefícios', icon: '💰', cor: 'from-amber-500 to-orange-600' },
    { nome: 'Motivacional', icon: '🌟', cor: 'from-purple-500 to-violet-600' },
    { nome: 'Controle de Jornada', icon: '⏰', cor: 'from-sky-500 to-blue-600' },
    { nome: 'Desligamento', icon: '📝', cor: 'from-rose-500 to-pink-600' },
];

// 7 Módulos detalhados para o slider
const modulosDetalhados = [
    {
        numero: 1,
        titulo: 'Recrutamento e Seleção',
        icon: '🔍',
        descricao: 'Estruturamos todo o processo de atração e seleção de talentos, desde a definição de perfis até a gestão de resultados.',
        itens: [
            'Definição de perfil socioeconômico para cada cargo/função',
            'Formação do "Banco de Talentos"',
            'Construção de material para "Venda da Vaga"',
            'Identificação dos melhores meios para divulgação',
            'Fluxo de Seleção estruturado',
            'Exames médicos personalizados para cada vaga',
            'Gestão sobre os resultados estatísticos',
        ],
        imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/recrutamento-e-selecao-1.jpg',
    },
    {
        numero: 2,
        titulo: 'Integração e Treinamento',
        icon: '🎓',
        descricao: 'Desenvolvemos processos de integração e capacitação para garantir que novos colaboradores sejam produtivos rapidamente.',
        itens: [
            'Matriz de Habilidades',
            'Processo de Integração estruturado',
            'Cronograma de treinamento personalizado',
            'Acompanhamento do novo funcionário',
            'Avaliação de eficácia dos treinamentos',
            'Gestão sobre os resultados estatísticos',
        ],
        imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/treinamento-e-desenvolvimento-1.jpg',
    },
    {
        numero: 3,
        titulo: 'Acompanhamento e Retenção',
        icon: '📈',
        descricao: 'Implementamos práticas de acompanhamento contínuo e estratégias de retenção para manter os melhores talentos.',
        itens: [
            'Monitoramento do desempenho',
            'Plano de desenvolvimento individual',
            'Pesquisa de Clima (engagement)',
            'Gestão de absenteísmo',
            'Avaliação de desempenho estruturada',
            'Mapeamento de oportunidades internas',
            'Fluxo de promoção transparente',
            'Gestão sobre os resultados estatísticos',
        ],
        imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/gestao-de-pessoas-1.jpg',
    },
    {
        numero: 4,
        titulo: 'Remuneração e Benefícios',
        icon: '💰',
        descricao: 'Estruturamos políticas de remuneração competitivas e benefícios alinhados às expectativas do mercado.',
        itens: [
            'Monitoramento da pontualidade e correção do pagamento',
            'Critérios e gerenciamento dos benefícios',
            'Plano de cargos e salários',
            'Remuneração variável',
            'Análise do mercado de trabalho compatível',
            'Modelo de contracheque',
            'Rotina para saneamento de dúvidas',
            'Gestão sobre os resultados estatísticos',
        ],
        imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/cargos-e-salarios-1.jpg',
    },
    {
        numero: 5,
        titulo: 'Motivacional',
        icon: '🌟',
        descricao: 'Desenvolvemos programas de incentivo e reconhecimento para manter a equipe engajada e motivada.',
        itens: [
            'Programa de incentivos',
            'Aniversariantes do mês',
            'Destaques do mês',
            'Reconhecimento por tempo de casa',
            'Eventos de valorização socioambiental',
            'Ações de valorização e integração da equipe',
            'Gestão sobre resultados estatísticos',
        ],
        imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/pesquisa-de-clima-1.jpg',
    },
    {
        numero: 6,
        titulo: 'Controle de Jornada',
        icon: '⏰',
        descricao: 'Implementamos controles eficientes de jornada de trabalho para garantir conformidade e produtividade.',
        itens: [
            'Controle de ponto',
            'Correção das folhas de ponto',
            'Gestão de horas extras',
            'Controle do banco de horas',
            'Dimensionamento de equipe',
            'Gestão sobre os resultados estatísticos',
        ],
        imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/terceirizacao-de-mao-de-obra-1.jpg',
    },
    {
        numero: 7,
        titulo: 'Desligamento',
        icon: '📝',
        descricao: 'Estruturamos processos de desligamento humanizados e conformes com a legislação.',
        itens: [
            'Procedimento por modalidade',
            'Treinamento da cadeia envolvida',
            'Fluxo de desligamento',
            'Entrevista de desligamento',
            'Ações corretivas e tratamento de anomalias',
            'Gestão sobre os resultados estatísticos',
        ],
        imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/outplacement-1.jpg',
    },
];

// Dados do carrossel de benefícios
const carouselSlides = [
    {
        numero: '01',
        titulo: 'Auditoria Externa',
        subtitulo: 'Visão imparcial e profissional',
        descricao: 'Contamos com uma visão externa e imparcial para identificar falhas e necessidades de ajustes no seu RH, sem vícios internos.',
        cor: 'from-red-600 to-red-800',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        numero: '02',
        titulo: 'Novas Ferramentas',
        subtitulo: 'Controles modernos',
        descricao: 'Implementamos controles e práticas seguindo as tendências mais modernas em gestão de pessoas e recursos humanos.',
        cor: 'from-orange-500 to-amber-600',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        numero: '03',
        titulo: 'Consultores Experientes',
        subtitulo: '+20 anos de mercado',
        descricao: 'Nossa equipe possui mais de 20 anos de experiência e está sempre atualizada com treinamentos constantes nas melhores práticas.',
        cor: 'from-emerald-500 to-teal-600',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        numero: '04',
        titulo: 'Estratégias Inovadoras',
        subtitulo: 'Atração e retenção de talentos',
        descricao: 'Desenvolvemos estratégias modernas para atrair e reter os melhores profissionais do mercado para sua empresa.',
        cor: 'from-blue-500 to-indigo-600',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        numero: '05',
        titulo: 'Orientação Trabalhista',
        subtitulo: 'Conformidade legal',
        descricao: 'Oferecemos orientações personalizadas sobre adequações à legislação trabalhista vigente, evitando passivos e multas.',
        cor: 'from-purple-500 to-violet-600',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
    },
    {
        numero: '06',
        titulo: 'Decisões Baseadas em Dados',
        subtitulo: 'Cultura de indicadores',
        descricao: 'Implementamos uma cultura de gestão baseada em indicadores e métricas de RH para tomadas de decisão mais assertivas.',
        cor: 'from-rose-500 to-pink-600',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
];

// Componente Slider de Módulos (estilo homepage)
const ModulosSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeModulo = modulosDetalhados[activeIndex];

    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                        7 MÓDULOS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Estruturação e Otimização da Gestão de Pessoas
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Conheça os módulos que irão garantir a aplicação das melhores práticas em todos os fluxos de trabalho do seu RH
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 border-b border-white/20 pb-3">
                    <div className="flex justify-start sm:justify-center gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
                        {modulosDetalhados.map((modulo, index) => (
                            <button
                                key={modulo.numero}
                                onClick={() => setActiveIndex(index)}
                                className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                                    activeIndex === index
                                        ? 'bg-white text-gray-900'
                                        : 'text-white/70 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                <span>{modulo.icon}</span>
                                <span className="hidden md:inline">{modulo.titulo}</span>
                                <span className="md:hidden">Módulo {modulo.numero}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                    {/* Left - Text Content */}
                    <div key={activeModulo.numero} className="animate-fade-in-content">
                        {/* Icon & Number */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-5xl">{activeModulo.icon}</div>
                            <div className="text-white/30 text-6xl font-black">0{activeModulo.numero}</div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            {activeModulo.titulo}
                        </h3>

                        {/* Description */}
                        <p className="text-white/80 text-base leading-relaxed mb-6">
                            {activeModulo.descricao}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-2 mb-6">
                            {activeModulo.itens.slice(0, 5).map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-white/70">
                                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                            {activeModulo.itens.length > 5 && (
                                <li className="text-white/50 text-sm pl-7">
                                    + {activeModulo.itens.length - 5} itens incluídos
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Right - Image */}
                    <div className="order-first lg:order-last">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src={activeModulo.imageUrl} 
                                alt={activeModulo.titulo}
                                className="w-full h-64 md:h-80 object-cover transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    Módulo {activeModulo.numero} de 7
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a 
                        href="https://wa.me/5521967155476"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-4 px-10 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        Fale com um Consultor
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

// FAQ
const faqItems = [
    {
        pergunta: 'O que é a Estruturação do RH?',
        resposta: 'É um serviço de consultoria completa que analisa os processos e controles do seu RH, avaliando métricas de desempenho, apontando problemas e indicando soluções para melhorar a produtividade do setor e alinhá-lo às estratégias da empresa.',
    },
    {
        pergunta: 'Quais são os módulos da Estruturação do RH?',
        resposta: 'São 7 módulos: Recrutamento e Seleção, Integração e Treinamento, Acompanhamento e Retenção, Remuneração e Benefícios, Motivacional, Controle de Jornada e Desligamento.',
    },
    {
        pergunta: 'Por que contratar uma consultoria externa de RH?',
        resposta: 'Uma consultoria externa oferece visão imparcial e profissional, novas ferramentas e práticas modernas, consultores experientes, estratégias inovadoras e orientação trabalhista atualizada.',
    },
    {
        pergunta: 'Quanto tempo leva o processo de Estruturação?',
        resposta: 'O tempo varia conforme o tamanho da empresa e a complexidade dos processos. Realizamos um diagnóstico inicial para definir o escopo e cronograma personalizado para cada cliente.',
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
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                        O QUE OFERECEMOS
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Benefícios da Estruturação
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Conheça as vantagens de estruturar seu RH com a Talentos Consultoria
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="max-w-5xl mx-auto">
                    {/* Main Card - Altura fixa */}
                    <div 
                        className={`bg-gradient-to-br ${slide.cor} rounded-3xl p-8 md:p-12 h-[380px] md:h-[320px] flex flex-col transition-colors duration-500 shadow-2xl`}
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
const EstruturacaoRHPage: React.FC = () => {
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
                            Consultoria estratégica de RH
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
                            Estruturação<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                do RH
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
                            Consultoria para desenvolver e aumentar a <strong className="text-white">eficiência do RH</strong> e alinhá-lo às estratégias da gestão corporativa.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up animation-delay-600">
                            <ConsultorButton variant="light" />
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 animate-fade-in-up animation-delay-800">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+20</div>
                                <div className="text-white/60 text-sm">Anos de experiência</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">7</div>
                                <div className="text-white/60 text-sm">Módulos completos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">100%</div>
                                <div className="text-white/60 text-sm">Personalizado</div>
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
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            PROBLEMAS QUE RESOLVEMOS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Você se identifica com algum desses problemas?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Nossos clientes enfrentavam esses desafios antes de estruturar o RH
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Dor 1 */}
                        <AnimatedSection delay={0.1}>
                            <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-6 h-full hover:border-red-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Falta de processos definidos</h3>
                                <p className="text-gray-600 text-sm mb-4">"Nosso RH não tem processos claros e cada um faz de um jeito."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Mapeamos e padronizamos processos
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 2 */}
                        <AnimatedSection delay={0.15}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Alta rotatividade</h3>
                                <p className="text-gray-600 text-sm mb-4">"Os funcionários não ficam muito tempo e temos que treinar sempre."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Estratégias de retenção eficazes
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 3 */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-amber-50 border-2 border-amber-100 rounded-2xl p-6 h-full hover:border-amber-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Sem indicadores de RH</h3>
                                <p className="text-gray-600 text-sm mb-4">"Não temos métricas para medir a eficiência do nosso RH."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Cultura de dados e indicadores
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 4 */}
                        <AnimatedSection delay={0.25}>
                            <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-6 h-full hover:border-blue-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Equipe desmotivada</h3>
                                <p className="text-gray-600 text-sm mb-4">"O clima na empresa está ruim e a produtividade caiu."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Programas motivacionais
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 5 */}
                        <AnimatedSection delay={0.3}>
                            <div className="bg-purple-50 border-2 border-purple-100 rounded-2xl p-6 h-full hover:border-purple-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Problemas com remuneração</h3>
                                <p className="text-gray-600 text-sm mb-4">"Não temos plano de cargos e salários estruturado."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Estrutura de cargos e salários
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 6 */}
                        <AnimatedSection delay={0.35}>
                            <div className="bg-teal-50 border-2 border-teal-100 rounded-2xl p-6 h-full hover:border-teal-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Riscos trabalhistas</h3>
                                <p className="text-gray-600 text-sm mb-4">"Temos medo de passivos trabalhistas e multas."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Orientação e conformidade legal
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* MÓDULOS */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            7 MÓDULOS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Quais Áreas do RH Serão Estruturadas?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Trabalhamos em 7 módulos completos para otimizar toda a gestão de pessoas
                        </p>
                    </AnimatedSection>

                    {/* Primeira linha - 4 módulos */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {modulosSimples.slice(0, 4).map((modulo, index) => (
                            <AnimatedSection key={modulo.nome} delay={0.05 * index}>
                                <div 
                                    className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${modulo.cor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    <div className="relative p-6 text-center">
                                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{modulo.icon}</div>
                                        <h3 className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                                            {modulo.nome}
                                        </h3>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Segunda linha - 3 módulos centralizados */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mt-4 md:mt-6">
                        {modulosSimples.slice(4).map((modulo, index) => (
                            <AnimatedSection key={modulo.nome} delay={0.05 * (index + 4)}>
                                <div 
                                    className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${modulo.cor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    <div className="relative p-6 text-center">
                                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{modulo.icon}</div>
                                        <h3 className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                                            {modulo.nome}
                                        </h3>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection delay={0.4} className="text-center mt-12">
                        <a 
                            href="https://wa.me/5521967155476"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-4 px-10 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Fale com um Consultor
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </AnimatedSection>
                </div>
            </section>

            {/* BENEFÍCIOS - CARROSSEL */}
            <BeneficiosCarousel />

            {/* MÓDULOS DETALHADOS - SLIDER */}
            <ModulosSlider />

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
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
                                Tire suas dúvidas sobre a Estruturação do RH
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
                                Saiba Mais Sobre a Estruturação do RH
                            </h2>
                        </AnimatedSection>
                        <AnimatedSection delay={0.15}>
                            <p className="text-xl text-white/80 mb-10 leading-relaxed">
                                Quer saber como este serviço poderia ser implementado na sua empresa? Entre em contato com nossos consultores especializados.
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
                            Além da estruturação do RH, oferecemos um portfólio completo de soluções em Recursos Humanos para sua empresa.
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

export default EstruturacaoRHPage;
