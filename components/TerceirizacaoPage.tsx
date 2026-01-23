import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConsultorButton from './ConsultorButton';

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
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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
    delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = 0 }) => {
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

// Icons
const CheckCircleIcon = () => (
    <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

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

// Dados dos profissionais terceirizados
const profissionaisIcons = {
    recepcionista: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
    ),
    copeira: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
    ),
    logistica: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
    ),
    portaria: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
    ),
    manutencao: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
    ),
    motoristas: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
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
};

const profissionais = [
    { nome: 'Recepcionista', icon: profissionaisIcons.recepcionista, cor: 'from-rose-500 to-pink-600' },
    { nome: 'Copeira', icon: profissionaisIcons.copeira, cor: 'from-amber-500 to-orange-600' },
    { nome: 'Logística', icon: profissionaisIcons.logistica, cor: 'from-blue-500 to-indigo-600' },
    { nome: 'Portaria', icon: profissionaisIcons.portaria, cor: 'from-slate-500 to-gray-600' },
    { nome: 'Manutenção e Zeladoria', icon: profissionaisIcons.manutencao, cor: 'from-emerald-500 to-teal-600' },
    { nome: 'Motoristas', icon: profissionaisIcons.motoristas, cor: 'from-red-500 to-rose-600' },
    { nome: 'Profissionais de TI', icon: profissionaisIcons.ti, cor: 'from-indigo-500 to-purple-600' },
    { nome: 'Administrativos', icon: profissionaisIcons.administrativos, cor: 'from-sky-500 to-blue-600' },
];


// Modalidades de contrato
const modalidades = [
    {
        titulo: 'Terceirização Efetiva por Tempo Indeterminado',
        subtitulo: 'A modalidade mais utilizada no Brasil',
        descricao: 'Trata-se da modalidade de contratação mais amplamente utilizada no Brasil, muitas vezes chamada também de "efetiva", "CLT" ou "celetista".',
        indicacoes: [
            'Atividades com necessidade contínua de mão de obra por mais de seis meses',
            'Contratação de profissionais especializados e retenção de conhecimento',
            'Terceirização dos processos de contratação, administração e desligamento',
            'Diluição de custos de contratação (exames admissionais, uniformes, EPIs, etc.)',
        ],
        cor: 'bg-gradient-to-br from-amber-600 to-orange-700',
    },
    {
        titulo: 'Terceirização Efetiva por Tempo Determinado',
        subtitulo: 'Para projetos com prazo definido',
        descricao: 'Modalidade de trabalho indicada quando há boa previsibilidade do período pelo qual o trabalhador será necessário à empresa.',
        indicacoes: [
            'Atividades com necessidade contínua por até dois anos',
            'Alta previsibilidade de data para finalização',
            'Normalmente usada para projetos com mão de obra especializada',
        ],
        cor: 'bg-gradient-to-br from-amber-600 to-orange-700',
    },
    {
        titulo: 'Contrato Temporário',
        subtitulo: 'Para demandas transitórias',
        descricao: 'Modalidade indicada para atender à necessidade transitória de substituição de pessoal regular e permanente ou acréscimo extraordinário de serviços.',
        indicacoes: [
            'Atividades com necessidade de mão de obra por menos de seis meses',
            'Aumento de quadro em demandas especiais',
            'Cobertura de férias e licenças',
            'Menores custos com encargos e provisões',
        ],
        cor: 'bg-gradient-to-br from-amber-600 to-orange-700',
    },
];

// FAQ
const faqItems = [
    {
        pergunta: 'Quais são os diferentes tipos de contrato de trabalho terceirizado?',
        resposta: 'Há diferentes tipos de contrato: Efetivo por Tempo Indeterminado (CLT tradicional), Efetivo por Tempo Determinado (até 2 anos com data definida), Temporário (para demandas transitórias de até 6 meses) e Intermitente (para trabalhos descontínuos). Cada modalidade atende a necessidades específicas e a escolha correta evita custos adicionais e complicações legais.',
    },
    {
        pergunta: 'Qual é o melhor tipo de contrato de terceirização de mão de obra?',
        resposta: 'A decisão deve levar em consideração: motivo da contratação, atividade exercida, prazo da contratação e frequência da necessidade do trabalhador. A decisão por um tipo de contrato errado pode acarretar em custos financeiros e complicações legais. A Talentos Consultoria pode ajudar a identificar a melhor opção para sua empresa.',
    },
    {
        pergunta: 'Quais são as vantagens da terceirização de mão de obra?',
        resposta: 'As principais vantagens incluem: mão de obra qualificada, qualificação e treinamentos, redução do quadro de colaboradores, sem vínculo empregatício direto, substituição fácil e rápida, sem necessidade de administração de pessoal, contratações temporárias sem complicações trabalhistas, e ganho de produtividade nas tarefas terceirizadas.',
    },
    {
        pergunta: 'A Talentos Consultoria atende pequenas empresas?',
        resposta: 'Sim! Oferecemos serviço de terceirização de mão de obra para empresas de todos os portes: pequenas, médias e grandes. Nossa equipe está preparada para entender as necessidades específicas de cada cliente e oferecer soluções personalizadas.',
    },
];


