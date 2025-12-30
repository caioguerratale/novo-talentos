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

// Exemplos de projetos
const exemplosProjetos = [
    { titulo: 'Avaliação de Desempenho', desc: 'Programas estruturados de avaliação e feedback', icon: '📊' },
    { titulo: 'Desenvolvimento de Lideranças', desc: 'Formação e capacitação de líderes', icon: '👔' },
    { titulo: 'Onboarding', desc: 'Programas de integração de novos colaboradores', icon: '🚀' },
    { titulo: 'Planejamento de Sucessão', desc: 'Identificação e preparação de sucessores', icon: '📈' },
    { titulo: 'Mapeamento de Competências', desc: 'Identificação de habilidades e gaps', icon: '🎯' },
    { titulo: 'Palestras e Workshops', desc: 'Eventos de capacitação e motivação', icon: '🎤' },
    { titulo: 'Pesquisa de Engagement', desc: 'Medição de engajamento das equipes', icon: '💡' },
    { titulo: 'Assessment', desc: 'Avaliação de perfil comportamental', icon: '🔍' },
];

// Áreas de atuação
const areasAtuacao = [
    { titulo: 'Gestão de Pessoas', icon: '👥' },
    { titulo: 'Recursos Humanos', icon: '📋' },
    { titulo: 'Departamento Pessoal', icon: '📁' },
    { titulo: 'Desenvolvimento Organizacional', icon: '🏢' },
];

// FAQ
const faqItems = [
    {
        pergunta: 'O que são Projetos Customizados?',
        resposta: 'São projetos de RH desenvolvidos sob medida para atender às demandas específicas da sua empresa. Cada organização é única, por isso desenvolvemos soluções personalizadas para resolver seus desafios em gestão de pessoas.',
    },
    {
        pergunta: 'Quais tipos de projetos vocês desenvolvem?',
        resposta: 'Desenvolvemos diversos tipos de projetos: programas de avaliação de desempenho, desenvolvimento de lideranças, onboarding, planejamento de sucessão, mapeamento de competências, palestras, workshops, assessment, e muito mais.',
    },
    {
        pergunta: 'Como funciona o processo?',
        resposta: 'Primeiro, entendemos a sua necessidade específica. Em seguida, desenvolvemos uma proposta personalizada de projeto. Após aprovação, executamos o projeto com acompanhamento constante e entregamos resultados mensuráveis.',
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

const ProjetosCustomizadosPage: React.FC = () => {
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
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Soluções sob medida
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Projetos<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                Customizados
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                            Desenvolvemos projetos de RH <strong className="text-white">totalmente personalizados</strong> para atender às demandas específicas da sua empresa.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <ConsultorButton variant="light" />
                        </div>

                        <div className="flex flex-wrap gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">100%</div>
                                <div className="text-white/60 text-sm">Personalizado</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+20</div>
                                <div className="text-white/60 text-sm">Anos de experiência</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+8</div>
                                <div className="text-white/60 text-sm">Tipos de projetos</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
            </section>

            {/* INTRODUÇÃO */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Soluções Personalizadas para Sua Empresa</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Se a sua empresa precisa de apoio para solucionar desafios relacionados a <strong className="text-gray-800">Gestão de Pessoas, Recursos Humanos e Departamento Pessoal</strong>, entre em contato com a Talentos Consultoria.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Entendemos que cada organização é única. Por isso, desenvolvemos projetos de RH <strong className="text-red-600">totalmente personalizados</strong> para atender às suas demandas específicas.
                        </p>
                    </div>
                </div>
            </section>

            {/* EXEMPLOS DE PROJETOS */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">EXEMPLOS</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tipos de Projetos que Desenvolvemos</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {exemplosProjetos.map((projeto, index) => (
                            <div key={projeto.titulo} className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{projeto.icon}</div>
                                <h3 className="font-bold text-gray-800 text-sm mb-1">{projeto.titulo}</h3>
                                <p className="text-gray-500 text-xs">{projeto.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ÁREAS DE ATUAÇÃO */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-4">ÁREAS</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Áreas de Atuação</h2>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto">Oferecemos soluções para diversas áreas relacionadas a pessoas</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {areasAtuacao.map((area) => (
                            <div key={area.titulo} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                                <div className="text-4xl mb-3">{area.icon}</div>
                                <h3 className="font-semibold text-white">{area.titulo}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">FAQ</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            {faqItems.map((item, index) => (
                                <FAQItem key={index} item={item} isOpen={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA - FALE COM UM CONSULTOR */}
            <section id="solicitar-proposta" className="py-20 bg-gradient-to-br from-red-700 via-red-800 to-red-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Conte-nos Seu Desafio</h2>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            Seja qual for o seu desafio em gestão de pessoas, nós temos a solução. Entre em contato com nossos consultores especializados.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <ConsultorButton variant="cta" />
                            <a href="tel:+552131769500" className="text-white/80 hover:text-white transition-colors">
                                ou ligue: <span className="font-bold text-white">(21) 3176-9500</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Conheça todos os nossos serviços de RH</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Oferecemos um portfólio completo de soluções em Recursos Humanos.</p>
                    <button onClick={scrollToServices} className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-red-700 transition-all duration-300">
                        Ver Todos os Serviços
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProjetosCustomizadosPage;

