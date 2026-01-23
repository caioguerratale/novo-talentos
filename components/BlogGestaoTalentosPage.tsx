import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

// Ícones SVG para o blog
const blogIcons = {
    target: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    ),
    handshake: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
    ),
    book: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
    ),
    trendUp: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
    ),
    star: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
    ),
    trophy: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
        </svg>
    ),
    money: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    sparkle: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
    ),
    tie: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    ),
    users: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
    ),
};

const BlogGestaoTalentosPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link 
                            to="/" 
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Voltar para Home
                        </Link>
                        
                        <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
                            Blog Talentos
                        </span>
                        
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                            Gestão de talentos inteligente: como desenvolver times de alta performance
                        </h1>
                        
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Descubra as melhores práticas para identificar, desenvolver e reter talentos, construindo equipes que impulsionam os resultados da sua empresa.
                        </p>
                    </div>
                </div>
            </section>

            {/* Conteúdo do Artigo */}
            <article className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        {/* Imagem destacada */}
                        <AnimatedSection>
                            <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
                                <img 
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
                                    alt="Gestão de talentos inteligente" 
                                    className="w-full h-64 md:h-96 object-cover"
                                />
                            </div>
                        </AnimatedSection>

                        {/* Introdução */}
                        <AnimatedSection delay={0.1}>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                    Coordenar pessoas com estratégia é uma das formas mais inteligentes de impulsionar resultados. Com a <strong className="text-blue-600">gestão de talentos</strong>, sua empresa trabalha o desenvolvimento humano, extraindo o potencial máximo de cada colaborador.
                                </p>
                                
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    A gestão de talentos atua na linha de frente de dores comuns em muitas empresas. Da contratação inteligente à alta performance da equipe, essa prática é capaz de auxiliar seu negócio em desafios com aumento do turnover, queda no engajamento, problemas de comunicação, além da dificuldade em atrair e reter bons profissionais.
                                </p>
                                
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Com o auxílio da consultoria de RH da Talentos, trazemos para esta prática o olhar estratégico e humano, de quem realmente entende de pessoas. Assim, trabalhamos juntos para promover o alinhamento de expectativas, atuar na redução de conflitos, fortalecer a cultura da empresa e preparar novas lideranças.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* O que é gestão de talentos */}
                        <AnimatedSection delay={0.15}>
                            <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    O que é gestão de talentos?
                                </h2>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    A gestão de talentos é uma <strong className="text-blue-600">estratégia empresarial</strong> feita para atrair, desenvolver e reter profissionais qualificados para sua empresa. Com ela, você fortalece as habilidades do seu time, para que o engajamento e a produtividade aumentem, conquistando resultados ainda mais satisfatórios.
                                </p>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Essa é uma prática contínua, envolvendo diferentes etapas do ciclo do profissional dentro da empresa:
                                </p>
                                
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                        { icon: blogIcons.target, text: 'Recrutamento' },
                                        { icon: blogIcons.handshake, text: 'Integração' },
                                        { icon: blogIcons.book, text: 'Treinamentos' },
                                        { icon: blogIcons.trendUp, text: 'Desenvolvimento' },
                                        { icon: blogIcons.star, text: 'Avaliações' },
                                        { icon: blogIcons.trophy, text: 'Retenção' },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
                                            <div className="flex justify-center text-blue-600 mb-2">{item.icon}</div>
                                            <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <p className="text-gray-600 leading-relaxed mt-6">
                                    O foco é identificar e potencializar as melhores qualidades de cada colaborador, para que ele evolua junto aos objetivos da empresa. Quando bem aplicada, a gestão de talentos promove um ambiente de trabalho mais produtivo e colaborativo.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Benefícios */}
                        <AnimatedSection delay={0.2}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                                    Motivos para desenvolver as habilidades de seus colaboradores
                                </h2>
                                
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Desenvolver as habilidades do seu time é investir no futuro do seu negócio. Ao valorizar os profissionais de forma individual, sua empresa está cultivando os melhores talentos, dando espaço para que ele evolua, fortaleça seu desempenho e se torne um defensor da marca.
                                </p>
                                
                                <div className="grid gap-4">
                                    {[
                                        {
                                            titulo: 'Atração e retenção de talentos',
                                            descricao: 'Com uma cultura interna forte, sua empresa atrai, desenvolve e retém os melhores profissionais do mercado, fazendo com que a marca se torne atrativa para futuros talentos.',
                                            cor: 'from-blue-500 to-indigo-600',
                                            icon: blogIcons.handshake
                                        },
                                        {
                                            titulo: 'Redução de turnover',
                                            descricao: 'Ao trabalhar a gestão do seu time, sua empresa diminui a rotatividade de pessoal, evitando perder talentos para a concorrência.',
                                            cor: 'from-emerald-500 to-teal-600',
                                            icon: blogIcons.trendUp
                                        },
                                        {
                                            titulo: 'Diminuição de custos',
                                            descricao: 'Com pessoas certas no seu time e plano de desenvolvimento profissional, você diminui gastos com novas contratações, desligamentos e treinamentos desnecessários.',
                                            cor: 'from-amber-500 to-orange-600',
                                            icon: blogIcons.money
                                        },
                                        {
                                            titulo: 'Melhora do clima organizacional',
                                            descricao: 'Um ambiente de trabalho com oportunidades de crescimento e atenção ao colaborador, se torna um espaço saudável, colaborativo e produtivo.',
                                            cor: 'from-purple-500 to-violet-600',
                                            icon: blogIcons.sparkle
                                        }
                                    ].map((beneficio, index) => (
                                        <div 
                                            key={index}
                                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`w-12 h-12 bg-gradient-to-br ${beneficio.cor} rounded-lg flex items-center justify-center flex-shrink-0 text-2xl`}>
                                                    {beneficio.icon}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 mb-1">{beneficio.titulo}</h3>
                                                    <p className="text-gray-600 text-sm">{beneficio.descricao}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Incentivando novas lideranças */}
                        <AnimatedSection delay={0.25}>
                            <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Incentivando novas lideranças
                                </h2>
                                
                                <p className="text-white/80 leading-relaxed mb-6">
                                    Com gestão de talentos inteligente, as lideranças atuais se desenvolvem e, também, é possível analisar potenciais colaboradores que virão a ser bons líderes no futuro.
                                </p>
                                
                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                        <div className="text-white mb-4">{blogIcons.tie}</div>
                                        <h3 className="font-bold text-white mb-2">Para Líderes</h3>
                                        <p className="text-white/70 text-sm">
                                            Os profissionais em cargos executivos passam a aprimorar suas <em>soft skills</em>, tornando a liderança humanizada, com empatia e inteligência emocional.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                        <div className="text-white mb-4">{blogIcons.users}</div>
                                        <h3 className="font-bold text-white mb-2">Para a Equipe</h3>
                                        <p className="text-white/70 text-sm">
                                            O time ganha um ambiente propício para desenvolver habilidades técnicas e comportamentais, motivado a produzir e visando oportunidades de crescimento.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Marca empregadora */}
                        <AnimatedSection delay={0.3}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Fortalecendo sua marca empregadora
                                </h2>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    A percepção que o público tem da sua marca, vai além da experiência ao comprar produtos ou contratar serviços. A visão dos seus colaboradores sobre a empresa também é responsável por impactar sua reputação.
                                </p>
                                
                                <div className="flex items-start gap-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-6">
                                    <svg className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Colaboradores como defensores da marca</h3>
                                        <p className="text-gray-600">
                                            Os profissionais que fazem o dia a dia do seu negócio são a porta de entrada para a excelência que sua marca deseja transmitir. Ao se sentirem motivados e valorizados, seu time passa a ser defensor da marca, mostrando que é um ambiente saudável para se trabalhar.
                                        </p>
                                    </div>
                                </div>
                                
                                <p className="text-gray-600 leading-relaxed">
                                    Ter uma marca empregadora forte auxilia na retenção e atração de novos talentos. Para potencializar esse processo, a consultoria de recursos humanos se torna a sua principal aliada.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Consultoria de RH */}
                        <AnimatedSection delay={0.35}>
                            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Consultoria de RH como aliada
                                </h2>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Para que sua gestão de talentos ganhe mais eficiência e traga resultados concretos, é essencial contar com processos bem estruturados em todas as etapas do ciclo do seu colaborador.
                                </p>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Na Talentos, oferecemos soluções completas:
                                </p>
                                
                                <div className="space-y-4">
                                    {[
                                        {
                                            titulo: 'Recrutamento e Seleção',
                                            descricao: 'Processos que atendem suas necessidades na contratação',
                                            link: '/servicos/recrutamento-e-selecao'
                                        },
                                        {
                                            titulo: 'Terceirização de Mão de Obra',
                                            descricao: 'Flexibilidade e agilidade na gestão de pessoal',
                                            link: '/servicos/terceirizacao-de-mao-de-obra'
                                        },
                                        {
                                            titulo: 'Cargos e Salários',
                                            descricao: 'Alinhamento de funções e remunerações com o mercado',
                                            link: '/servicos/cargos-e-salarios'
                                        },
                                        {
                                            titulo: 'Pesquisa de Clima',
                                            descricao: 'Medição da satisfação e planos de ação para melhorias',
                                            link: '/servicos/pesquisa-de-clima-organizacional'
                                        }
                                    ].map((servico, index) => (
                                        <Link 
                                            key={index}
                                            to={servico.link}
                                            className="flex items-center gap-4 bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300 group"
                                        >
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                                <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{servico.titulo}</h3>
                                                <p className="text-gray-500 text-sm">{servico.descricao}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* CTA */}
                        <AnimatedSection delay={0.4}>
                            <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
                                <h2 className="text-2xl font-bold mb-4">
                                    Invista nas pessoas e no futuro da sua empresa
                                </h2>
                                <p className="text-white/80 mb-6">
                                    Conte com a Talentos Consultoria de RH para potencializar seus resultados e construir times de alta performance.
                                </p>
                                <ConsultorButton variant="light" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </article>

            {/* Outros artigos */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Outros artigos que você pode gostar
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Link 
                            to="/blog/pesquisa-de-clima-organizacional"
                            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                                <svg className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                                Pesquisa de clima organizacional
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Como transformar feedbacks em oportunidades de crescimento para sua empresa.
                            </p>
                        </Link>
                        
                        <Link 
                            to="/servicos/recrutamento-e-selecao"
                            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                                <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                Recrutamento e Seleção
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Encontre os melhores profissionais para sua empresa com nosso processo especializado.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogGestaoTalentosPage;




