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

const BlogTerceirizacaoPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
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
                            Terceirização de mão de obra: agilidade operacional para sua empresa
                        </h1>
                        
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Saiba como a terceirização pode otimizar processos, reduzir custos e permitir que sua empresa foque no que realmente importa: seu core business.
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
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80" 
                                    alt="Terceirização de mão de obra" 
                                    className="w-full h-64 md:h-96 object-cover"
                                />
                            </div>
                        </AnimatedSection>

                        {/* Introdução */}
                        <AnimatedSection delay={0.1}>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                    A <strong className="text-orange-600">terceirização de mão de obra</strong> é uma solução estratégica, ideal para empresas que buscam otimizar seus processos, focar no <em>core business</em> e melhorar a produtividade.
                                </p>
                                
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Desde o ganho de agilidade operacional à redução de burocracia, este serviço, oferecido pela consultoria de RH da Talentos, irá potencializar os resultados em diferentes áreas do seu negócio.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* O que é terceirização */}
                        <AnimatedSection delay={0.15}>
                            <div className="bg-orange-50 rounded-2xl p-8 mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    O que é terceirização de mão de obra?
                                </h2>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Terceirização de mão de obra é um modelo de contratação, onde você conta com <strong className="text-orange-600">profissionais qualificados</strong> para atuar em diferentes áreas, como funções administrativas, de logística, manutenção, TI, entre outras.
                                </p>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Neste formato, a energia da sua gestão pode ser direcionada ao <em>core business</em> da empresa. Enquanto você foca na atividade principal, a responsabilidade por selecionar e administrar o funcionário, fica sob os cuidados do setor de recursos humanos e departamento pessoal.
                                </p>
                                
                                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-orange-200">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Responsabilidade da Talentos</h3>
                                        <p className="text-gray-600 text-sm">
                                            Desde a folha de pagamento, até o desligamento do colaborador, o vínculo empregatício e o compromisso pelo funcionário serão da Talentos Consultoria.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Tipos de contratação */}
                        <AnimatedSection delay={0.2}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                                    Tipos de contratação de funcionários terceirizados
                                </h2>
                                
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Com três diferentes tipos de modalidades, contratar funcionários terceirizados é a solução ideal para atender a necessidade de cada negócio, independentemente do seu porte.
                                </p>
                                
                                <div className="grid gap-4">
                                    {[
                                        {
                                            titulo: 'Efetiva por tempo indeterminado',
                                            descricao: 'Modelo amplamente utilizado, conhecido principalmente pelo seu formato CLT, onde a mão de obra se estende por mais de seis meses.',
                                            cor: 'from-orange-500 to-orange-600',
                                            icon: '📋',
                                            indicacao: 'Ideal para posições permanentes'
                                        },
                                        {
                                            titulo: 'Efetiva por tempo determinado',
                                            descricao: 'Normalmente utilizada para projetos com mão de obra especializada, essa modalidade atende atividades com período de até dois anos, com previsibilidade de data para finalização.',
                                            cor: 'from-amber-500 to-amber-600',
                                            icon: '📅',
                                            indicacao: 'Ideal para projetos específicos'
                                        },
                                        {
                                            titulo: 'Contrato temporário',
                                            descricao: 'Formato indicado para atender necessidade transitória de substituição de pessoal regular e permanente, ou acréscimo extraordinário de serviços.',
                                            cor: 'from-red-500 to-red-600',
                                            icon: '⏱️',
                                            indicacao: 'Ideal para demandas sazonais'
                                        }
                                    ].map((modalidade, index) => (
                                        <div 
                                            key={index}
                                            className={`bg-gradient-to-br ${modalidade.cor} rounded-2xl p-6 text-white`}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="text-3xl">{modalidade.icon}</div>
                                                <div className="flex-grow">
                                                    <h3 className="font-bold text-lg mb-2">{modalidade.titulo}</h3>
                                                    <p className="text-white/90 text-sm mb-3">{modalidade.descricao}</p>
                                                    <span className="inline-block bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                                                        {modalidade.indicacao}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Benefícios */}
                        <AnimatedSection delay={0.25}>
                            <div className="bg-gray-900 rounded-2xl p-8 mb-12 text-white">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Benefícios da mão de obra terceirizada
                                </h2>
                                
                                <p className="text-white/80 leading-relaxed mb-8">
                                    Atendendo diferentes tipos de demandas, a mão de obra terceirizada traz benefícios às empresas, fortalecendo a eficiência ao seu negócio e proporcionando melhorias nos processos.
                                </p>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        {
                                            titulo: 'Ganho de agilidade operacional',
                                            descricao: 'Sua empresa resolve demandas específicas com rapidez e eficiência.',
                                            icon: '⚡'
                                        },
                                        {
                                            titulo: 'Profissionais experientes',
                                            descricao: 'Conte com profissionais prontos e qualificados para diferentes áreas.',
                                            icon: '👨‍💼'
                                        },
                                        {
                                            titulo: 'Redução de burocracia',
                                            descricao: 'O vínculo empregatício fica por conta da consultoria de RH da Talentos.',
                                            icon: '📉'
                                        },
                                        {
                                            titulo: 'Aumento de produtividade',
                                            descricao: 'Seu time fixo fica livre da sobrecarga e melhora sua produtividade.',
                                            icon: '📈'
                                        },
                                        {
                                            titulo: 'Segurança jurídica',
                                            descricao: 'Sua empresa estará legalmente amparada pelo suporte da consultoria.',
                                            icon: '🛡️'
                                        },
                                        {
                                            titulo: 'Foco no core business',
                                            descricao: 'Concentre energia na atividade principal do seu negócio.',
                                            icon: '🎯'
                                        }
                                    ].map((beneficio, index) => (
                                        <div 
                                            key={index}
                                            className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="text-2xl">{beneficio.icon}</div>
                                                <div>
                                                    <h3 className="font-bold text-white mb-1">{beneficio.titulo}</h3>
                                                    <p className="text-white/70 text-sm">{beneficio.descricao}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Por que contratar */}
                        <AnimatedSection delay={0.3}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Motivos para contratar uma empresa de terceirização
                                </h2>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Contar com o suporte de uma empresa de RH, especializada em mão de obra terceirizada, é essencial para garantir que suas contratações sejam mais assertivas e que você tenha mais segurança nos processos.
                                </p>
                                
                                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-3">Na Talentos Consultoria:</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Cada etapa é conduzida com transparência, agilidade e proximidade',
                                            'Foco em traçar contratações estratégicas para suas reais necessidades',
                                            'Expertise de mercado para entender o formato ideal para sua empresa',
                                            'Gestão administrativa completa, desde a seleção até o desligamento'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <p className="text-gray-600 leading-relaxed">
                                    Nós nos responsabilizamos a buscar os melhores resultados, garantindo previsibilidade às operações e ganho de tempo para você focar no seu negócio, enquanto cuidamos do seu pessoal.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* CTA */}
                        <AnimatedSection delay={0.35}>
                            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-center text-white">
                                <h2 className="text-2xl font-bold mb-4">
                                    Garanta profissionais experientes e agilidade operacional
                                </h2>
                                <p className="text-white/90 mb-6">
                                    Entre em contato com a Talentos Consultoria e conheça nosso serviço de terceirização de mão de obra.
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
                            to="/servicos/terceirizacao-de-mao-de-obra"
                            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                                <svg className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                Conheça nosso serviço de Terceirização
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Descubra como a Talentos pode ajudar sua empresa com terceirização de mão de obra.
                            </p>
                        </Link>
                        
                        <Link 
                            to="/blog/gestao-de-talentos"
                            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                                <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                Gestão de talentos inteligente
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Como desenvolver times de alta performance na sua empresa.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogTerceirizacaoPage;