// Dados do carrossel de benefícios
const carouselSlides = [
    {
        numero: '01',
        titulo: 'Recrutamento e Seleção',
        subtitulo: 'Encontramos os melhores profissionais',
        descricao: 'Nossa equipe especializada identifica e seleciona os profissionais mais qualificados para cada função, garantindo que sua empresa tenha acesso aos melhores talentos do mercado.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    },
    {
        numero: '02',
        titulo: 'Administração Completa',
        subtitulo: 'Cuidamos de toda a burocracia',
        descricao: 'Gerenciamos folha de pagamento, encargos, benefícios, férias, afastamentos e toda a documentação trabalhista. Você foca no seu negócio, nós cuidamos do resto.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        numero: '03',
        titulo: 'Cobertura Total',
        subtitulo: 'Sem interrupções no seu negócio',
        descricao: 'Garantimos cobertura completa de afastamentos, faltas, férias e licenças. Temos um banco de profissionais prontos para substituições imediatas quando necessário.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        numero: '04',
        titulo: 'Sem Vínculo Empregatício',
        subtitulo: 'Segurança jurídica para sua empresa',
        descricao: 'O vínculo empregatício e todas as responsabilidades trabalhistas são da Talentos Consultoria. Sua empresa fica livre de riscos e passivos trabalhistas.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        numero: '05',
        titulo: 'Supervisão Especializada',
        subtitulo: 'Acompanhamento de perto',
        descricao: 'Nossa equipe de supervisão acompanha o desempenho dos profissionais, garantindo produtividade, qualidade e satisfação em todas as funções terceirizadas.',
        cor: 'from-amber-600 to-orange-700',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
];

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
                        Benefícios da Terceirização
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Conheça as vantagens de terceirizar com a Talentos Consultoria
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

// Componente principal
const TerceirizacaoPage: React.FC = () => {
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
                {/* Background com gradiente e padrão */}
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
                            Solução completa em RH
                        </span>
                        
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
                            Terceirização de<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                Mão de Obra
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
                            Terceirize profissionais especializados e conte com a administração completa da <strong className="text-white">Talentos Consultoria</strong>.
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
                                <div className="text-3xl md:text-4xl font-black text-white">+20</div>
                                <div className="text-white/60 text-sm">Anos de experiência</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+100</div>
                                <div className="text-white/60 text-sm">Clientes atendidos</div>
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
                            Nossos clientes enfrentavam esses desafios antes de terceirizar com a Talentos
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
                                <h3 className="font-bold text-gray-900 mb-2">Perda de tempo com processos de RH/DP</h3>
                                <p className="text-gray-600 text-sm mb-4">"Gasto muito tempo administrando folha de pagamento, férias e questões trabalhistas."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Administramos 100% dos profissionais
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
                                <h3 className="font-bold text-gray-900 mb-2">Dificuldade em encontrar profissionais</h3>
                                <p className="text-gray-600 text-sm mb-4">"Não consigo contratar pessoas qualificadas rapidamente quando preciso."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Banco de talentos pronto para atuar
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 3 */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Riscos trabalhistas e passivos</h3>
                                <p className="text-gray-600 text-sm mb-4">"Tenho medo de processos trabalhistas e não domino a legislação."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Vínculo e responsabilidade são nossos
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
                                <h3 className="font-bold text-gray-900 mb-2">Alta rotatividade de funcionários</h3>
                                <p className="text-gray-600 text-sm mb-4">"Preciso substituir funcionários frequentemente e isso gera muito custo."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Substituição rápida e sem custo extra
                                </div>
                            </div>
                        </AnimatedSection>
                        
                        {/* Dor 5 */}
                        <AnimatedSection delay={0.3}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Dificuldade para escalar a equipe</h3>
                                <p className="text-gray-600 text-sm mb-4">"Quando a demanda aumenta, não consigo contratar com a agilidade que o negócio exige."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Contratações rápidas e gestão eficiente nos períodos certos
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Dor 6 */}
                        <AnimatedSection delay={0.35}>
                            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-4 lg:p-6 h-full hover:border-orange-300 transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Falta de foco no core business</h3>
                                <p className="text-gray-600 text-sm mb-4">"Perco energia com atividades que não são estratégicas para o negócio."</p>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                    Foque no que importa, terceirize o resto
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* PROFISSIONAIS QUE TERCEIRIZAMOS */}
            <section className="py-12 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            NOSSOS SERVIÇOS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Quais Profissionais Você Deseja Terceirizar?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Conheça os profissionais e os serviços que a Talentos Consultoria terceiriza
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {profissionais.map((prof, index) => (
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

            {/* MODALIDADES DE CONTRATO */}
            <section className="py-12 lg:py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            TIPOS DE CONTRATO
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Modalidades de Contrato de Terceirização
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Oferecemos diferentes modalidades para atender às necessidades específicas da sua empresa
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {modalidades.map((modalidade, index) => (
                            <AnimatedSection key={modalidade.titulo} delay={0.15 * index} className="h-full">
                                <div className={`${modalidade.cor} rounded-3xl p-8 h-full flex flex-col`}>
                                        <h3 className="text-xl font-bold text-white mb-2">{modalidade.titulo}</h3>
                                    <p className="text-white/70 text-sm mb-3">{modalidade.subtitulo}</p>
                                    <p className="text-white/80 text-sm leading-relaxed mb-5 min-h-[80px]">{modalidade.descricao}</p>
                                        
                                    <div className="space-y-2 flex-grow">
                                            <p className="text-white/90 font-semibold text-sm">Principais indicações:</p>
                                            {modalidade.indicacoes.map((indicacao, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <svg className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-white/80 text-sm">{indicacao}</span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-12 lg:py-20 bg-white">
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
                                Tire suas dúvidas sobre terceirização de mão de obra
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
                                Solicite uma Proposta de Terceirização
                            </h2>
                        </AnimatedSection>
                        <AnimatedSection delay={0.15}>
                            <p className="text-xl text-white/80 mb-10 leading-relaxed">
                                Diga-nos qual é a sua necessidade de mão de obra e deixe que a gente seleciona, contrata e administra os recursos terceirizados.
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
                            Além da terceirização de mão de obra, oferecemos um portfólio completo de soluções em Recursos Humanos para sua empresa.
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

export default TerceirizacaoPage;

