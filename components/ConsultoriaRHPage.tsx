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

const CheckCircleIcon = () => (
    <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// Áreas de atuação
const areasAtuacao = [
    { titulo: 'Diagnóstico Organizacional', desc: 'Análise completa da situação atual do RH', icon: '🔍' },
    { titulo: 'Planejamento Estratégico', desc: 'Alinhamento do RH com objetivos de negócio', icon: '📊' },
    { titulo: 'Cultura e Valores', desc: 'Desenvolvimento da cultura organizacional', icon: '🎯' },
    { titulo: 'Gestão de Mudanças', desc: 'Condução de transformações organizacionais', icon: '🔄' },
    { titulo: 'Remuneração e Benefícios', desc: 'Políticas de remuneração competitivas', icon: '💰' },
    { titulo: 'Indicadores de RH', desc: 'Otimização de processos e métricas', icon: '📈' },
];

// Serviços oferecidos
const servicosOferecidos = [
    'Terceirização de Mão de Obra',
    'Recrutamento e Seleção',
    'Estruturação do RH',
    'Mapeamento e Descrição de Cargos',
    'Cargos e Salários',
    'Pesquisa de Clima Organizacional',
    'Outplacement',
    'Projetos Customizados',
];

// FAQ
const faqItems = [
    {
        pergunta: 'O que é Consultoria de RH?',
        resposta: 'Nossa consultoria de RH atua como um parceiro estratégico, oferecendo diagnósticos, recomendações e suporte na implementação das melhores práticas de gestão de pessoas. Ajudamos a alinhar as estratégias de RH com os objetivos de negócio da sua empresa.',
    },
    {
        pergunta: 'Por que contratar uma consultoria de RH?',
        resposta: 'Para a sua organização obter sucesso e resultados econômicos positivos, suas ações precisam estar alinhadas com estratégias que as tornem competitivas. Todas as atividades que tornam sua empresa mais enxuta e atraente dependem de PESSOAS.',
    },
    {
        pergunta: 'Quais serviços a Talentos oferece?',
        resposta: 'Oferecemos um portfólio completo: Terceirização de Mão de Obra, Recrutamento e Seleção, Estruturação do RH, Mapeamento e Descrição de Cargos, Cargos e Salários, Pesquisa de Clima, Outplacement e Projetos Customizados.',
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

const ConsultoriaRHPage: React.FC = () => {
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
                            Parceiro estratégico
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Consultoria de<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                RH
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                            Soluções para apoiar e otimizar processos relacionados à <strong className="text-white">gestão de pessoas</strong> e impulsionar os resultados do seu negócio.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <ConsultorButton variant="light" />
                        </div>

                        <div className="flex flex-wrap gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+20</div>
                                <div className="text-white/60 text-sm">Anos de experiência</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+8.300</div>
                                <div className="text-white/60 text-sm">Contratações</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">9</div>
                                <div className="text-white/60 text-sm">Soluções de RH</div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Parceiro Estratégico em RH</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Para a sua organização obter sucesso e resultados econômicos positivos, suas ações precisam estar alinhadas com estratégias que as tornem competitivas.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Todas as atividades que tornam sua empresa mais enxuta e atraente dependem de <strong className="text-red-600">PESSOAS</strong>. A Talentos é uma consultoria especializada em RH que oferece serviços para apoiar e otimizar processos ou solucionar problemas relacionados à gestão de pessoas.
                        </p>
                    </div>
                </div>
            </section>

            {/* ÁREAS DE ATUAÇÃO */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">ÁREAS DE ATUAÇÃO</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossa Consultoria de RH Atua em:</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {areasAtuacao.map((area, index) => (
                            <div key={area.titulo} className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
                                <h3 className="font-bold text-gray-800 mb-2">{area.titulo}</h3>
                                <p className="text-gray-600 text-sm">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVIÇOS */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-4">SERVIÇOS</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nosso Portfólio de Soluções</h2>
                            <p className="text-lg text-white/70">Oferecemos um portfólio completo de serviços em RH</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            {servicosOferecidos.map((servico, index) => (
                                <div key={servico} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-white">{servico}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* POR QUE ESCOLHER */}
            <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Por Que Escolher a Talentos Consultoria?</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">+20</div>
                                <p className="text-white/80">Anos de mercado</p>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">+8.300</div>
                                <p className="text-white/80">Contratações efetivadas</p>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">99,78%</div>
                                <p className="text-white/80">De satisfação</p>
                            </div>
                        </div>
                        <p className="text-center text-white/60 text-sm mt-6">*Dados apurados em janeiro de 2024</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Fale com Nossos Consultores</h2>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            Conte-nos sobre os desafios de RH da sua empresa e vamos encontrar a melhor solução juntos.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Explore Nossas Soluções</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Conheça todos os nossos serviços de RH e descubra como podemos ajudar sua empresa.</p>
                    <button onClick={scrollToServices} className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-red-700 transition-all duration-300">
                        Ver Todos os Serviços
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ConsultoriaRHPage;

