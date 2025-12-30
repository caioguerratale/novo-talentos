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

// O que o documento apresenta
const documentoApresenta = [
    { titulo: 'Descrição e Atividades', desc: 'Descrição, responsabilidades e atividades desempenhadas de cada cargo', icon: '📋' },
    { titulo: 'Experiência e Formação', desc: 'Nível de experiência e formação acadêmica exigida para os cargos', icon: '🎓' },
    { titulo: 'Conhecimentos Técnicos', desc: 'Conhecimentos técnicos e habilidades específicas para cada posição', icon: '💻' },
    { titulo: 'Soft Skills', desc: 'Soft Skills desejadas nas pessoas nos cargos', icon: '🤝' },
    { titulo: 'Ambiente de Trabalho', desc: 'As condições do ambiente que afetam o contexto do trabalho', icon: '🏢' },
    { titulo: 'Níveis de Autoridade', desc: 'Os níveis de autoridade que se relacionam com o cargo, acima e abaixo', icon: '📊' },
];

// Vantagens
const vantagens = [
    'Estabelece critérios para contratação de funcionários',
    'Facilita o planejamento financeiro',
    'Assegura igualdade entre as pessoas com cargos iguais',
    'Reduz os custos de turnover e absenteísmo',
    'Melhora o clima organizacional e a produtividade das equipes',
    'Motiva o funcionário a investir em sua qualificação',
    'Promove o desenvolvimento de carreiras',
];

// FAQ
const faqItems = [
    {
        pergunta: 'O que é mapeamento de cargos?',
        resposta: 'É a atividade de levantamento de informações e descrição de cada posição de trabalho que existe na empresa. Complementar ao mapeamento, há a descrição dos cargos, documento em que são apresentados os cargos existentes, suas descrições, atribuições, objetivos, relações com outros cargos, bem como as definições das características ideais dos profissionais que ocupam tais posições.',
    },
    {
        pergunta: 'Quais informações são apresentadas no relatório de descrição de cargos?',
        resposta: 'No relatório são apresentadas: descrição, responsabilidades e atividades de cada cargo; nível de experiência e formação acadêmica exigida; conhecimentos técnicos e habilidades específicas; Soft Skills desejadas; condições do ambiente de trabalho; e os níveis de autoridade relacionados ao cargo.',
    },
    {
        pergunta: 'Quais são as vantagens do mapeamento e descrição de cargos?',
        resposta: 'As principais vantagens incluem: estabelecer critérios para contratação, facilitar o planejamento financeiro, assegurar igualdade salarial, reduzir turnover e absenteísmo, melhorar o clima organizacional, motivar funcionários a investir em qualificação, promover desenvolvimento de carreiras e aumentar resultados de negócios.',
    },
];

// FAQ Accordion
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

const MapeamentoCargosPage: React.FC = () => {
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
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Consultoria especializada
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Mapeamento e<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                Descrição de Cargos
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                            Melhore a visão sobre os cargos da sua empresa e desenvolva <strong className="text-white">equipes mais produtivas</strong>.
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
                                <div className="text-3xl md:text-4xl font-black text-white">99,78%</div>
                                <div className="text-white/60 text-sm">Satisfação</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* INTRODUÇÃO */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            O que é Mapeamento de Cargos?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            O <strong className="text-red-600">mapeamento de cargos</strong> é a descrição de cada posição de trabalho que existe na empresa, com as suas competências, habilidades requeridas, responsabilidades e salário correspondente.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            O mapeamento e descrição de cargos ajuda as empresas a desenvolverem e contratarem pessoas, focando na <strong className="text-gray-800">melhor adequação dos perfis e habilidades dos profissionais às exigências e responsabilidades dos cargos</strong>.
                        </p>
                        
                        <div className="inline-flex items-center gap-3 bg-emerald-50 text-emerald-800 px-6 py-4 rounded-xl border border-emerald-200">
                            <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">Resultado: melhor clima organizacional, equipes mais produtivas e melhores resultados de negócios.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* O QUE O DOCUMENTO APRESENTA */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            DOCUMENTO DE DESCRIÇÃO
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            O que o Documento de Descrição de Cargos Apresenta?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {documentoApresenta.map((item, index) => (
                            <div 
                                key={item.titulo}
                                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="font-bold text-gray-800 mb-2">{item.titulo}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VANTAGENS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div>
                            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                                VANTAGENS
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Benefícios do Mapeamento de Cargos
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                O mapeamento faz um levantamento de todos os cargos da empresa e descreve o que os colaboradores precisam ter para executar aqueles cargos, de modo a ajudar a empresa a alcançar sua visão de futuro.
                            </p>
                            
                            <div className="space-y-4">
                                {vantagens.map((vantagem, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircleIcon />
                                        <span className="text-gray-700">{vantagem}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-3xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Por Que Escolher a Talentos?</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-4xl font-black text-amber-400">+20</div>
                                    <p className="text-white/70">Anos de mercado</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-amber-400">+8.300</div>
                                    <p className="text-white/70">Contratações efetivadas</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-amber-400">99,78%</div>
                                    <p className="text-white/70">De satisfação</p>
                                </div>
                            </div>
                            <p className="text-white/50 text-sm mt-6">*Dados apurados em janeiro de 2024</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Perguntas Frequentes
                            </h2>
                        </div>

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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Saiba Mais Sobre Mapeamento de Cargos
                        </h2>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            Quer saber como a gente poderia ajudar a sua empresa? Entre em contato com nossos consultores especializados.
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

export default MapeamentoCargosPage;

