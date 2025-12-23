import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

// O que o programa inclui
const programaInclui = [
    { titulo: 'Aconselhamento de Carreira', desc: 'Planejamento e direcionamento profissional personalizado', icon: '🎯' },
    { titulo: 'Currículo Profissional', desc: 'Elaboração de currículo e perfil em redes profissionais', icon: '📄' },
    { titulo: 'Treinamento para Entrevistas', desc: 'Preparação completa para processos seletivos', icon: '🎤' },
    { titulo: 'Networking', desc: 'Estratégias e técnicas de networking eficaz', icon: '🤝' },
    { titulo: 'Mapeamento de Mercado', desc: 'Identificação de oportunidades no mercado de trabalho', icon: '🗺️' },
    { titulo: 'Suporte Emocional', desc: 'Apoio durante o período de transição', icon: '💚' },
];

// Benefícios para empresa
const beneficiosEmpresa = [
    'Melhora a imagem da empresa no mercado',
    'Preserva o clima entre colaboradores remanescentes',
    'Reduz riscos com processos trabalhistas',
    'Demonstra responsabilidade social',
    'Humaniza o processo de demissão',
];

// Benefícios para profissional
const beneficiosProfissional = [
    'Transforma demissão em oportunidade de crescimento',
    'Oferece direcionamento de carreira',
    'Acelera a recolocação no mercado',
    'Proporciona reflexão profissional',
    'Suporte emocional durante transição',
];

// FAQ
const faqItems = [
    {
        pergunta: 'O que é Outplacement?',
        resposta: 'Outplacement é o programa de Recursos Humanos que objetiva amenizar o impacto das demissões e facilitar a transição de carreira dos profissionais desligados. É um serviço oferecido pela empresa aos colaboradores que estão sendo desligados.',
    },
    {
        pergunta: 'Quais são os benefícios para a empresa?',
        resposta: 'Para a empresa, o Outplacement melhora a imagem no mercado, preserva o clima organizacional entre colaboradores remanescentes, reduz riscos de processos trabalhistas e demonstra responsabilidade social com os profissionais.',
    },
    {
        pergunta: 'Como funciona o programa?',
        resposta: 'O programa inclui: aconselhamento e planejamento de carreira, elaboração de currículo e perfil profissional, treinamento para entrevistas e networking, mapeamento de oportunidades de mercado e suporte emocional durante toda a transição.',
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

const OutplacementPage: React.FC = () => {
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
                            Transição de carreira
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                Outplacement
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                            Programa de <strong className="text-white">transição de carreira</strong> que humaniza o processo de demissão e oferece suporte aos profissionais desligados.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <a href="#solicitar-proposta" className="inline-flex items-center gap-2 bg-white text-red-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-1">
                                Fale com um Consultor
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+20</div>
                                <div className="text-white/60 text-sm">Anos de experiência</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">6</div>
                                <div className="text-white/60 text-sm">Etapas do programa</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">100%</div>
                                <div className="text-white/60 text-sm">Humanizado</div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O que é Outplacement?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            <strong className="text-red-600">Outplacement</strong> é o programa de Recursos Humanos que objetiva amenizar o impacto das demissões e facilitar a transição de carreira dos profissionais desligados.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Para o <strong className="text-gray-800">profissional</strong>, transforma a difícil experiência em oportunidade de reflexão e crescimento. Para a <strong className="text-gray-800">empresa</strong>, melhora a imagem no mercado, o clima entre colaboradores remanescentes e reduz riscos com processos trabalhistas.
                        </p>
                    </div>
                </div>
            </section>

            {/* O QUE O PROGRAMA INCLUI */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">PROGRAMA</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que o Programa Inclui?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {programaInclui.map((item, index) => (
                            <div key={item.titulo} className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="font-bold text-gray-800 mb-2">{item.titulo}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFÍCIOS */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-4">BENEFÍCIOS</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vantagens do Outplacement</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-2xl">🏢</span> Para a Empresa
                            </h3>
                            <div className="space-y-3">
                                {beneficiosEmpresa.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-emerald-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-white/80 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-2xl">👤</span> Para o Profissional
                            </h3>
                            <div className="space-y-3">
                                {beneficiosProfissional.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-emerald-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-white/80 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Saiba Mais Sobre Outplacement</h2>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            Ofereça um processo de demissão humanizado e cuide da imagem da sua empresa.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                to="/contato"
                                className="inline-flex items-center gap-2 bg-white text-red-700 font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Fale com um Consultor
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
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

export default OutplacementPage;

