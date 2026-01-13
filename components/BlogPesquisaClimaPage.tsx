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

const BlogPesquisaClimaPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-red-700 via-red-800 to-red-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
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
                            Pesquisa de clima organizacional: como transformar feedbacks em oportunidades
                        </h1>
                        
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Entenda como uma pesquisa de clima bem estruturada pode revelar insights valiosos e se tornar uma ferramenta estratégica para a gestão de pessoas.
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
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" 
                                    alt="Pesquisa de clima organizacional" 
                                    className="w-full h-64 md:h-96 object-cover"
                                />
                            </div>
                        </AnimatedSection>

                        {/* Introdução */}
                        <AnimatedSection delay={0.1}>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                    Manter a equipe engajada é um dos principais desafios no crescimento de empresas. Afinal, a satisfação do colaborador impacta diretamente na sua performance. Com profissionais desmotivados, há queda na produtividade, na retenção de talentos e, consequentemente, nos resultados do seu negócio.
                                </p>
                                
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Uma das maneiras mais eficazes de transformar feedbacks em dados concretos é por meio da <strong className="text-red-600">pesquisa de clima organizacional</strong>. Essa ferramenta funciona como um diagnóstico estratégico, analisando a realidade interna da empresa, desde a infraestrutura até a gestão.
                                </p>
                                
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    O diagnóstico de clima organizacional é conduzido com o apoio da consultoria de recursos humanos da Talentos. Aqui, oferecemos uma análise assertiva e completa, traçando um guia para melhorar diferentes aspectos do seu negócio, enquanto sua empresa ganha autonomia para executá-lo.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* O que é pesquisa de clima */}
                        <AnimatedSection delay={0.15}>
                            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    O que é pesquisa de clima organizacional?
                                </h2>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    A pesquisa de clima é a ferramenta ideal para mapear problemas reais e em potencial das empresas, permitindo a prevenção destes obstáculos e aprimorando as políticas de gente e de gestão das organizações.
                                </p>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Esta ferramenta é realizada por meio da aplicação de formulários, com tópicos que se adaptam à necessidade atual de cada cliente e contém perguntas essenciais para uma análise completa do cenário atual, abordando assuntos como:
                                </p>
                                
                                <div className="grid md:grid-cols-2 gap-3">
                                    {[
                                        'Ambiente físico',
                                        'Motivação',
                                        'Integração',
                                        'Benefícios',
                                        'Política salarial',
                                        'Comunicação interna',
                                        'Liderança',
                                        'Condições de trabalho',
                                        'Perspectiva de crescimento profissional',
                                        'Política de desenvolvimento profissional',
                                        'Prática de valores',
                                        'Orgulho em trabalhar na empresa'
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Anonimato */}
                        <AnimatedSection delay={0.2}>
                            <div className="mb-12">
                                <div className="flex items-start gap-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
                                    <svg className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Garantia de Anonimato</h3>
                                        <p className="text-gray-600">
                                            Os formulários são aplicados de maneira anônima, garantindo que o colaborador tenha privacidade e se sinta confortável, com a certeza de que suas respostas não serão identificadas. Desta forma, é possível estimular a participação da equipe, aumentando a adesão de participantes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Como funciona */}
                        <AnimatedSection delay={0.25}>
                            <div className="mb-12">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Na pesquisa de clima organizacional, a consultoria de RH avalia a percepção real dos colaboradores, sobre aspectos que vão desde a infraestrutura, até a liderança. Com esse documento em mãos, são traçados planos de ação para que sua empresa aplique e melhore a satisfação interna.
                                </p>
                                
                                <p className="text-gray-600 leading-relaxed">
                                    Assim, direcionamos a elaboração do questionário de maneira assertiva, garantindo que as respostas se enquadrem na identificação das principais dores da empresa, transformando os depoimentos em norte para evoluir seus resultados.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Benefícios */}
                        <AnimatedSection delay={0.3}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                                    Benefícios da pesquisa de clima para sua empresa
                                </h2>
                                
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    A partir da pesquisa de satisfação, sua empresa ganha clareza sobre os desafios internos a serem ultrapassados e garante o comprometimento dos colaboradores com a equipe. Com os dados em mãos, é possível transformar percepções em ações práticas, possibilitando agir de maneira estratégica.
                                </p>
                                
                                <div className="grid gap-4">
                                    {[
                                        {
                                            titulo: 'Melhora do clima organizacional',
                                            descricao: 'Ao identificar pontos de conflitos, é possível criar um ambiente de trabalho mais saudável, colaborativo e alinhado aos valores da empresa.',
                                            cor: 'from-red-500 to-red-600'
                                        },
                                        {
                                            titulo: 'Gestão de pessoas mais eficiente',
                                            descricao: 'Sua empresa descobre pontos que prejudicam a performance do time, permitindo que a gestão atue diretamente nessas questões, facilitando a tomada de decisões assertivas.',
                                            cor: 'from-blue-500 to-indigo-600'
                                        },
                                        {
                                            titulo: 'Desenvolvimento de lideranças humanizadas',
                                            descricao: 'O líder passa a compreender melhor sua equipe, desenvolvendo uma gestão mais próxima, empática e estratégica.',
                                            cor: 'from-emerald-500 to-teal-600'
                                        },
                                        {
                                            titulo: 'Fortalecimento de marca empregadora',
                                            descricao: 'Ambientes de trabalho saudáveis atraem e retém talentos, transformando sua empresa em um espaço desejado por profissionais qualificados.',
                                            cor: 'from-purple-500 to-violet-600'
                                        },
                                        {
                                            titulo: 'Redução do turnover',
                                            descricao: 'Diminui a rotatividade de colaboradores, evitando gastos desnecessários com desligamentos, treinamentos e novas contratações.',
                                            cor: 'from-amber-500 to-orange-600'
                                        },
                                        {
                                            titulo: 'Aumento da produtividade',
                                            descricao: 'Ao se sentirem parte do processo de evolução da empresa, seus colaboradores ficam motivados a entregarem os melhores resultados.',
                                            cor: 'from-rose-500 to-pink-600'
                                        }
                                    ].map((beneficio, index) => (
                                        <div 
                                            key={index}
                                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`w-10 h-10 bg-gradient-to-br ${beneficio.cor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
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

                        {/* Transformando feedbacks */}
                        <AnimatedSection delay={0.35}>
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-12 text-white">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Transformando feedbacks em oportunidades
                                </h2>
                                
                                <p className="text-white/80 leading-relaxed mb-6">
                                    A pesquisa de clima é a solução ideal para empresas que desejam planejar melhorias assertivas dentro da organização, coletando dados concretos sobre a satisfação e engajamento dos colaboradores. Mais do que uma prática pontual, essa ferramenta deve ser encarada como um <strong className="text-white">processo contínuo de evolução</strong>, fortalecendo sua marca empregadora e impulsionando os resultados.
                                </p>
                                
                                <p className="text-white/80 leading-relaxed mb-6">
                                    Para que sua execução alcance o potencial máximo, é essencial que os líderes estejam abertos ao diálogo, incentivando a participação da equipe. Na prática, o feedback deixa de ser apenas um comentário e passa a ser uma <strong className="text-white">oportunidade de crescimento coletivo</strong>.
                                </p>
                                
                                <p className="text-white/80 leading-relaxed">
                                    Ao adotar a liderança humanizada, com foco no desenvolvimento da equipe, o gestor proporciona um ambiente de trabalho mais saudável, que conta com a escuta ativa para valorizar e motivar os colaboradores.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* CTA */}
                        <AnimatedSection delay={0.4}>
                            <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-8 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Quer extrair o potencial máximo da sua equipe?
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Na Talentos Consultoria de RH, nós acreditamos que feedbacks internos fortalecem seu negócio e se tornam guias para grandes resultados.
                                </p>
                                <ConsultorButton variant="primary" />
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
                            to="/servicos/pesquisa-de-clima-organizacional"
                            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                                <svg className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                                Conheça nosso serviço de Pesquisa de Clima
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Descubra como a Talentos pode ajudar sua empresa a implementar uma pesquisa de clima eficaz.
                            </p>
                        </Link>
                        
                        <Link 
                            to="/servicos/estruturacao-do-rh"
                            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                                <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                Estruturação do RH
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Transforme seu departamento de RH em um parceiro estratégico para o negócio.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPesquisaClimaPage;


