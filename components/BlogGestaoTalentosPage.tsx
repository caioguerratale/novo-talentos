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
                                        { icon: '🎯', text: 'Recrutamento' },
                                        { icon: '🤝', text: 'Integração' },
                                        { icon: '📚', text: 'Treinamentos' },
                                        { icon: '📈', text: 'Desenvolvimento' },
                                        { icon: '⭐', text: 'Avaliações' },
                                        { icon: '🏆', text: 'Retenção' },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
                                            <div className="text-2xl mb-2">{item.icon}</div>
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
                                            icon: '🧲'
                                        },
                                        {
                                            titulo: 'Redução de turnover',
                                            descricao: 'Ao trabalhar a gestão do seu time, sua empresa diminui a rotatividade de pessoal, evitando perder talentos para a concorrência.',
                                            cor: 'from-emerald-500 to-teal-600',
                                            icon: '📉'
                                        },
                                        {
                                            titulo: 'Diminuição de custos',
                                            descricao: 'Com pessoas certas no seu time e plano de desenvolvimento profissional, você diminui gastos com novas contratações, desligamentos e treinamentos desnecessários.',
                                            cor: 'from-amber-500 to-orange-600',
                                            icon: '💰'
                                        },
                                        {
                                            titulo: 'Melhora do clima organizacional',
                                            descricao: 'Um ambiente de trabalho com oportunidades de crescimento e atenção ao colaborador, se torna um espaço saudável, colaborativo e produtivo.',
                                            cor: 'from-purple-500 to-violet-600',
                                            icon: '🌟'
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
                                        <div className="text-3xl mb-4">👔</div>
                                        <h3 className="font-bold text-white mb-2">Para Líderes</h3>
                                        <p className="text-white/70 text-sm">
                                            Os profissionais em cargos executivos passam a aprimorar suas <em>soft skills</em>, tornando a liderança humanizada, com empatia e inteligência emocional.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                        <div className="text-3xl mb-4">👥</div>
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

